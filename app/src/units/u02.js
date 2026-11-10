// Original Everyday Ethics content. Fictional cases and authored teaching synthesis.
(function () {
  const unit = {
  "id": "u02",
  "title": "What do we actually know?",
  "blurb": "Separate evidence, assumptions, and what matters.",
  "subject": "facts",
  "assume": "These are original fictional situations. Use only the stated facts. Scored questions test concepts or a stated decision standard, not whether someone is a good person. Real ethical disagreements can remain; no exercise requires confronting anyone or sharing private experiences.",
  "lessons": [
    {
      "id": "u02l1",
      "title": "The story and the evidence",
      "objective": "Separate what happened from the explanation you have added.",
      "takeaway": "Separate what happened from the explanation you have added.",
      "fieldwork": "For a fictional social misunderstanding, write one observation and two possible explanations.",
      "items": [
        {
          "id": "u02-l1-principle",
          "kind": "rule",
          "say": "Separate what happened from the explanation you have added.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "The story and the evidence",
          "elements": [
            "Name the observation",
            "Label the interpretation",
            "Look for another plausible explanation"
          ],
          "distractorElements": [
            "Treat the first explanation as established",
            "Mistake repetition for independent evidence"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "An unanswered message could mean a busy afternoon, a missed notification, or deliberate avoidance.",
              "result": "The missing reply is observed; the reason remains open."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Three people repeating the same rumor are necessarily three independent sources.",
              "a": false,
              "why": "They may all be repeating one unverified source."
            },
            {
              "t": "mcq",
              "q": "A shared document shows no edits today. Which statement is an observation?",
              "options": [
                "The owner has given up.",
                "The document shows no edits today.",
                "The owner dislikes the team."
              ],
              "a": "The document shows no edits today.",
              "why": "The visible record supports the edit statement, not an explanation of the owner’s attitude."
            }
          ],
          "hook": "The missing reply is observed; the reason remains open."
        },
        {
          "id": "u02-l1-concept",
          "kind": "term",
          "say": "A conclusion drawn from evidence rather than directly observed.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Inference",
          "meaning": "A conclusion drawn from evidence rather than directly observed.",
          "use": "A wet pavement supports several explanations; it does not by itself prove rain.",
          "hook": "A wet pavement supports several explanations; it does not by itself prove rain.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u02-l1-case",
          "kind": "hypo",
          "say": "Separate what happened from the explanation you have added.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A friend has not replied to your invitation for two days. You can see the invitation was sent, but there is no read receipt and no other information.",
          "call": "Which statement distinguishes observation from inference?",
          "rule": "u02-l1-principle",
          "issue": "observation versus inference",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "They are avoiding this invitation; two days is enough to know.",
              "why": "Delay alone does not establish deliberate avoidance.",
              "trap": 3
            },
            {
              "text": "The invitation must not have arrived, since there is no read receipt.",
              "why": "No read receipt leaves delivery or reading uncertain; it does not prove failure.",
              "trap": 3
            },
            {
              "text": "They are busy and will reply when free; that is the explanation.",
              "why": "Busyness is plausible but has not been established.",
              "trap": 3
            },
            {
              "text": "I have no reply; I do not yet know why.",
              "why": "The missing reply is known, while the reason is not."
            }
          ],
          "answer": 3,
          "facts": [
            "there is no read receipt"
          ]
        },
        {
          "id": "u02-l1-contrast",
          "kind": "sort",
          "say": "Separate what happened from the explanation you have added.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "Classify each statement.",
          "buckets": [
            "Observation",
            "Interpretation"
          ],
          "items": [
            {
              "text": "The parcel arrived at 4:10.",
              "bucket": "Observation",
              "why": "A recorded arrival time can be checked."
            },
            {
              "text": "The courier wanted to inconvenience me.",
              "bucket": "Interpretation",
              "why": "This adds an intention."
            },
            {
              "text": "The invitation lists no accessibility contact.",
              "bucket": "Observation",
              "why": "The invitation text can be inspected."
            },
            {
              "text": "The organizer does not care about access.",
              "bucket": "Interpretation",
              "why": "That conclusion extends beyond the missing contact."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u02-l1-misconception",
          "kind": "trap",
          "say": "Separate what happened from the explanation you have added.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "Two classmates forward a screenshot of the same anonymous post. Someone calls that independent confirmation.",
          "wrong": "Two forwards make two independent confirmations.",
          "right": "Check where each claim originated; both forwards may trace to one post.",
          "why": "Counting copies does not establish independent observation.",
          "fixDistractors": [
            "Count every share as another witness.",
            "Assume every anonymous statement is false."
          ],
          "cat": 3,
          "boundary": false
        },
        {
          "id": "u02-l1-transfer",
          "kind": "hypo",
          "say": "Separate what happened from the explanation you have added.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "Two review sites repeat the exact same claim about a café. Both explicitly cite one customer’s original review; neither reports a separate visit.",
          "call": "How many independent visit accounts are established here?",
          "rule": "u02-l1-principle",
          "issue": "independent evidence",
          "transfer": true,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Three independent visits.",
              "why": "The two repetitions add no independently reported visit.",
              "trap": 3
            },
            {
              "text": "One original visit account.",
              "why": "Both sites point to the same account, not separately observed visits."
            },
            {
              "text": "Two independent accounts, one for each review site.",
              "why": "The sites repeat the same original account rather than report separate visits.",
              "trap": 3
            },
            {
              "text": "Three accounts, because publication on a new site creates a new observation.",
              "why": "A new publisher is not a new observer of the visit.",
              "trap": 4
            }
          ],
          "answer": 1,
          "facts": [
            "neither reports a separate visit"
          ]
        }
      ]
    },
    {
      "id": "u02l2",
      "title": "Say how sure you are",
      "objective": "Match the strength of your claim to the strength and limits of the evidence.",
      "takeaway": "Match the strength of your claim to the strength and limits of the evidence.",
      "fieldwork": "Rewrite a fictional “always works” claim into a supported observation plus one meaningful unknown.",
      "items": [
        {
          "id": "u02-l2-principle",
          "kind": "rule",
          "say": "Match the strength of your claim to the strength and limits of the evidence.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Say how sure you are",
          "elements": [
            "State what the evidence supports",
            "Name important unknowns",
            "Identify what would improve confidence"
          ],
          "distractorElements": [
            "Turn a small sample into a guarantee",
            "Treat uncertainty as proof of failure"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "Four volunteers like a new class. You have not asked anyone who stopped attending.",
              "result": "Describe those four responses and the missing perspectives."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A promising early result is the same as a guarantee.",
              "a": false,
              "why": "A limited observation may justify further inquiry without supporting certainty."
            },
            {
              "t": "mcq",
              "q": "A method worked in a quiet room, but has not been tried outdoors. What is the clearest limitation?",
              "options": [
                "It can never work outdoors.",
                "Outdoor performance has not been tested.",
                "It must work everywhere."
              ],
              "a": "Outdoor performance has not been tested.",
              "why": "Untested conditions are unknown, rather than already proven successful or unsuccessful."
            }
          ],
          "hook": "Describe those four responses and the missing perspectives."
        },
        {
          "id": "u02-l2-concept",
          "kind": "term",
          "say": "Expressing certainty in proportion to the evidence available.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Calibrated confidence",
          "meaning": "Expressing certainty in proportion to the evidence available.",
          "use": "“It worked in this trial” is narrower than “it always works.”",
          "hook": "“It worked in this trial” is narrower than “it always works.”",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u02-l2-case",
          "kind": "hypo",
          "say": "Match the strength of your claim to the strength and limits of the evidence.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You organize a new study group. Three of its twelve members reply to a voluntary survey, and all three like the format. The other nine have not responded.",
          "call": "Which summary is supported?",
          "rule": "u02-l2-principle",
          "issue": "claim strength and evidence",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "All three respondents liked it; we do not know the other nine views.",
              "why": "This reports the responses and preserves the response gap."
            },
            {
              "text": "Every member likes the format.",
              "why": "The nine missing views are not known.",
              "trap": 3
            },
            {
              "text": "Exactly one quarter of members like the format.",
              "why": "Nonresponse does not establish dislike.",
              "trap": 4
            },
            {
              "text": "The survey proves the group improves grades.",
              "why": "The survey asked about liking the format, not grade effects.",
              "trap": 6
            }
          ],
          "answer": 0,
          "facts": [
            "The other nine have not responded."
          ]
        },
        {
          "id": "u02-l2-contrast",
          "kind": "pairs",
          "say": "Match the strength of your claim to the strength and limits of the evidence.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Known result",
              "r": "What the observed test actually showed"
            },
            {
              "l": "Untested condition",
              "r": "A situation the available test did not cover"
            },
            {
              "l": "Guarantee",
              "r": "An assurance that a specified outcome will occur"
            }
          ],
          "mode": "concept"
        },
        {
          "id": "u02-l2-misconception",
          "kind": "trap",
          "say": "Match the strength of your claim to the strength and limits of the evidence.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A product has not yet been tested in rain. A learner concludes it definitely fails in rain.",
          "wrong": "No evidence of success is proof of failure.",
          "right": "Rain performance remains unknown until relevant evidence is available.",
          "why": "An evidence gap does not select either outcome.",
          "fixDistractors": [
            "Assume success whenever no failure is recorded.",
            "Replace the missing test with a confident slogan."
          ],
          "cat": 7,
          "boundary": false
        },
        {
          "id": "u02-l2-transfer",
          "kind": "hypo",
          "say": "Match the strength of your claim to the strength and limits of the evidence.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A community garden tries a watering schedule for one cool week. All ten plants survive. A neighbor asks whether that schedule will protect the same plants through a heatwave.",
          "call": "Which answer best matches the evidence?",
          "rule": "u02-l2-principle",
          "issue": "claim strength and evidence",
          "transfer": true,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Ten out of ten survived, so this is a tested heatwave schedule.",
              "why": "The observed success was in cool weather, not the condition being asked about.",
              "trap": 7
            },
            {
              "text": "Because heat was not tested, the schedule is already shown to be unsuitable in heat.",
              "why": "A missing test establishes uncertainty, not a failed result.",
              "trap": 3
            },
            {
              "text": "It worked for that cool week; heatwave performance is still untested.",
              "why": "The weather conditions materially limit what the observation supports."
            },
            {
              "text": "Call it proven for the neighborhood because the ten plants all survived.",
              "why": "That extends both the setting and the conditions beyond the trial.",
              "trap": 7
            }
          ],
          "answer": 2,
          "facts": [
            "one cool week"
          ]
        }
      ]
    },
    {
      "id": "u02l3",
      "title": "Good intentions, real effects",
      "objective": "Examine the intention and the effect separately when deciding what needs attention.",
      "takeaway": "Examine the intention and the effect separately when deciding what needs attention.",
      "fieldwork": "In a fictional mishap, write two separate sentences: what the actor intended and what changed for someone else.",
      "items": [
        {
          "id": "u02-l3-principle",
          "kind": "rule",
          "say": "Examine the intention and the effect separately when deciding what needs attention.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Good intentions, real effects",
          "elements": [
            "Describe the intended help",
            "Check the actual effect",
            "Address a preventable problem without inventing intent"
          ],
          "distractorElements": [
            "Use good intent to erase harm",
            "Treat an unwanted effect as proof of malice"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "A surprise celebration embarrasses someone who asked for a quiet birthday.",
              "result": "Care about the organizer’s aim and the recipient’s experience."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An unintended problem can still need correction.",
              "a": true,
              "why": "Responsibility for responding does not require proof of hostile intent."
            },
            {
              "t": "mcq",
              "q": "A helper made an honest typo in a train time. A friend may miss the train. What matters immediately?",
              "options": [
                "Proving the helper has bad character",
                "Giving the friend the correct time while it can help",
                "Ignoring the error because it was unintentional"
              ],
              "a": "Giving the friend the correct time while it can help",
              "why": "The practical effect needs attention even when the motive was helpful."
            }
          ],
          "hook": "Care about the organizer’s aim and the recipient’s experience."
        },
        {
          "id": "u02-l3-concept",
          "kind": "term",
          "say": "The effect an action has on people or their circumstances.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Impact",
          "meaning": "The effect an action has on people or their circumstances.",
          "use": "A joke may be meant warmly and still reveal something a person wanted kept private.",
          "hook": "A joke may be meant warmly and still reveal something a person wanted kept private.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u02-l3-case",
          "kind": "hypo",
          "say": "Examine the intention and the effect separately when deciding what needs attention.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You help a neighbor by moving their potted plants into shade. They had marked one plant “full sun,” and it has begun to wilt. You moved it to help, not to damage it. The neighbor now asks you to stop rearranging the pots.",
          "call": "Which assessment accounts for both intention and effect?",
          "rule": "u02-l3-principle",
          "issue": "intention versus impact",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "My good intention means there is nothing to discuss.",
              "why": "Intent does not erase the changed arrangement or the neighbor’s request.",
              "trap": 6
            },
            {
              "text": "I meant to help, but I changed their arrangement without checking and should respect the request to stop.",
              "why": "Helpful intent and an unwanted effect can both be true."
            },
            {
              "text": "Since the plant wilted afterward, I can be certain shade was the only cause.",
              "why": "Timing alone does not exclude other causes of the wilt.",
              "trap": 3
            },
            {
              "text": "Keep adjusting the pots until the plant improves, then explain the intention.",
              "why": "That ignores the neighbor’s explicit request to stop rearranging them.",
              "trap": 2
            }
          ],
          "answer": 1,
          "facts": [
            "The neighbor now asks you to stop"
          ]
        },
        {
          "id": "u02-l3-contrast",
          "kind": "sort",
          "say": "Examine the intention and the effect separately when deciding what needs attention.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "Which aspect does each sentence describe?",
          "buckets": [
            "Intention",
            "Effect"
          ],
          "items": [
            {
              "text": "I wanted the newcomer to feel included.",
              "bucket": "Intention",
              "why": "It states the aim."
            },
            {
              "text": "The newcomer’s private detail reached the entire group.",
              "bucket": "Effect",
              "why": "It states what happened after the action."
            },
            {
              "text": "She hoped to make the task easier.",
              "bucket": "Intention",
              "why": "It describes the desired result."
            },
            {
              "text": "The changed file prevented two teammates from finishing.",
              "bucket": "Effect",
              "why": "It describes the consequence."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u02-l3-misconception",
          "kind": "trap",
          "say": "Examine the intention and the effect separately when deciding what needs attention.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A student says that if an apology mentions a good intention, no practical repair is needed.",
          "wrong": "A good intention replaces repair.",
          "right": "Explain the intention if useful, then address the actual problem where possible.",
          "why": "The affected person still faces the consequence even after intent is clarified.",
          "fixDistractors": [
            "Treat every accident as deliberate cruelty.",
            "Insist the affected person must feel grateful."
          ],
          "cat": 7,
          "boundary": false
        },
        {
          "id": "u02-l3-transfer",
          "kind": "hypo",
          "say": "Examine the intention and the effect separately when deciding what needs attention.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You send a calendar invitation to make planning easier, but put the start one hour late. A participant points out the error before anyone has traveled. You agree the invitation is wrong.",
          "call": "Which action addresses the effect without changing the story about intent?",
          "rule": "u02-l3-principle",
          "issue": "intention versus impact",
          "transfer": true,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Explain that you meant well and leave the invitation unchanged.",
              "why": "The explanation leaves the misleading time in circulation.",
              "trap": 6
            },
            {
              "text": "Correct only your personal calendar, since the original error was accidental.",
              "why": "Other recipients would still hold the incorrect time.",
              "trap": 2
            },
            {
              "text": "Wait to correct it until someone proves they have already been inconvenienced.",
              "why": "Preventing reliance can help before harm occurs; waiting preserves the known error.",
              "trap": 10
            },
            {
              "text": "Correct the invitation and notify those who received the wrong time.",
              "why": "This reduces reliance on the error while allowing that your original aim was helpful."
            }
          ],
          "answer": 3,
          "facts": [
            "before anyone has traveled"
          ]
        }
      ]
    },
    {
      "id": "u02l4",
      "title": "Changing your mind has a reason",
      "objective": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
      "takeaway": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
      "fieldwork": "For a fictional disagreement, finish: “I would reconsider if I learned…” Choose evidence that actually bears on the reason.",
      "items": [
        {
          "id": "u02-l4-principle",
          "kind": "rule",
          "say": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Changing your mind has a reason",
          "elements": [
            "Name the basis of the earlier view",
            "Identify the new relevant evidence",
            "Explain what changed and what did not"
          ],
          "distractorElements": [
            "Defend a belief just because it was yours",
            "Reverse a view because of an unrelated detail"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "You thought a meeting excluded remote members; you then learn a remote link was sent in another email.",
              "result": "Update the access claim, while still checking whether everyone received the link."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Changing a view after relevant new evidence is necessarily inconsistent reasoning.",
              "a": false,
              "why": "Consistent standards can produce a changed conclusion when the evidence changes."
            },
            {
              "t": "mcq",
              "q": "You doubt a claim because its receipt is missing. Which new information most directly addresses that doubt?",
              "options": [
                "The speaker’s favorite music",
                "The relevant dated receipt",
                "The speaker’s popularity"
              ],
              "a": "The relevant dated receipt",
              "why": "The receipt addresses the reason for doubt; the other details do not."
            }
          ],
          "hook": "Update the access claim, while still checking whether everyone received the link."
        },
        {
          "id": "u02-l4-concept",
          "kind": "term",
          "say": "Willingness to change a conclusion when relevant reasons or evidence change.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Revisability",
          "meaning": "Willingness to change a conclusion when relevant reasons or evidence change.",
          "use": "A map is useful because you can correct it when you discover a closed bridge.",
          "hook": "A map is useful because you can correct it when you discover a closed bridge.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u02-l4-case",
          "kind": "hypo",
          "say": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You believed a club had no way for remote members to vote because the notice mentioned only the room. The organizer now shows the dated remote-voting message sent to every member. You have no evidence about whether they read it.",
          "call": "Which update fits the new evidence?",
          "rule": "u02-l4-principle",
          "issue": "updating with relevant evidence",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "There was definitely no remote method.",
              "why": "This ignores evidence directly relevant to that claim.",
              "trap": 11
            },
            {
              "text": "Every member certainly voted.",
              "why": "Sending a method does not establish participation.",
              "trap": 3
            },
            {
              "text": "A remote method was sent; whether every member saw it is still unknown.",
              "why": "The message changes the claim about provision, not the separate question of receipt or reading."
            },
            {
              "text": "Conclude that sending the method proves every member had the same practical access.",
              "why": "Sending does not establish whether every member could receive or use it.",
              "trap": 3
            }
          ],
          "answer": 2,
          "facts": [
            "You have no evidence about whether they read it."
          ]
        },
        {
          "id": "u02-l4-contrast",
          "kind": "pairs",
          "say": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Relevant update",
              "r": "New information that bears on a reason for the judgment"
            },
            {
              "l": "Unresolved question",
              "r": "A gap the new information does not answer"
            },
            {
              "l": "Unrelated detail",
              "r": "Information that does not address the issue being decided"
            }
          ],
          "mode": "concept"
        },
        {
          "id": "u02-l4-misconception",
          "kind": "trap",
          "say": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A volunteer accused a teammate of taking a box from a room in person at noon. Verified footage now shows someone else took it while the teammate was elsewhere, but the volunteer says withdrawing the accusation would look weak.",
          "wrong": "Keeping the first accusation proves integrity.",
          "right": "Withdraw an accusation when its factual basis fails.",
          "why": "Consistency should concern the standard of evidence, not preserving a mistaken conclusion.",
          "fixDistractors": [
            "Keep the accusation but speak more quietly.",
            "Replace it with a different unsupported accusation."
          ],
          "cat": 7,
          "boundary": true
        },
        {
          "id": "u02-l4-transfer",
          "kind": "hypo",
          "say": "Revise a judgment when relevant evidence changes; keep uncertainty where evidence is still missing.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You thought a shared-room reservation was canceled because its calendar entry vanished. The booking office sends a current confirmation for the same room and time. The confirmation says nothing about refreshments.",
          "call": "Which revision is justified?",
          "rule": "u02-l4-principle",
          "issue": "updating with relevant evidence",
          "transfer": true,
          "boundary": true,
          "callType": "accurate",
          "options": [
            {
              "text": "The reservation is confirmed; refreshments remain a separate question.",
              "why": "The new record resolves the booking concern only."
            },
            {
              "text": "Treat the missing calendar entry as decisive despite the current booking confirmation.",
              "why": "The current confirmation directly bears on the booking status.",
              "trap": 11
            },
            {
              "text": "Everything for the event is now guaranteed.",
              "why": "A room confirmation does not establish all event arrangements.",
              "trap": 7
            },
            {
              "text": "Assume the confirmation also includes the usual catering package.",
              "why": "The record explicitly says nothing about refreshments.",
              "trap": 3
            }
          ],
          "answer": 0,
          "facts": [
            "says nothing about refreshments"
          ]
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.ETHICS_UNITS = globalThis.ETHICS_UNITS || []).push(unit);
})();
