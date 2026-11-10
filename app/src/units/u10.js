// Original Everyday Ethics teaching scenarios. Fictional situations; source provenance is per item.
(function () {
  const unit = {
  "id": "u10",
  "title": "Speak with courage and care",
  "blurb": "Find a useful action without making yourself the hero.",
  "subject": "courage",
  "assume": "These are fictional everyday situations, not legal or professional advice. Use only the stated facts. Scored questions test the stated purpose and conditions; reasonable moral disagreement belongs in reflection.",
  "lessons": [
    {
      "id": "u10l1",
      "title": "Say what you actually know",
      "objective": "Raise a concern using specific observations while separating uncertain motives.",
      "takeaway": "Describe the concern, its evidence and its effects without claiming to know more than you do.",
      "fieldwork": "Write a fictional concern using “I noticed,” “I am unsure,” and “Could we check?”",
      "items": [
        {
          "kind": "rule",
          "say": "Describe the concern, its evidence and its effects without claiming to know more than you do.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Make a concern inspectable",
          "elements": [
            "Name the observed fact",
            "Explain the relevant concern",
            "Ask for a check or proportionate response"
          ],
          "distractorElements": [
            "Present an inferred motive as an observed fact",
            "Wait for perfect certainty about every detail"
          ],
          "ex": [
            {
              "facts": "A rota repeatedly omits a volunteer who signed up.",
              "result": "A coordinator asks whether the signup was missed rather than claiming deliberate exclusion."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "You must know someone’s motive before raising a specific factual error.",
              "a": false,
              "why": "A concrete problem can be checked without a conclusion about motive."
            },
            {
              "t": "mcq",
              "q": "Which opening is easiest to investigate?",
              "options": [
                "“You never care about anyone.”",
                "“The published list omits the three names on this signup sheet.”",
                "“Everyone knows what you are like.”"
              ],
              "a": "“The published list omits the three names on this signup sheet.”",
              "why": "The claim names a specific mismatch that others can examine."
            }
          ],
          "hook": "Bring the observation, not an invented mind-reading report.",
          "id": "u10-l1-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "A concern tied to specific observations and clearly marked uncertainties.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Evidence-based concern",
          "meaning": "A concern tied to specific observations and clearly marked uncertainties.",
          "hook": "“The door is blocked by these boxes” is more checkable than a claim about someone’s character.",
          "use": "“The door is blocked by these boxes” is more checkable than a claim about someone’s character.",
          "alt": [],
          "id": "u10-l1-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Describe the concern, its evidence and its effects without claiming to know more than you do.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A club treasurer’s report lists a payment twice. You can see both entries, but do not know whether it is a mistake or deliberate. The treasurer is available to review it.",
          "call": "Which opening accurately raises the concern?",
          "options": [
            {
              "text": "“You stole money from the club.”",
              "why": "The motive and theft are not established.",
              "trap": 3
            },
            {
              "text": "“This payment appears twice; can we check the entries?”",
              "why": "It identifies the evidence without inventing the explanation."
            },
            {
              "text": "“There cannot be a problem because you are trusted.”",
              "why": "Trust does not resolve the visible mismatch.",
              "trap": 6
            },
            {
              "text": "“I will say nothing until I can prove intent.”",
              "why": "The duplicate can be investigated without knowing intent.",
              "trap": 2
            }
          ],
          "answer": 1,
          "issue": "observation versus accusation",
          "facts": [
            "do not know whether it is a mistake or deliberate"
          ],
          "id": "u10-l1-case",
          "rule": "u10-l1-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Describe the concern, its evidence and its effects without claiming to know more than you do.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Observation",
              "r": "What you directly saw or can identify in a record"
            },
            {
              "l": "Inference",
              "r": "An interpretation drawn from available facts"
            },
            {
              "l": "Uncertainty",
              "r": "What is not yet established"
            },
            {
              "l": "Impact",
              "r": "The effect on people or the task"
            },
            {
              "l": "Checkable request",
              "r": "A specific next action that can clarify the concern"
            }
          ],
          "spare": [
            "A confident tone establishes motive"
          ],
          "mode": "concept",
          "id": "u10-l1-practice"
        },
        {
          "kind": "trap",
          "say": "Describe the concern, its evidence and its effects without claiming to know more than you do.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You saw one missed invitation and tell the group that the organizer deliberately excludes everyone they dislike.",
          "wrong": "One omission proves a general pattern and its motive.",
          "right": "Raise the specific omission and ask what explains it before asserting a pattern.",
          "why": "The observation supports checking that invitation, not every wider conclusion.",
          "fixDistractors": [
            "Assume the omission could never matter.",
            "Replace “deliberately” with “probably” and repeat the same broad claim."
          ],
          "cat": 3,
          "id": "u10-l1-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Describe the concern, its evidence and its effects without claiming to know more than you do.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "At a volunteer briefing, the slide says a venue has step-free access. You visited yesterday and found stairs at the listed entrance. You do not know whether another entrance is accessible.",
          "call": "Which statement best preserves accuracy and prompts a useful check?",
          "options": [
            {
              "text": "“The organizers are lying about access.”",
              "why": "Their knowledge and motive are unknown.",
              "trap": 3
            },
            {
              "text": "“There is definitely no accessible entrance.”",
              "why": "Another entrance has not been checked.",
              "trap": 3
            },
            {
              "text": "“The listed entrance has stairs; can we confirm and publish the accessible route before people travel?”",
              "why": "It states what you know and identifies the missing information."
            },
            {
              "text": "“It is probably fine because the slide says so.”",
              "why": "The direct mismatch needs resolution.",
              "trap": 11
            }
          ],
          "answer": 2,
          "issue": "bounded concern",
          "facts": [
            "You do not know whether another entrance is accessible"
          ],
          "id": "u10-l1-transfer",
          "rule": "u10-l1-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u10l2",
      "title": "Choose a route that can help",
      "objective": "Compare response channels by safety, effectiveness and the affected person’s needs.",
      "takeaway": "Choose a proportionate route that can address the problem while taking safety and power seriously.",
      "fieldwork": "For an invented low-stakes concern, compare a private request, an organizer and a public announcement.",
      "items": [
        {
          "kind": "rule",
          "say": "Choose a proportionate route that can address the problem while taking safety and power seriously.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Courage includes choosing the channel",
          "elements": [
            "Assess urgency and safety",
            "Identify someone able to act",
            "Limit unnecessary exposure"
          ],
          "distractorElements": [
            "Require public confrontation in every case",
            "Assume the quietest route is always enough"
          ],
          "ex": [
            {
              "facts": "A new volunteer notices recurring scheduling errors by a senior organizer.",
              "result": "They can bring the dated examples to a trusted coordinator with authority to fix the rota."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The most public response is always the most effective one.",
              "a": false,
              "why": "Effectiveness and risk depend on who can act and what the situation needs."
            },
            {
              "t": "mcq",
              "q": "Which feature matters when choosing a reporting route?",
              "options": [
                "Whether it makes you look bold",
                "Whether the recipient can address the issue safely",
                "Whether it creates the largest audience"
              ],
              "a": "Whether the recipient can address the issue safely",
              "why": "A route should help resolve the problem rather than merely display concern."
            }
          ],
          "hook": "The useful door is the one that opens to action.",
          "id": "u10-l2-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "An action fitted to the seriousness, evidence, urgency and risks of a situation.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Proportionate response",
          "meaning": "An action fitted to the seriousness, evidence, urgency and risks of a situation.",
          "hook": "A correctable private scheduling error may need a different route from an immediate public danger.",
          "use": "A correctable private scheduling error may need a different route from an immediate public danger.",
          "alt": [],
          "id": "u10-l2-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Choose a proportionate route that can address the problem while taking safety and power seriously.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A junior volunteer worries that a powerful coordinator will retaliate if challenged in the group chat. There is no immediate danger. A trusted independent organizer can review concerns privately and change the rota.",
          "call": "Which route fits the stated conditions?",
          "options": [
            {
              "text": "Bring the relevant facts to the independent organizer privately",
              "why": "This provides a route with authority while accounting for the stated retaliation risk."
            },
            {
              "text": "Insist on a public confrontation to prove courage",
              "why": "That ignores a stated risk and an available effective channel.",
              "trap": 9
            },
            {
              "text": "Post unrelated private details about the coordinator",
              "why": "That adds harm without addressing the rota.",
              "trap": 6
            },
            {
              "text": "Conclude that no action is possible",
              "why": "A specific alternative route is available.",
              "trap": 3
            }
          ],
          "answer": 0,
          "issue": "safe and effective route",
          "facts": [
            "A trusted independent organizer can review concerns privately"
          ],
          "id": "u10-l2-case",
          "rule": "u10-l2-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Choose a proportionate route that can address the problem while taking safety and power seriously.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "Which factor does this detail concern?",
          "buckets": [
            "Urgency",
            "Ability to act",
            "Exposure risk"
          ],
          "items": [
            {
              "text": "People are about to travel to the wrong address.",
              "bucket": "Urgency",
              "why": "Delay can affect immediate plans."
            },
            {
              "text": "The venue manager can correct the sign.",
              "bucket": "Ability to act",
              "why": "This person has the relevant control."
            },
            {
              "text": "A public post would identify the complainant.",
              "bucket": "Exposure risk",
              "why": "The audience could create an additional burden."
            },
            {
              "text": "The decision will be made next month.",
              "bucket": "Urgency",
              "why": "There is time to choose a careful route."
            },
            {
              "text": "The independent coordinator can revise the rota.",
              "bucket": "Ability to act",
              "why": "The route can change the outcome."
            },
            {
              "text": "The suggested group chat includes the person accused.",
              "bucket": "Exposure risk",
              "why": "That may change the safety of raising the concern."
            }
          ],
          "mode": "contrast",
          "id": "u10-l2-practice"
        },
        {
          "kind": "trap",
          "say": "Choose a proportionate route that can address the problem while taking safety and power seriously.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A mentor says anyone who reports privately is cowardly, even when retaliation is a known risk and the private channel can fix the problem.",
          "wrong": "Courage requires the same visible confrontation from everyone.",
          "right": "Consider the person’s risks and the route’s ability to address the issue.",
          "why": "Visibility is not a complete measure of a responsible action.",
          "fixDistractors": [
            "Demand that the least powerful person confront everyone first.",
            "Assume no private report ever needs follow-up."
          ],
          "cat": 7,
          "id": "u10-l2-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Choose a proportionate route that can address the problem while taking safety and power seriously.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You notice the event’s public directions send attendees to the wrong entrance. The organizer is beside you, can edit the directions immediately and asks for the correct entrance name.",
          "call": "Which first action fits the available remedy?",
          "options": [
            {
              "text": "Start a public argument about the organizer’s competence",
              "why": "That delays the specific correction and adds an unsupported judgment.",
              "trap": 9
            },
            {
              "text": "Wait until next week’s review",
              "why": "Attendees need the information now.",
              "trap": 10
            },
            {
              "text": "Send the error to an unrelated committee",
              "why": "That route cannot make the immediate change.",
              "trap": 10
            },
            {
              "text": "Give the organizer the verified entrance name and check that the correction appears",
              "why": "The person able to act can address the immediate problem."
            }
          ],
          "answer": 3,
          "issue": "effective proportionate action",
          "facts": [
            "can edit the directions immediately"
          ],
          "id": "u10-l2-transfer",
          "rule": "u10-l2-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u10l3",
      "title": "Support the person affected",
      "objective": "Offer practical support without taking over someone else’s story or decision.",
      "takeaway": "Ask what support is wanted and avoid turning someone else’s experience into your performance.",
      "fieldwork": "Draft an offer of support in a fictional disagreement that does not demand disclosure or public action.",
      "items": [
        {
          "kind": "rule",
          "say": "Ask what support is wanted and avoid turning someone else’s experience into your performance.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Support keeps the person’s agency",
          "elements": [
            "Listen without demanding details",
            "Ask what support would help",
            "Respect choices within the stated safety limits"
          ],
          "distractorElements": [
            "Publish their story to show solidarity",
            "Assume your preferred response is theirs"
          ],
          "ex": [
            {
              "facts": "A colleague says a meeting left them feeling dismissed.",
              "result": "You ask whether they want listening, help documenting, or support speaking to the organizer."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Supporting someone means deciding their next step for them.",
              "a": false,
              "why": "Support can expand their options without taking over."
            },
            {
              "t": "mcq",
              "q": "Which offer leaves the person room to choose?",
              "options": [
                "“I have already posted your story.”",
                "“Would you like me to listen or help you raise it?”",
                "“You must confront them today.”"
              ],
              "a": "“Would you like me to listen or help you raise it?”",
              "why": "It asks about the kind of help they want."
            }
          ],
          "hook": "Stand beside someone before stepping into their place.",
          "id": "u10-l3-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "A person’s capacity and opportunity to make meaningful choices about their own actions.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Agency",
          "meaning": "A person’s capacity and opportunity to make meaningful choices about their own actions.",
          "hook": "Offering options can support agency; announcing someone’s decision for them can undermine it.",
          "use": "Offering options can support agency; announcing someone’s decision for them can undermine it.",
          "alt": [],
          "id": "u10-l3-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Ask what support is wanted and avoid turning someone else’s experience into your performance.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A friend tells you a club meeting upset them. They want to talk privately and explicitly ask you not to name them in the group. There is no immediate safety concern.",
          "call": "Which response respects the help they requested?",
          "options": [
            {
              "text": "Post their account because the group needs a lesson",
              "why": "That overrides their stated boundary.",
              "trap": 5
            },
            {
              "text": "Tell them they must stay silent forever",
              "why": "That also takes over their future choice.",
              "trap": 7
            },
            {
              "text": "Listen privately and ask whether they want any further support",
              "why": "This follows their request while leaving future options open."
            },
            {
              "text": "Demand the full story before offering any care",
              "why": "They need not disclose every detail to receive support.",
              "trap": 2
            }
          ],
          "answer": 2,
          "issue": "support and agency",
          "facts": [
            "explicitly ask you not to name them"
          ],
          "id": "u10-l3-case",
          "rule": "u10-l3-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "steps",
          "say": "Ask what support is wanted and avoid turning someone else’s experience into your performance.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Offer support without taking over",
          "steps": [
            "Listen to the person’s stated needs",
            "Offer feasible choices of support",
            "Agree before acting on their behalf"
          ],
          "distractors": [
            "Publish the story before asking",
            "Make support conditional on following your plan"
          ],
          "applyTo": {
            "facts": "A teammate has told you they want help drafting a private concern. You have discussed two possible forms of support.",
            "stop": "Agree before acting on their behalf",
            "why": "The next action should match what they authorize, not just what you prefer."
          },
          "id": "u10-l3-practice"
        },
        {
          "kind": "trap",
          "say": "Ask what support is wanted and avoid turning someone else’s experience into your performance.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "Someone declines your offer to accompany them to a meeting. You attend anyway and speak for them.",
          "wrong": "A helpful intention gives me permission to override their refusal.",
          "right": "Respect the refusal and leave a clear offer of future support.",
          "why": "The person declined this form of help; intention does not substitute for agreement.",
          "fixDistractors": [
            "Insist they explain every reason for declining.",
            "Withdraw all friendship because the offer was refused."
          ],
          "cat": 5,
          "id": "u10-l3-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Ask what support is wanted and avoid turning someone else’s experience into your performance.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A neighbor asks you to help write a complaint about a noisy event. They want the message sent under their own name after reviewing it. You finish a draft.",
          "call": "What preserves the agreed role?",
          "options": [
            {
              "text": "Send it immediately so they cannot lose courage",
              "why": "They requested review before sending.",
              "trap": 5
            },
            {
              "text": "Give them the draft and wait for their decision about sending",
              "why": "This supports the action without taking ownership of it."
            },
            {
              "text": "Post it anonymously to the whole neighborhood",
              "why": "That changes both audience and method.",
              "trap": 5
            },
            {
              "text": "Add accusations they did not report to strengthen it",
              "why": "Those claims are unsupported and exceed the role.",
              "trap": 3
            }
          ],
          "answer": 1,
          "issue": "authorized support",
          "facts": [
            "after reviewing it"
          ],
          "id": "u10-l3-transfer",
          "rule": "u10-l3-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u10l4",
      "title": "Authority does not settle the reason",
      "objective": "Evaluate instructions while recognizing role limits and feasible ways to challenge them.",
      "takeaway": "Ask for the reason behind a concerning instruction and seek a safe review route when the conflict remains.",
      "fieldwork": "Write a respectful question about a fictional instruction that conflicts with an agreed purpose.",
      "items": [
        {
          "kind": "rule",
          "say": "Ask for the reason behind a concerning instruction and seek a safe review route when the conflict remains.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "A role gives authority, not infallibility",
          "elements": [
            "Clarify the instruction and reason",
            "Identify the specific conflict",
            "Seek proportionate review or an alternative"
          ],
          "distractorElements": [
            "Treat rank as proof of correctness",
            "Reject every instruction merely because it is an instruction"
          ],
          "ex": [
            {
              "facts": "A senior organizer asks volunteers to mark absent people as attended.",
              "result": "A volunteer asks how that fits the reporting purpose and uses the review route if the request remains."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A senior person’s instruction makes a false report accurate.",
              "a": false,
              "why": "Authority does not change the underlying facts."
            },
            {
              "t": "mcq",
              "q": "Which question identifies the conflict in marking absences as attendance?",
              "options": [
                "“Will this improve the numbers?”",
                "“How would this report reflect who actually attended?”",
                "“Could we count all registrations as attendance?”"
              ],
              "a": "“How would this report reflect who actually attended?”",
              "why": "The question tests the instruction against the report’s purpose."
            }
          ],
          "hook": "A badge can assign a task; it cannot alter a fact.",
          "id": "u10-l4-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Giving weight to another person’s judgment or authority.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Deference",
          "meaning": "Giving weight to another person’s judgment or authority.",
          "hook": "Expertise may deserve weight, while a specific contradiction still deserves examination.",
          "use": "Expertise may deserve weight, while a specific contradiction still deserves examination.",
          "alt": [],
          "id": "u10-l4-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Ask for the reason behind a concerning instruction and seek a safe review route when the conflict remains.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A supervisor asks you to record that a workshop had thirty attendees. The verified sign-in count is twenty. They say a higher number will protect next year’s funding.",
          "call": "Which response identifies the ethical conflict accurately?",
          "options": [
            {
              "text": "“Protecting funding does not make thirty the actual attendance; can we report the true count and explain the need?”",
              "why": "It names the conflict and offers an accurate alternative."
            },
            {
              "text": "“Your title makes thirty correct.”",
              "why": "Rank does not change the count.",
              "trap": 5
            },
            {
              "text": "“Any funding goal is unethical.”",
              "why": "The goal itself need not be wrong.",
              "trap": 7
            },
            {
              "text": "“I will use twenty-five as a compromise.”",
              "why": "A middle number is still not the verified count.",
              "trap": 10
            }
          ],
          "answer": 0,
          "issue": "authority and accuracy",
          "facts": [
            "The verified sign-in count is twenty"
          ],
          "id": "u10-l4-case",
          "rule": "u10-l4-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Ask for the reason behind a concerning instruction and seek a safe review route when the conflict remains.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Role authority",
              "r": "Permission to make decisions within an assigned role"
            },
            {
              "l": "Relevant expertise",
              "r": "Knowledge that bears on the specific question"
            },
            {
              "l": "Evidence conflict",
              "r": "Information that contradicts a proposed claim"
            },
            {
              "l": "Review route",
              "r": "A channel for reconsidering a decision"
            },
            {
              "l": "Reasoned dissent",
              "r": "A stated objection supported by relevant reasons"
            }
          ],
          "spare": [
            "Rank makes every instruction morally correct"
          ],
          "mode": "concept",
          "id": "u10-l4-practice"
        },
        {
          "kind": "trap",
          "say": "Ask for the reason behind a concerning instruction and seek a safe review route when the conflict remains.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A new volunteer has less experience than the organizer but points to a clearly wrong date on the event notice.",
          "wrong": "Only senior people can identify mistakes worth correcting.",
          "right": "Check the date against the event record regardless of who noticed the mismatch.",
          "why": "Seniority can matter to expertise but does not erase inspectable evidence.",
          "fixDistractors": [
            "Reject every organizer decision because one date is wrong.",
            "Ask the volunteer to become senior before raising the mismatch."
          ],
          "cat": 4,
          "id": "u10-l4-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Ask for the reason behind a concerning instruction and seek a safe review route when the conflict remains.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "An experienced guide asks a group to take a longer marked route because the shorter path is closed. You confirm the closure notice. No conflicting safety concern is stated.",
          "call": "Which conclusion is warranted?",
          "options": [
            {
              "text": "Authority should always be challenged by doing the opposite",
              "why": "Automatic opposition is not reasoned judgment.",
              "trap": 7
            },
            {
              "text": "A longer route proves the guide is abusing power",
              "why": "The stated closure explains it.",
              "trap": 3
            },
            {
              "text": "You should ignore the notice to demonstrate independence",
              "why": "That disregards relevant evidence.",
              "trap": 10
            },
            {
              "text": "The instruction has a relevant, verified reason in this situation",
              "why": "Deference can be reasonable when grounded in evidence and role."
            }
          ],
          "answer": 3,
          "issue": "limits of automatic dissent",
          "facts": [
            "You confirm the closure notice"
          ],
          "id": "u10-l4-transfer",
          "rule": "u10-l4-rule",
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
