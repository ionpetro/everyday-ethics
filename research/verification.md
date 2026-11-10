# Verification — November 10, 2026

## Final automated checks

`npm test`: 57 tests passed, none failed or skipped. Coverage includes native engine progression and state normalization, generated questions and roundups across 40 seeds, source coverage, transfer ordering, boundary inclusion, neutral-only timed recall, and all branching lab routes.

`npm run validate`: 0 errors, 26 warnings across the production corpus and inherited authoring fixture. Twenty-four warnings concern deliberately shorter introductory sorting/matching sets, reviewed in foundations.md. Two belong to the fixture, which is excluded from production. Lab validation enumerates 59 nodes, 21 endings and 92 finite routes.

`npm run build`: successful static build of 12 units, 48 lessons, 288 semantic items and 6 dilemma labs, approximately 699 KB.

## Browser checks

Tested the built app in the Codex in-app browser, including a real 390px iframe viewport because the host viewport override did not reliably produce phone dimensions. The app's document and scroll widths both measured 389px, with no horizontal overflow. Inspected light and dark appearance and saved a phone screenshot in screenshots/first-dilemma.jpg. The temporary phone harness is excluded from the deployment.

- Started with onboarding and completed all steps of the first lesson, including teaching, recall, scenarios, sorting, misconception repair, deciding facts, typed recall, construction and transfer. The result awarded 17 practice XP, a first-lesson badge, and unlocked the next lesson.
- Followed the friend's business-idea dilemma through changed information and a boundary ending. Wrote a synthetic reflection, reopened the lab and verified its saved reflection control.
- Reloaded the browser and verified that progress, the completed lesson, reflection and appearance persisted.
- Searched the field guide for consent and expanded source/limitation details.
- Opened the export dialog, retrieved its visible backup text, saved that exact text to a temporary JSON file and imported it through the actual file picker and confirmation dialog. The UI reported “Progress imported” and restored 17 XP, one completed lesson and one explored dilemma. The backup includes the synthetic reflection.
- Inspected the final first-dilemma layout and its three choices at phone width after the final build.

The first lesson was manually completed before the later scenario-first opener refinement. That refinement is covered by the final engine test. Quick recall, daily/mixed practice and all remaining lesson permutations were exercised by automated engine/content tests rather than all being manually completed in a browser.

## Limits and independent review

The in-app browser's download-event wait timed out when testing the native Blob download. File download completion is therefore not claimed verified. The export dialog now supplies visible, selectable backup text as a fallback; that text and file import were verified end to end. Progress is browser-local, with explicit backup transfer rather than automatic device sync.

Two independent content passes reviewed the full curriculum. The lab reviewer inspected all 59 nodes and app integration. All reported correctness findings were corrected; detailed scope and provenance are in foundations.md, practice.md and labs-review.md. Direct ACM page retrieval returned HTTP 403; the practice-source limitation is recorded in practice.md. This review does not establish learning efficacy, changed behavior or a moral assessment of learners.

No O-1 records, meeting content, personal communications or upstream private material were used. The deployed build contains only the authored educational application. Owner-private access is preserved by the private Sites publishing operation; the successful deployment response is the publication record.

## GitHub links update — November 10, 2026

Added the project's GitHub link to onboarding, header and footer, and explicit repository links to all seven sibling entries. The family registry now contains all eight projects and matches the sibling apps and their companion pages. The source repository is public; the Sites preview remains owner-private.

All eight app builds and their existing test suites passed (340 tests total). Everyday Ethics validation remains at 0 errors and the same 26 documented warnings. Browser checks verified the rendered repository destinations in Skepsis, Carpe and Guanxi companion pages and the Everyday Ethics onboarding. No learning or progress logic changed.
