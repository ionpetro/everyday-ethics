# Everyday Ethics

**Small choices. Real life.** A learning app for practicing thoughtful decisions in friendships, work, community and digital life. Milo, a small tortoise, invites you to pause, consider another perspective, and try a different response.

Built as a direct sibling of Agora, Oikos, Carpe and Skepsis, using the actual family engine, question renderers and phone-width design. This is a new experiment; the sibling projects are unchanged.

## Course

Twelve units, four lessons per unit, plus a mixed roundup for each unit:

1. Honesty and loyalty
2. Facts and uncertainty
3. Ethical perspectives
4. Care and boundaries
5. Meaningful choice
6. Fairness
7. Promises
8. Influence
9. Digital life
10. Speaking up
11. Repair
12. Practical judgment

Six branching dilemma labs explore a friend's business idea, a shared photo, scarce community places, a teammate's demo, an AI shortcut, and a broken promise. Their fictional consequences are possibilities, not predictions. Different defensible routes can end differently. Reflections receive no grade.

## How practice works

- An unscored first guess, a concise teaching card, immediate recall, then harder practice.
- Native question forms include scenarios, concept recall, construction, matching, distinctions, deciding facts, and misconception repair. These are semantic content records, not repeated fixed quizzes.
- Held-back transfer cases ask you to apply an idea in a new situation after learning it.
- Short sittings, unit roundups, daily practice, mixed challenges and a mistakes notebook.
- Spaced return at 1, 3, 7, 14, 30 and 60 days; forgiving streaks with weekend protection and freezes.
- Optional timed recall uses eligible neutral concepts only. Ethical decisions and dilemmas are untimed.
- XP measures practice completed, never moral worth, virtue or professional competence.

Scored scenarios depend on their explicit facts and question. They assess a taught distinction or conditional inference. They do not establish that one ethical perspective always wins. Reasonable disagreements belong in the branching stories and optional reflections.

## Run

No package dependencies or API keys are needed. Use Node.js and Python 3:

```sh
npm test
npm run validate
npm run build
npm run dev
```

Open http://127.0.0.1:4391. The build produces a standalone static site in `dist/`. All course data and the engine are included in the page. Google Fonts is the only external runtime resource; local font fallbacks are provided.

## Privacy and access

No analytics, account system, AI service or advertising is loaded. Progress, optional name and reflections stay in this browser's local storage. Export/import from **Me** provides a backup and device transfer. Clearing browser data removes local progress. This is not automatic cross-device synchronization.

The Sites deployment begins owner-private. Its identity is in `.openai/hosting.json`. Publication and access are separate; do not change sharing to deploy. The MIT-licensed source is available at [ionpetro/everyday-ethics](https://github.com/ionpetro/everyday-ethics). Each app in the family links to the other projects and their GitHub repositories.

## Files

- `app/src/app.js`, `style.css`, `shell.html`: inherited family interface and question renderers; Everyday Ethics copy, tortoise and sage palette.
- `app/src/engine.js`: dates, question generation, progression, spaced review and safe backup normalization.
- `app/src/units/u01.js`–`u12.js`: original semantic lesson content.
- `app/src/labs.json`: branching dilemmas and reflections.
- `app/src/sources.json`: source registry, attribution and limitations.
- `app/CONTENT_SCHEMA.md`: authoring contract.
- `app/test/`, `app/tools/validate.js`: engine, generated-question, curriculum and lab checks.
- `research/`: curriculum rationale and review records.

## Sources and limits

The Markkula Center for Applied Ethics framework and its introduction inform the course's multiple perspectives and reflective method. The ACM Code of Ethics supports computing-specific examples within its professional scope. Teaching routines and scenarios are original adaptations, not quotations, validated behavior assessments or legal advice. Each card and lab links its relevant sources and limitations.

The authoring fixture `u0_example.js` is inherited for testing all supported item forms and is excluded from production.
