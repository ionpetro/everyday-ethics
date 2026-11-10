const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {loadUnits} = require('../src/course.js');
const {Engine:E} = require('../src/engine.js');
const units=loadUnits();
const sources=require('../src/sources.json');
const labs=require('../src/labs.json');

test('release contains twelve distinct everyday topics, forty-eight substantive lessons and six dilemmas',()=>{
  assert.equal(units.length,12);
  assert.deepEqual(units.map(u=>u.subject),E.SUBJECT_IDS);
  assert.equal(new Set(units.map(u=>u.id)).size,12);
  for(const u of units){
    assert.equal(u.lessons.length,4,u.id);
    for(const l of u.lessons){
      assert.ok(l.items.length>=6,l.id+' needs substantive teaching and varied practice');
      assert.ok(l.objective && l.takeaway && l.fieldwork,l.id+' needs objective, takeaway and reflection');
      assert.ok(l.items.some(i=>i.kind==='rule'),l.id+' needs instruction');
      assert.ok(l.items.some(i=>i.transfer),l.id+' needs a new transfer case');
      assert.ok(new Set(l.items.map(i=>i.kind)).size>=4,l.id+' needs varied retrieval');
    }
  }
  assert.equal(labs.length,6);
});

test('production has explicit provenance and no leftover sales source identities',()=>{
  const ids=new Set(sources.map(s=>s.id));
  for(const u of units) for(const l of u.lessons) for(const i of l.items){
    assert.ok(i.sourceIds.length,i.id);
    assert.ok(i.sourceIds.every(id=>ids.has(id)),i.id);
    assert.ok(!i.sourceIds.some(id=>/^S\d|^N\d/.test(id)),i.id);
    assert.ok(['ethics','practice','fictional','evidence'].includes(i.status));
    if(i.kind==='hypo'||i.kind==='argue') assert.equal(i.status,'fictional',i.id);
  }
});

test('timed practice excludes judgments, while untimed scenarios cover every topic',()=>{
  const ix=E.indexCourse(units),s=E.freshState();
  const pool=E.crossExamPool(ix,s);
  assert.ok(pool.length>=3,'neutral recall must actually be playable');
  for(const i of pool){
    assert.notEqual(i.status,'ethics');
    assert.ok(!['hypo','argue','trap'].includes(i.kind));
    assert.notEqual(i.speed,false);
  }
  assert.equal(E.HYPO_MS,null);
  for(const subject of E.SUBJECT_IDS){
    assert.ok([...ix.items.values()].filter(i=>i.subject===subject && ['hypo','argue'].includes(i.kind)).length>=8,subject);
  }
});

test('build excludes inherited telemetry and uses a separate progress identity',()=>{
  const read=n=>fs.readFileSync(path.join(__dirname,'..',n),'utf8');
  const app=read('src/app.js'),build=read('build.mjs'),shell=read('src/shell.html');
  assert.ok(app.includes('"everyday-ethics:family:v1"'));
  assert.ok(app.includes('"everyday-ethics-family"'));
  assert.ok(!build.includes("read('src/analytics.js')"));
  assert.ok(!app.includes('window.PulseAnalytics'));
  assert.ok(!/posthog\.init|api_key|phc_/.test(app+shell+build));
  assert.ok(shell.includes('ETHICS_UNITS'));
  assert.ok(!app.includes('starCard()'),'unpublished repository must not invoke the inherited missing star-card renderer');
});

test('a sitting opens with a concrete dilemma when a non-transfer scenario is available',()=>{
  const ix=E.indexCourse(units);
  for(const l of ix.lessons) E.lessonSittings(ix,l.id).forEach((ids,sitting)=>{
    if(!ids.some(id=>ix.items.get(id).kind==='hypo' && !ix.items.get(id).transfer)) return;
    const qs=E.buildLesson(ix,E.freshState(),l.id,17,sitting);
    const guess=qs.find(q=>q.guess);
    assert.ok(guess,l.id);
    assert.equal(ix.items.get(guess.itemId).kind,'hypo',l.id);
    assert.ok(!ix.items.get(guess.itemId).transfer,l.id);
    assert.equal(guess.marks,undefined,l.id+' opener must remain unscored');
  });
});
