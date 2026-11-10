const test = require('node:test');
const assert = require('node:assert/strict');
const { validateLabs } = require('../tools/validate.js');
const labs = require('../src/labs.json');
const sources = require('../src/sources.json');

const EXPECTED = ['friend-idea', 'shared-photo', 'community-places', 'teammate-demo', 'ai-shortcut', 'broken-promise'];

test('six distinct Everyday Ethics stories have valid sources and reachable completion routes', () => {
  assert.deepEqual(labs.map(l => l.id), EXPECTED);
  const result = validateLabs(labs);
  assert.deepEqual(result.errors, []);
  const ids = new Set(sources.map(s => s.id));
  for (const lab of labs) {
    assert.ok(lab.context.startsWith('Fictional case.'), `${lab.id}: identify the authored scenario`);
    assert.ok(Object.keys(lab.nodes).length >= 8, `${lab.id}: substantial branching story`);
    assert.ok(Object.values(lab.nodes).filter(n => n.ending).length >= 3, `${lab.id}: multiple endings`);
    assert.ok(Object.values(lab.nodes).some(n => n.changedInformation && n.context.startsWith('New information:')), `${lab.id}: changing facts are explicit`);
    for (const id of lab.sourceIds) assert.ok(ids.has(id), `${lab.id}: registered source ${id}`);
  }
});

test('every choice leads to a finite ending with consequences and private reflection, without moral scoring', () => {
  for (const lab of labs) {
    const seen = new Set();
    const paths = [];
    const walk = (id, route) => {
      assert.ok(!route.includes(id), `${lab.id}: cycle ${route.join(' -> ')} -> ${id}`);
      const n = lab.nodes[id];
      assert.ok(n, `${lab.id}: dangling target ${id}`);
      seen.add(id);
      for (const key of ['score', 'moralScore', 'correct', 'answer', 'points']) assert.ok(!Object.hasOwn(n,key), `${lab.id}/${id}: ${key} would assign a grade to a branch`);
      if (n.ending) {
        assert.ok(n.text && n.lesson && n.reflection, `${lab.id}/${id}: ending explains consequences and asks for reflection`);
        paths.push([...route,id]);
        return;
      }
      assert.ok(n.speaker && n.prompt, `${lab.id}/${id}: speaker and prompt render`);
      assert.ok(n.choices.length >= 2 && n.choices.length <= 4, `${lab.id}/${id}: manageable alternatives`);
      assert.equal(new Set(n.choices.map(c=>c.text)).size,n.choices.length, `${lab.id}/${id}: distinct choices`);
      for (const c of n.choices) {
        assert.ok(c.text && c.feedback, `${lab.id}/${id}: choice and consequence are readable`);
        for (const key of ['score','moralScore','correct','points']) assert.ok(!Object.hasOwn(c,key), `${lab.id}/${id}: choices are not moral scores`);
        walk(c.next,[...route,id]);
      }
    };
    walk(lab.start,[]);
    assert.equal(seen.size,Object.keys(lab.nodes).length, `${lab.id}: every node reachable`);
    assert.ok(paths.some(p=>p.filter(id=>!lab.nodes[id].ending).length >= 3), `${lab.id}: supports reconsideration beyond a single question`);
    assert.ok(paths.some(p=>p.some(id=>lab.nodes[id].changedInformation)), `${lab.id}: new information is encountered on a real route`);
    assert.ok(paths.every(p=>p.length <= 9), `${lab.id}: stories finish without becoming unbounded`);
  }
});

test('lab validation catches broken branches, cycles, unreachable material and missing provenance', () => {
  const dangling = structuredClone(labs[0]);
  dangling.nodes[dangling.start].choices[0].next = 'missing';
  assert.ok(validateLabs([dangling]).errors.some(e => e.includes('dangling')));
  const cycle = structuredClone(labs[0]);
  cycle.nodes[cycle.start].choices[0].next = cycle.start;
  assert.ok(validateLabs([cycle]).errors.some(e => e.includes('cycle')));
  const unreachable = structuredClone(labs[0]);
  unreachable.nodes.unreachable = {ending:'Done',text:'Done.',lesson:'Review the decision.',reflection:'What changed?'};
  assert.ok(validateLabs([unreachable]).errors.some(e => e.includes('unreachable')));
  const source = structuredClone(labs[0]);
  source.sourceIds = ['unknown'];
  assert.ok(validateLabs([source]).errors.some(e => e.includes('sourceIds')));
});
