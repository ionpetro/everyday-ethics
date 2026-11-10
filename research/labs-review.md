# Everyday Ethics — branching dilemma review

Authored and checked November 10, 2026. These are original fictional educational situations, not reconstructed conversations, predictions of real behavior, or professional advice.

## Delivered stories

| ID | Decision focus | Relevant change in information |
| --- | --- | --- |
| `friend-idea` | Support and honesty without assuming an expert role | Unagreed unpaid labor, a near-term deposit, and a partner relying on an incomplete picture |
| `shared-photo` | Permission for a new audience, identification and repair | A guest refuses public use; a crop still identifies them; a copy can outlive the original post |
| `community-places` | Competing fairness criteria and correctable facts | Differing future availability, disproportionate evidence requests, and an eligibility correction |
| `teammate-demo` | Accurate claims, speaking up and safer review routes | An unverified fix, refusal to correct privately, and an accountable reviewer who can act before reliance |
| `ai-shortcut` | Evidence, relevance and accountable decision making | Unsupported wording affected the ranking, a published tie process exists, and a meaningful review is available |
| `broken-promise` | A changed commitment and practical repair | The friend's most important task, reliance on a renewed promise, replacement costs, and requested privacy limits |

The six stories contain 59 reachable nodes, 21 endings and 92 finite completion routes. These counts were computed by `validateLabs`; they are not measures of educational effectiveness.

## Design choices

- Decisions have no correct-answer flag, timer, points or moral-person rating. The existing lab renderer displays choice consequences and private reflection.
- Several branches offer more than one defensible response. For example, the community workshop can justify either need priority or equal chances while naming what each leaves unmet. A person can offer bounded help or decline an uncertain commitment without a character judgment.
- Clearly problematic branches remain available for exploration and correction. Unsupported reassurance, ignoring a refusal or hiding behind an AI output are followed by consequences and a specific repair opportunity, not insults to the learner.
- A corrected choice does not promise sales, forgiveness, friendship, total deletion of data, or a good outcome. Uncertainty and costs remain visible at endings.
- Speakers and events are fictional. Learners are never instructed to confront someone who may retaliate, disclose private details, spend money they cannot afford, or perform a consequential real-world experiment.
- Source links identify the frameworks behind the authored questions; they do not imply that the source authors endorsed these cases or validated their answer paths.

## Sources and limits

The [Markkula ethical decision-making framework](https://www.scu.edu/ethics/ethics-resources/a-framework-for-ethical-decision-making/) and its [introduction](https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/introduction-to-a-framework-for-ethical-decision-making/) were read November 10, 2026. Their emphasis on affected people, evidence, alternative actions, competing perspectives and reconsideration informs the stories. The introduction explicitly leaves the final judgment to the person using the framework. The labs therefore avoid deriving a universal answer key from it.

The ACM code URL returned HTTP 403 in this review. No lab requires E3; the digital lab uses E1/E2 and original practice guidance. This is not a legal compliance course or an assessment of a person's character.

## Verification

`node --test app/test/labs.test.js` passed all three test groups. Tests enumerate every branch, verify that choices reach finite endings, reject cycles/dangling/unreachable targets, check source registration, require explicit changes of information and multiple endings, and reject scoring fields on decisions and choices. Each lab has a route with at least three decision nodes and all routes finish in at most nine nodes.

Manual semantic review covered all 59 nodes and their choices, route continuity, consequences, reflection prompts and unsupported outcome claims. A review correction made the limited availability in `broken-promise` explicit before asking the learner to offer a time slot. This prevents a choice from silently inventing a fact about the protagonist's schedule.

Browser behavior, save/import integration, visual layout and accessibility are owned by the parent app integration task and are not claimed verified by this file.

## Independent course review, initial pass

Read every teaching line, inline check, case, key, sort, matching item and misconception in units u01 and u02 when they became available. The examples generally use explicit aims or evidence questions, and do not declare a learner's character. Two narrow findings were sent to the author: make the disproof of a teammate accusation more specific than mere absence, and define a guarantee more precisely than any claim beyond a limited observation. Further units were still being authored at that point.

## App integration audit

Read the app's rendering and event wiring, run lifecycle, lesson/practice/flash/mixed/quick-recall modes, grading and completion, backup import/export, source library, lab history/reflection and keyboard handling, plus the related engine builders and normalization. No shared implementation files were changed by this reviewer.

Findings sent to the parent:

1. **Empty Quick recall pool:** with the first six authored units, every eligible item had `speed: false`, and an actual `crossExamPool` call returned an empty array while the button remained visible. Recommended explicitly permitting a reviewed set of neutral concept terms; ethical decisions should remain untimed.
2. **Long challenge count:** the UI advertised 100 situations although the planned corpus has 96 applied cases (two per each of 48 lessons). The engine correctly limits to available unique cases. Recommended deriving the displayed count or using “Full course challenge.”
3. **First experience:** the builder picked the first guessable item in authored order; because the term preceded the case, the first experience was a vocabulary question instead of the promised everyday dilemma. Recommended prioritizing a non-transfer applied case and falling back to terms only when none exists.

The parent owns fixes and final browser verification. These observations are not claims that the current final app still contains the defects.

Additional course pass: reviewed units u03, u04, u07, u08 and u09 teaching lines, inline checks, keyed scenarios and practice classifications. Sent u09-l4-practice's author one factual mismatch: counting likes does not itself add reach; the item should describe reposting based on likes or use a broader bucket. The author confirmed a correction. The two u02 findings were also corrected by their author.

Follow-up review read all four alternatives and explanations in u03/u04/u07/u08/u09, and the full teaching/check/case/practice/fieldwork content of u10 and u11. No additional ambiguous answer key was identified. Suggested replacing a few implausible distractors (such as choosing by a font or poster) with plausible beginner errors. This is a challenge-quality refinement, separate from correctness. Fieldwork in u10/u11 stays fictional and does not demand consequential confrontation or disclosures.

## Completion of the independent pass

Reviewed u05/u06 in full, all remaining u01/u02 answer alternatives, and u12. Scope now covers all 12 production units: teaching statements, inline checks, applied cases with all four alternatives and explanations, sorting/matching/sequence tasks, misconception repairs, boundaries and transfer cases. Reviewed u10–u12 fieldwork explicitly for consequential-action demands; the exercises remain fictional.

Two additional u12-l1 findings were sent to the author: add the budget premise used by the room-choice key, and establish the garden committee's stated evaluation/choice/review rather than let the answer invent those facts. No other new correctness issue was identified. A review is not proof that no future correction will be needed, or that completing the course changes behavior.

Targeted rechecks after integration fixes:

- The completed corpus indexes 12 units and 288 semantic items.
- `crossExamPool` now returns 17 practice-status term cards. No ethical scenario or normative commitment enters the timed pool.
- The first lesson's no-penalty guess now uses `u01-l1-case`, an applied dilemma, rather than an unfamiliar term.
- The long challenge produces 96 unique cases, and the visible count now derives from available cases.
- The save routine now reports an actual browser-storage write failure, and the reflection view has a corresponding unavailable-storage message.

These were source/engine checks. Full browser playtesting remains the parent integration task's verification.

Final targeted source inspection confirmed both u12-l1 findings were corrected: the room stem now says both rooms fit the budget; the garden stem now states the committee compared use/access/maintenance, selected the garden and set a review date. No outstanding blocking finding remains from this review.
