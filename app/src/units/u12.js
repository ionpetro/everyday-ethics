// Original Everyday Ethics teaching scenarios. Fictional situations; source provenance is per item.
(function () {
  const unit = {
  "id": "u12",
  "title": "Practice judgment",
  "blurb": "Make a choice, explain it and remain able to learn.",
  "subject": "judgment",
  "assume": "These are fictional everyday situations, not legal or professional advice. Use only the stated facts. Scored questions test the stated purpose and conditions; reasonable moral disagreement belongs in reflection.",
  "lessons": [
    {
      "id": "u12l1",
      "title": "Make the decision visible",
      "objective": "Bring facts, affected people, options and values into one reviewable explanation.",
      "takeaway": "State the facts, the tradeoff, your chosen action and what would make you reconsider.",
      "fieldwork": "Write a four-sentence decision record for a fictional club choice with two reasonable options.",
      "items": [
        {
          "kind": "rule",
          "say": "State the facts, the tradeoff, your chosen action and what would make you reconsider.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "A decision needs reasons someone can inspect",
          "elements": [
            "Separate known facts from assumptions",
            "Name the values and affected people",
            "Explain the choice and a review condition"
          ],
          "distractorElements": [
            "Present a preference as an established fact",
            "Hide the downside of your chosen option"
          ],
          "ex": [
            {
              "facts": "A club must choose between a cheap upstairs room and a costlier accessible room.",
              "result": "The record names the budget, access needs, available alternatives and the reason for the chosen arrangement."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A decision can be explained without pretending it has no downside.",
              "a": true,
              "why": "Naming the tradeoff helps others understand and challenge the reasoning."
            },
            {
              "t": "mcq",
              "q": "Which detail makes a decision easier to review?",
              "options": [
                "Only the leader’s confidence",
                "The fact that would change the recommendation",
                "A claim that no reasonable person could disagree"
              ],
              "a": "The fact that would change the recommendation",
              "why": "A review condition makes the decision responsive to relevant new evidence."
            }
          ],
          "hook": "Leave a trail of reasons, not just a footprint.",
          "id": "u12-l1-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "A short account of the facts, reasons, action and review conditions behind a choice.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Decision record",
          "meaning": "A short account of the facts, reasons, action and review conditions behind a choice.",
          "hook": "A record can say why one venue was chosen and what new access information would reopen the decision.",
          "use": "A record can say why one venue was chosen and what new access information would reopen the decision.",
          "alt": [],
          "id": "u12-l1-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "State the facts, the tradeoff, your chosen action and what would make you reconsider.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A club chooses a more expensive room because the cheaper option has stairs and several members cannot use them. Both rooms fit the available budget. A donor later asks why the cheapest room was not selected.",
          "call": "Which explanation makes the tradeoff visible?",
          "options": [
            {
              "text": "“The expensive room was obviously the only ethical choice in every situation.”",
              "why": "That overgeneralizes beyond the facts.",
              "trap": 7
            },
            {
              "text": "“We chose it because it costs more.”",
              "why": "Price alone does not explain the access purpose.",
              "trap": 6
            },
            {
              "text": "“The cheaper room excluded several members; we judged access worth this extra cost within our budget.”",
              "why": "The explanation names the constraint, value and tradeoff."
            },
            {
              "text": "“There was no tradeoff at all.”",
              "why": "The extra cost is a real consequence.",
              "trap": 5
            }
          ],
          "answer": 2,
          "issue": "reviewable decision",
          "facts": [
            "several members cannot use them"
          ],
          "id": "u12-l1-case",
          "rule": "u12-l1-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "State the facts, the tradeoff, your chosen action and what would make you reconsider.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "What role does each sentence play?",
          "buckets": [
            "Fact",
            "Value or priority",
            "Review condition"
          ],
          "items": [
            {
              "text": "“The room holds twenty people.”",
              "bucket": "Fact",
              "why": "This is a checkable capacity claim."
            },
            {
              "text": "“Participation by current members matters more to us than a larger audience.”",
              "bucket": "Value or priority",
              "why": "This states what the group prioritizes."
            },
            {
              "text": "“If an accessible cheaper room becomes available, we will reconsider.”",
              "bucket": "Review condition",
              "why": "This names a condition for reopening the choice."
            },
            {
              "text": "“The quote is valid until Friday.”",
              "bucket": "Fact",
              "why": "This is a checkable timing claim."
            },
            {
              "text": "“We want newcomers to have a fair chance.”",
              "bucket": "Value or priority",
              "why": "This states a normative aim."
            },
            {
              "text": "“We will review if transport costs exceed the agreed budget.”",
              "bucket": "Review condition",
              "why": "This specifies when the decision should be revisited."
            }
          ],
          "mode": "contrast",
          "id": "u12-l1-practice"
        },
        {
          "kind": "trap",
          "say": "State the facts, the tradeoff, your chosen action and what would make you reconsider.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A committee chooses an option because it benefits existing members, then describes that preference as a scientific fact.",
          "wrong": "Our favored priority is a fact everyone must accept.",
          "right": "State the priority as a value judgment and explain why the committee gives it weight.",
          "why": "Evidence can inform consequences without deciding every value tradeoff.",
          "fixDistractors": [
            "Hide the priority and present only favorable numbers.",
            "Treat all evidence as irrelevant because values are involved."
          ],
          "cat": 4,
          "id": "u12-l1-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "State the facts, the tradeoff, your chosen action and what would make you reconsider.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A neighborhood has one grant for either a quiet garden or a play area. Both proposals meet the budget. After comparing use, access and maintenance, the committee chooses the garden and sets a review date. It values both rest and play, and residents still disagree.",
          "call": "Which record is most honest about the decision?",
          "options": [
            {
              "text": "“We chose the garden after weighing use, access and maintenance; here are the tradeoffs and our review plan.”",
              "why": "This makes the choice inspectable without erasing disagreement."
            },
            {
              "text": "“The budget proves a garden is morally superior.”",
              "why": "Both meet the budget; it does not settle the value judgment.",
              "trap": 4
            },
            {
              "text": "“Anyone preferring a play area dislikes older people.”",
              "why": "That invents motives for disagreement.",
              "trap": 3
            },
            {
              "text": "“Because residents disagree, no choice can ever be made.”",
              "why": "Disagreement need not make action impossible.",
              "trap": 7
            }
          ],
          "answer": 0,
          "issue": "explicit value tradeoffs",
          "facts": [
            "Both proposals meet the budget"
          ],
          "id": "u12-l1-transfer",
          "rule": "u12-l1-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u12l2",
      "title": "Change your mind for a reason",
      "objective": "Distinguish evidence-responsive revision from inconsistency driven only by approval.",
      "takeaway": "Revise a decision when a relevant fact or reason changes, and explain what changed.",
      "fieldwork": "Name a fictional decision and one new fact that would genuinely change your recommendation.",
      "items": [
        {
          "kind": "rule",
          "say": "Revise a decision when a relevant fact or reason changes, and explain what changed.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Revision can be a form of responsibility",
          "elements": [
            "Identify what the earlier choice relied on",
            "Check the new information",
            "Explain the relevant change and its effect"
          ],
          "distractorElements": [
            "Defend a claim merely because it was yours",
            "Switch only to match the loudest audience"
          ],
          "ex": [
            {
              "facts": "A group chose a venue believing it had a working lift.",
              "result": "After learning the lift is unavailable, it reopens the access plan."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Changing a decision after a key assumption is disproved is automatically hypocrisy.",
              "a": false,
              "why": "The underlying reason may remain consistent while the facts change."
            },
            {
              "t": "mcq",
              "q": "Which new fact is most relevant to a venue selected for step-free access?",
              "options": [
                "Another organizer prefers the old venue",
                "The lift will not operate on the event date",
                "A popular speaker dislikes changing venues"
              ],
              "a": "The lift will not operate on the event date",
              "why": "That fact directly affects the reason for choosing it."
            }
          ],
          "hook": "Keep the reason steady when the map changes.",
          "id": "u12-l2-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Information that bears on a claim or on a reason supporting a decision.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Relevant evidence",
          "meaning": "Information that bears on a claim or on a reason supporting a decision.",
          "hook": "A closure notice matters to a route decision; a rumor about the guide’s taste in music does not.",
          "use": "A closure notice matters to a route decision; a rumor about the guide’s taste in music does not.",
          "alt": [],
          "id": "u12-l2-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Revise a decision when a relevant fact or reason changes, and explain what changed.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You supported an outdoor event because a sheltered backup was confirmed. The venue now says the backup room is unavailable. Weather is uncertain, and several activities cannot run in rain.",
          "call": "What is the most relevant reason to revisit the plan?",
          "options": [
            {
              "text": "Someone dislikes the event’s poster",
              "why": "That does not affect the stated feasibility reason.",
              "trap": 6
            },
            {
              "text": "A key contingency supporting the plan is no longer available",
              "why": "The original decision relied on shelter as a backup."
            },
            {
              "text": "Changing plans is always better than consistency",
              "why": "Revision needs a relevant reason.",
              "trap": 7
            },
            {
              "text": "Any uncertainty proves the event must be cancelled",
              "why": "Other feasible options may exist.",
              "trap": 7
            }
          ],
          "answer": 1,
          "issue": "updating a decision",
          "facts": [
            "the backup room is unavailable"
          ],
          "id": "u12-l2-case",
          "rule": "u12-l2-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Revise a decision when a relevant fact or reason changes, and explain what changed.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Original assumption",
              "r": "A condition the earlier reasoning relied on"
            },
            {
              "l": "New evidence",
              "r": "Information not available or considered before"
            },
            {
              "l": "Relevant change",
              "r": "A difference that affects the decision’s reasons"
            },
            {
              "l": "Correction",
              "r": "An update that repairs an inaccurate claim"
            },
            {
              "l": "Stubborn consistency",
              "r": "Keeping a conclusion despite reasons that undermine it"
            }
          ],
          "spare": [
            "Every changed opinion is dishonest"
          ],
          "mode": "concept",
          "id": "u12-l2-practice"
        },
        {
          "kind": "trap",
          "say": "Revise a decision when a relevant fact or reason changes, and explain what changed.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You rejected a project because you thought it cost twice the budget. A verified quote shows it is within budget, but you repeat the old objection to avoid looking inconsistent.",
          "wrong": "Keeping my first position is more honest than admitting the quote changed it.",
          "right": "Acknowledge the corrected cost and reassess the project using the remaining relevant reasons.",
          "why": "The original cost objection no longer rests on the known facts.",
          "fixDistractors": [
            "Accept the project without considering any other factor.",
            "Pretend you always supported it."
          ],
          "cat": 11,
          "id": "u12-l2-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Revise a decision when a relevant fact or reason changes, and explain what changed.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A friend urges you to reverse a fair rotation rule because they dislike waiting. No new need, error or constraint is offered. The group agreed to the rotation and it is being applied correctly.",
          "call": "Which response best distinguishes pressure from a relevant reason for revision?",
          "options": [
            {
              "text": "Change the rule immediately to preserve approval",
              "why": "That substitutes personal pressure for an explained basis.",
              "trap": 4
            },
            {
              "text": "Say no rule can ever be reviewed",
              "why": "Rules may need revision when relevant facts change.",
              "trap": 7
            },
            {
              "text": "Explain the agreed rule and invite a relevant concern that could justify review",
              "why": "This leaves room for reasons without treating dislike as decisive."
            },
            {
              "text": "Invent a new exception and claim it was always present",
              "why": "That misrepresents the agreement.",
              "trap": 3
            }
          ],
          "answer": 2,
          "issue": "reason-responsive consistency",
          "facts": [
            "No new need, error or constraint is offered"
          ],
          "id": "u12-l2-transfer",
          "rule": "u12-l2-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u12l3",
      "title": "Disagree without inventing an enemy",
      "objective": "Locate the actual source of disagreement and represent a reasonable opposing view accurately.",
      "takeaway": "Ask whether the disagreement concerns facts, priorities or acceptable tradeoffs before arguing past each other.",
      "fieldwork": "Write the strongest fair version of two fictional positions, then name where they actually differ.",
      "items": [
        {
          "kind": "rule",
          "say": "Ask whether the disagreement concerns facts, priorities or acceptable tradeoffs before arguing past each other.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Find the hinge of disagreement",
          "elements": [
            "Check whether the facts are shared",
            "Name the competing priorities",
            "Represent the other view before responding"
          ],
          "distractorElements": [
            "Assume disagreement proves bad motives",
            "Treat every dispute as a misunderstanding"
          ],
          "ex": [
            {
              "facts": "Two neighbors agree a festival is noisy but differ on how much noise is acceptable for a community event.",
              "result": "Clarifying the acceptable tradeoff matters more than repeating the shared noise measurement."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Agreeing on facts guarantees agreeing on what to do.",
              "a": false,
              "why": "People may assign different weight to legitimate values."
            },
            {
              "t": "mcq",
              "q": "Two people agree on costs but disagree on who should benefit. What needs discussion?",
              "options": [
                "Their priorities and allocation reasons",
                "Whether arithmetic exists",
                "Which speaker is more popular"
              ],
              "a": "Their priorities and allocation reasons",
              "why": "The unresolved issue is the value tradeoff, not necessarily a factual error."
            }
          ],
          "hook": "Find the hinge before pushing harder on the door.",
          "id": "u12-l3-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "A difference in which aims, responsibilities or tradeoffs people give weight to.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Value disagreement",
          "meaning": "A difference in which aims, responsibilities or tradeoffs people give weight to.",
          "hook": "Two people can agree on a park’s cost yet differ on quiet space versus sports facilities.",
          "use": "Two people can agree on a park’s cost yet differ on quiet space versus sports facilities.",
          "alt": [],
          "id": "u12-l3-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Ask whether the disagreement concerns facts, priorities or acceptable tradeoffs before arguing past each other.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "Two club members agree that a later meeting helps evening workers but makes it harder for parents with early childcare duties. One prioritizes workers’ access; the other prioritizes caregivers’ access.",
          "call": "What best describes the remaining disagreement?",
          "options": [
            {
              "text": "They disagree about whether the meeting has a time",
              "why": "The existence of a meeting time is not disputed.",
              "trap": 6
            },
            {
              "text": "One must be lying about caring for members",
              "why": "Different priorities do not establish deceit.",
              "trap": 3
            },
            {
              "text": "The conflict will disappear if the same facts are repeated louder",
              "why": "They already share the stated facts.",
              "trap": 10
            },
            {
              "text": "They differ on how to weigh the access burdens, so alternatives and tradeoffs need discussion",
              "why": "This locates the disagreement without inventing motives."
            }
          ],
          "answer": 3,
          "issue": "shared facts and competing priorities",
          "facts": [
            "Two club members agree"
          ],
          "id": "u12-l3-case",
          "rule": "u12-l3-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Ask whether the disagreement concerns facts, priorities or acceptable tradeoffs before arguing past each other.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "What is the main disagreement in the statement?",
          "buckets": [
            "About a fact",
            "About a priority"
          ],
          "items": [
            {
              "text": "“We disagree whether the room costs two hundred or three hundred.”",
              "bucket": "About a fact",
              "why": "The price can be checked."
            },
            {
              "text": "“We agree on the price but differ on whether wider access is worth the extra cost.”",
              "bucket": "About a priority",
              "why": "The issue is the value of the tradeoff."
            },
            {
              "text": "“We disagree whether the bus runs on Sundays.”",
              "bucket": "About a fact",
              "why": "The timetable can help resolve it."
            },
            {
              "text": "“We agree who waits but differ on whether equal turns or urgent need should decide.”",
              "bucket": "About a priority",
              "why": "The allocation criterion is disputed."
            },
            {
              "text": "“We disagree whether the invitation included a deadline.”",
              "bucket": "About a fact",
              "why": "The invitation can be inspected."
            },
            {
              "text": "“We agree the rule is clear but differ on whether it should allow hardship exceptions.”",
              "bucket": "About a priority",
              "why": "The question concerns how the rule ought to work."
            }
          ],
          "mode": "contrast",
          "id": "u12-l3-practice"
        },
        {
          "kind": "trap",
          "say": "Ask whether the disagreement concerns facts, priorities or acceptable tradeoffs before arguing past each other.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A neighbor supports a quiet garden rather than a sports court. You say their position means they hate children, though they have given reasons about rest and noise.",
          "wrong": "A different priority proves a hostile motive.",
          "right": "Respond to the stated reasons about rest and noise, and discuss how both needs might be served.",
          "why": "A fair account of the disagreement does not add an unsupported motive.",
          "fixDistractors": [
            "Pretend the sports court has no drawbacks.",
            "Agree with every reason solely to avoid disagreement."
          ],
          "cat": 3,
          "id": "u12-l3-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Ask whether the disagreement concerns facts, priorities or acceptable tradeoffs before arguing past each other.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A committee is divided on distributing workshop places. One group favors a lottery among eligible applicants; another favors first-time applicants. Both explain coherent goals. Capacity cannot increase this month.",
          "call": "Which next step helps the actual decision?",
          "options": [
            {
              "text": "Compare what each criterion serves, who it excludes and whether a mixed or rotating approach is feasible",
              "why": "This examines the goals and consequences of the alternatives."
            },
            {
              "text": "Declare that a lottery is always the only fair rule",
              "why": "Fairness criteria depend on the purpose and context.",
              "trap": 7
            },
            {
              "text": "Assume first-time preference proves hostility to returning members",
              "why": "That motive is not established.",
              "trap": 3
            },
            {
              "text": "Ignore capacity because fairness should remove limits",
              "why": "The stated constraint still affects feasible choices.",
              "trap": 2
            }
          ],
          "answer": 0,
          "issue": "disagreement under scarcity",
          "facts": [
            "Capacity cannot increase this month"
          ],
          "id": "u12-l3-transfer",
          "rule": "u12-l3-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u12l4",
      "title": "Act, observe, reconsider",
      "objective": "Make a responsible provisional choice under uncertainty without pretending that uncertainty disappears.",
      "takeaway": "Choose a proportionate next step, name its limits and set a real opportunity to review the effects.",
      "fieldwork": "Design a fictional small trial with a stop condition, feedback route and honest statement of uncertainty.",
      "items": [
        {
          "kind": "rule",
          "say": "Choose a proportionate next step, name its limits and set a real opportunity to review the effects.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "A provisional choice still needs care",
          "elements": [
            "State what remains uncertain",
            "Choose a proportionate and reversible step where possible",
            "Set feedback and review conditions"
          ],
          "distractorElements": [
            "Call any experiment harmless",
            "Delay forever despite a feasible low-risk next step"
          ],
          "ex": [
            {
              "facts": "A library is unsure which quiet-hour schedule works.",
              "result": "It can consult affected users, trial a limited schedule and review actual access effects."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Calling something a trial removes the need to consider who bears its costs.",
              "a": false,
              "why": "Trials still affect people and require limits, consent where relevant and review."
            },
            {
              "t": "mcq",
              "q": "Which makes a trial genuinely reviewable?",
              "options": [
                "An end date, relevant feedback and a named person able to change it",
                "A promise to think about it someday",
                "A claim that objections prove resistance to change"
              ],
              "a": "An end date, relevant feedback and a named person able to change it",
              "why": "Review needs a usable process and authority, not just a label."
            }
          ],
          "hook": "Try a step you can learn from, and keep a way back.",
          "id": "u12-l4-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "The extent to which an action can be undone or changed without lasting effects.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Reversibility",
          "meaning": "The extent to which an action can be undone or changed without lasting effects.",
          "hook": "A temporary sign is easier to change than a permanent public disclosure of private information.",
          "use": "A temporary sign is easier to change than a permanent public disclosure of private information.",
          "alt": [],
          "id": "u12-l4-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Choose a proportionate next step, name its limits and set a real opportunity to review the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A club wants to trial a new booking rule for two weeks. Members worry it may exclude people who work late. The coordinator can collect access feedback and restore the old rule if needed.",
          "call": "Which plan takes the concern seriously?",
          "options": [
            {
              "text": "Call it a trial and ignore complaints until next year",
              "why": "The label does not create timely review.",
              "trap": 5
            },
            {
              "text": "State the two-week limit, monitor access problems and specify when the rule will be changed",
              "why": "This makes the uncertainty and review process operational."
            },
            {
              "text": "Promise that no member will be affected before checking",
              "why": "The outcome is not established.",
              "trap": 3
            },
            {
              "text": "Publish members’ work schedules so everyone can assess them",
              "why": "That creates unnecessary exposure.",
              "trap": 9
            }
          ],
          "answer": 1,
          "issue": "responsible provisional action",
          "facts": [
            "restore the old rule if needed"
          ],
          "id": "u12-l4-case",
          "rule": "u12-l4-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "steps",
          "say": "Choose a proportionate next step, name its limits and set a real opportunity to review the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Run a reviewable low-stakes trial",
          "steps": [
            "Define the purpose, limits and affected people",
            "Agree the trial and feedback route",
            "Review the effects and change or stop as needed"
          ],
          "distractors": [
            "Promise success before gathering feedback",
            "Keep extending the trial without review"
          ],
          "applyTo": {
            "facts": "The agreed two-week trial has ended. Feedback shows a group lost access, and the coordinator has authority to restore the old rule.",
            "stop": "Review the effects and change or stop as needed",
            "why": "The feedback bears directly on the concern the trial was meant to examine."
          },
          "id": "u12-l4-practice"
        },
        {
          "kind": "trap",
          "say": "Choose a proportionate next step, name its limits and set a real opportunity to review the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "An organizer publishes private participant details and calls it a reversible experiment because the post can be deleted later.",
          "wrong": "Deleting the original guarantees the disclosure is undone.",
          "right": "Treat public disclosure as potentially persistent and choose a less exposing test.",
          "why": "Copies and recipients’ knowledge may remain after deletion.",
          "fixDistractors": [
            "Publish more details so the experiment is more realistic.",
            "Assume every digital action is impossible to revise."
          ],
          "cat": 3,
          "id": "u12-l4-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Choose a proportionate next step, name its limits and set a real opportunity to review the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A community room has two plausible seating layouts. Both meet access needs and can be changed in ten minutes. Users disagree about which supports conversation. There is no urgent safety concern.",
          "call": "Which next step best fits the uncertainty and reversibility?",
          "options": [
            {
              "text": "Declare that one layout is universally ethical",
              "why": "The facts do not establish a universal verdict.",
              "trap": 7
            },
            {
              "text": "Refuse to choose until every person agrees forever",
              "why": "A limited reversible comparison is feasible.",
              "trap": 7
            },
            {
              "text": "Try an agreed layout briefly, gather relevant feedback and revisit it",
              "why": "The group can learn without pretending the first choice settles everything."
            },
            {
              "text": "Change the layout secretly each day and call confusion evidence",
              "why": "That undermines the ability to interpret feedback.",
              "trap": 5
            }
          ],
          "answer": 2,
          "issue": "learning under uncertainty",
          "facts": [
            "can be changed in ten minutes"
          ],
          "id": "u12-l4-transfer",
          "rule": "u12-l4-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.ETHICS_UNITS = globalThis.ETHICS_UNITS || []).push(unit);
})();
