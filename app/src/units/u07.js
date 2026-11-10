// Original Everyday Ethics teaching scenarios. Fictional situations; source provenance is per item.
(function () {
  const unit = {
  "id": "u07",
  "title": "Make promises you can carry",
  "blurb": "Commit carefully. Renegotiate openly.",
  "subject": "promises",
  "assume": "These are fictional everyday situations, not legal or professional advice. Use only the stated facts. Scored questions test the stated purpose and conditions; reasonable moral disagreement belongs in reflection.",
  "lessons": [
    {
      "id": "u07l1",
      "title": "What did you actually promise?",
      "objective": "Distinguish a commitment from a hope, offer or conditional plan.",
      "takeaway": "Make the task, timing and conditions clear before someone relies on your promise.",
      "fieldwork": "Rewrite a fictional vague offer into a clear, limited commitment.",
      "items": [
        {
          "kind": "rule",
          "say": "Make the task, timing and conditions clear before someone relies on your promise.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "A promise gives someone grounds to plan",
          "elements": [
            "Name the task",
            "Clarify timing",
            "State important conditions"
          ],
          "distractorElements": [
            "Treat enthusiasm as unlimited consent",
            "Let the other person guess the deadline"
          ],
          "ex": [
            {
              "facts": "Jo says she can proofread two pages tonight, but cannot edit the whole report.",
              "result": "The limit lets the writer decide whether that help is enough."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "“I hope I can help” establishes a definite deadline.",
              "a": false,
              "why": "A hope does not specify an accepted commitment."
            },
            {
              "t": "mcq",
              "q": "Which missing detail matters before booking a ride?",
              "options": [
                "The driver’s favorite music",
                "Whether the driver agreed to the pickup time",
                "Whether the driver usually seems friendly"
              ],
              "a": "Whether the driver agreed to the pickup time",
              "why": "A plan needs agreement on the action someone will rely on."
            }
          ],
          "hook": "A promise is a handle another person can hold.",
          "id": "u07-l1-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "An undertaking that gives another person reason to rely on a specified action.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Commitment",
          "meaning": "An undertaking that gives another person reason to rely on a specified action.",
          "hook": "“I will bring the projector by six” gives the host something to plan around.",
          "use": "“I will bring the projector by six” gives the host something to plan around.",
          "alt": [],
          "id": "u07-l1-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Make the task, timing and conditions clear before someone relies on your promise.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "Noor says, “I can help with your move Saturday.” Lee starts planning. Noor meant two hours; Lee assumed the whole day. Neither has clarified the time.",
          "call": "What best resolves the uncertainty before Lee books transport?",
          "options": [
            {
              "text": "Treat Noor as available all day",
              "why": "That adds a duration Noor has not agreed to.",
              "trap": 3
            },
            {
              "text": "Ask Noor which hours and tasks she can commit to",
              "why": "This establishes the scope before reliance increases."
            },
            {
              "text": "Cancel the move without asking",
              "why": "The mismatch may be resolvable with a narrower agreement.",
              "trap": 9
            },
            {
              "text": "Assume two hours is obvious to everyone",
              "why": "No shared limit has been established.",
              "trap": 3
            }
          ],
          "answer": 1,
          "issue": "scope of a commitment",
          "facts": [
            "Neither has clarified the time"
          ],
          "id": "u07-l1-case",
          "rule": "u07-l1-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Make the task, timing and conditions clear before someone relies on your promise.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "What does each statement actually establish?",
          "buckets": [
            "Definite undertaking",
            "Conditional or uncertain"
          ],
          "items": [
            {
              "text": "“I will collect the keys at five.”",
              "bucket": "Definite undertaking",
              "why": "The action and time are definite."
            },
            {
              "text": "“If my shift ends by four, I can come.”",
              "bucket": "Conditional or uncertain",
              "why": "The condition has not been confirmed."
            },
            {
              "text": "“I hope to join you.”",
              "bucket": "Conditional or uncertain",
              "why": "A hope is not an undertaking."
            },
            {
              "text": "“I accept the two-hour slot.”",
              "bucket": "Definite undertaking",
              "why": "The speaker accepts a specified commitment."
            },
            {
              "text": "“I might find time.”",
              "bucket": "Conditional or uncertain",
              "why": "Availability is uncertain."
            },
            {
              "text": "“I will send the draft tonight.”",
              "bucket": "Definite undertaking",
              "why": "The undertaking includes a deadline."
            }
          ],
          "mode": "contrast",
          "id": "u07-l1-practice"
        },
        {
          "kind": "trap",
          "say": "Make the task, timing and conditions clear before someone relies on your promise.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A friend agrees to water two balcony plants. You later add ten indoor plants without telling them.",
          "wrong": "Agreeing to help covers every extra task I add.",
          "right": "Ask whether they can accept the additional tasks.",
          "why": "A limited agreement does not automatically expand because more help would be useful.",
          "fixDistractors": [
            "Treat the extra tasks as accepted unless they object.",
            "Say the original agreement never mattered."
          ],
          "cat": 5,
          "id": "u07-l1-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Make the task, timing and conditions clear before someone relies on your promise.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A volunteer says, “I will print the posters if the file arrives by noon.” The file arrives at three. There has been no further conversation.",
          "call": "Which statement is supported?",
          "options": [
            {
              "text": "The volunteer must print them regardless",
              "why": "That removes the explicit condition.",
              "trap": 5
            },
            {
              "text": "The volunteer has deliberately broken a promise",
              "why": "The condition was not met; motive is also unknown.",
              "trap": 3
            },
            {
              "text": "The organizer can assume printing happened",
              "why": "The stated facts do not establish completion.",
              "trap": 3
            },
            {
              "text": "The organizer needs a new agreement or another plan",
              "why": "The original conditional undertaking does not settle what happens after noon."
            }
          ],
          "answer": 3,
          "issue": "conditions of a promise",
          "facts": [
            "if the file arrives by noon",
            "The file arrives at three"
          ],
          "id": "u07-l1-transfer",
          "rule": "u07-l1-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u07l2",
      "title": "When the plan becomes impossible",
      "objective": "Respond to a threatened commitment before others lose their options.",
      "takeaway": "Give early notice, name the impact and offer realistic alternatives when a commitment is at risk.",
      "fieldwork": "Draft a two-sentence update about a fictional delay, including a feasible next step.",
      "items": [
        {
          "kind": "rule",
          "say": "Give early notice, name the impact and offer realistic alternatives when a commitment is at risk.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Renegotiation needs the other person",
          "elements": [
            "Explain the changed constraint",
            "Notify people who rely on you",
            "Agree a feasible next step"
          ],
          "distractorElements": [
            "Silently replace the original deadline",
            "Promise anything to end the awkward conversation"
          ],
          "ex": [
            {
              "facts": "A printer breaks two days before a community event.",
              "result": "The organizer tells the team now and offers digital signs or a different supplier."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Notifying someone of a new deadline is always the same as their accepting it.",
              "a": false,
              "why": "Notice informs them; agreement requires their response or an already agreed process."
            },
            {
              "t": "mcq",
              "q": "You know a deadline cannot be met. Which update preserves the other person’s options?",
              "options": [
                "Wait until the deadline passes",
                "Explain the delay now and ask about alternatives",
                "Send an optimistic assurance without evidence"
              ],
              "a": "Explain the delay now and ask about alternatives",
              "why": "Earlier accurate information can leave time for a different plan."
            }
          ],
          "hook": "A changed plan needs a bridge, not a disappearing act.",
          "id": "u07-l2-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Revisiting an existing agreement with the people who rely on it.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Renegotiation",
          "meaning": "Revisiting an existing agreement with the people who rely on it.",
          "hook": "“I cannot do Friday; can Monday still serve your purpose?” revisits the agreement.",
          "use": "“I cannot do Friday; can Monday still serve your purpose?” revisits the agreement.",
          "alt": [],
          "id": "u07-l2-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Give early notice, name the impact and offer realistic alternatives when a commitment is at risk.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "Dev agreed to bring the only speaker to a party. On Wednesday he learns it is broken. The party is Friday; rentals are still available today.",
          "call": "Which action best preserves the host’s planning options?",
          "options": [
            {
              "text": "Tell the host now and discuss a workable replacement",
              "why": "The host can still rent equipment or change the plan."
            },
            {
              "text": "Wait until Friday to avoid worrying the host",
              "why": "Waiting removes time for alternatives.",
              "trap": 9
            },
            {
              "text": "Say the speaker should be ready, although no repair has been arranged",
              "why": "That assurance lacks a repair plan or supporting evidence.",
              "trap": 3
            },
            {
              "text": "Buy an expensive replacement on the host’s card without asking",
              "why": "Dev has no stated authority to spend the host’s money.",
              "trap": 2
            }
          ],
          "answer": 0,
          "issue": "timely notice",
          "facts": [
            "rentals are still available today"
          ],
          "id": "u07-l2-case",
          "rule": "u07-l2-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "steps",
          "say": "Give early notice, name the impact and offer realistic alternatives when a commitment is at risk.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Repair a threatened plan",
          "steps": [
            "Confirm the relevant constraint",
            "Tell the people relying on the plan",
            "Agree and record the next step"
          ],
          "distractors": [
            "Announce success before checking",
            "Silently redefine the original promise"
          ],
          "applyTo": {
            "facts": "You have confirmed that a venue is unavailable. Attendees are still travelling to it.",
            "stop": "Tell the people relying on the plan",
            "why": "They need accurate information before a replacement plan can serve them."
          },
          "id": "u07-l2-practice"
        },
        {
          "kind": "trap",
          "say": "Give early notice, name the impact and offer realistic alternatives when a commitment is at risk.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You promised a Saturday delivery. A delay is unavoidable, and you send “Tuesday instead” without asking whether Tuesday works.",
          "wrong": "Sending an update means the new arrangement has been accepted.",
          "right": "Ask whether the proposed change works and address the consequences if it does not.",
          "why": "An accurate update matters, but it cannot by itself establish agreement to a replacement.",
          "fixDistractors": [
            "Avoid sending any update until you can guarantee a fix.",
            "Treat the original promise as erased by the delay."
          ],
          "cat": 5,
          "id": "u07-l2-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Give early notice, name the impact and offer realistic alternatives when a commitment is at risk.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A neighbor promised to feed your cat. Their train is cancelled. They tell you immediately and offer to contact your trusted backup, but do not have permission to share your door code.",
          "call": "Which next step preserves both care and the access boundary?",
          "options": [
            {
              "text": "Send the code to every nearby neighbor",
              "why": "That spreads access beyond the stated permission.",
              "trap": 5
            },
            {
              "text": "Keep the problem secret until tomorrow",
              "why": "The cat still needs care and you can coordinate a backup.",
              "trap": 9
            },
            {
              "text": "Ask you to authorize the backup and arrange access",
              "why": "This addresses the changed situation without assuming new access authority."
            },
            {
              "text": "Declare that a cancelled train removes all further concern",
              "why": "The obstacle explains the problem but does not arrange care.",
              "trap": 7
            }
          ],
          "answer": 2,
          "issue": "renegotiating under constraints",
          "facts": [
            "do not have permission to share your door code"
          ],
          "id": "u07-l2-transfer",
          "rule": "u07-l2-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u07l3",
      "title": "Confidential does not mean convenient",
      "objective": "Identify the purpose and audience of a confidence before sharing it.",
      "takeaway": "Share a confidence only within its understood purpose, unless a serious competing responsibility needs careful action.",
      "fieldwork": "Use an invented example to name who needs which information, and why.",
      "items": [
        {
          "kind": "rule",
          "say": "Share a confidence only within its understood purpose, unless a serious competing responsibility needs careful action.",
          "status": "ethics",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "Keep the audience in view",
          "elements": [
            "Identify the agreed audience",
            "Check the purpose of sharing",
            "Use the least revealing adequate route"
          ],
          "distractorElements": [
            "Treat gossip as necessary context",
            "Assume a private message permits public posting"
          ],
          "ex": [
            {
              "facts": "A friend shares a draft with two readers for feedback.",
              "result": "A reader asks before forwarding it to a larger writing group."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Removing a name always makes a private story unrecognizable.",
              "a": false,
              "why": "Context may still identify the person."
            },
            {
              "t": "mcq",
              "q": "A colleague’s private career plan would enliven a team newsletter. What is missing?",
              "options": [
                "A more dramatic headline",
                "Their permission for that audience and purpose",
                "Proof that coworkers enjoy newsletters"
              ],
              "a": "Their permission for that audience and purpose",
              "why": "Being interesting does not establish permission."
            }
          ],
          "hook": "A confidence comes with a doorway, not an open plaza.",
          "id": "u07-l3-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "A responsibility to protect information entrusted for a limited audience or purpose.",
          "status": "practice",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "term": "Confidentiality",
          "meaning": "A responsibility to protect information entrusted for a limited audience or purpose.",
          "hook": "A draft shared for feedback is not automatically a public announcement.",
          "use": "A draft shared for feedback is not automatically a public announcement.",
          "alt": [],
          "id": "u07-l3-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Share a confidence only within its understood purpose, unless a serious competing responsibility needs careful action.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "Imani privately tells Alex she is interviewing elsewhere and asks him not to tell the team. There is no safety concern or work obligation requiring disclosure. A coworker asks why Imani took an afternoon off.",
          "call": "Which response respects the stated confidence without inventing a story?",
          "options": [
            {
              "text": "Describe the interview but omit the company name",
              "why": "The protected information is still disclosed.",
              "trap": 5
            },
            {
              "text": "Make up a medical appointment",
              "why": "That adds a false explanation.",
              "trap": 3
            },
            {
              "text": "Say, “I cannot speak for her; please ask her.”",
              "why": "Alex can decline to disclose without fabricating a reason."
            },
            {
              "text": "Share it because the coworker guessed first",
              "why": "A guess does not change the confidence.",
              "trap": 5
            }
          ],
          "answer": 2,
          "issue": "limited disclosure",
          "facts": [
            "asks him not to tell the team"
          ],
          "id": "u07-l3-case",
          "rule": "u07-l3-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Share a confidence only within its understood purpose, unless a serious competing responsibility needs careful action.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Agreed audience",
              "r": "The people the confidence was meant for"
            },
            {
              "l": "Purpose limitation",
              "r": "Keeping use within the understood reason"
            },
            {
              "l": "Identifying context",
              "r": "Details that can reveal someone without a name"
            },
            {
              "l": "Permission to forward",
              "r": "Agreement to share with an additional recipient"
            },
            {
              "l": "Minimum necessary detail",
              "r": "Enough information for the task without needless exposure"
            }
          ],
          "spare": [
            "Anything interesting may be shared"
          ],
          "mode": "concept",
          "id": "u07-l3-practice"
        },
        {
          "kind": "trap",
          "say": "Share a confidence only within its understood purpose, unless a serious competing responsibility needs careful action.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A community organizer privately receives a concern and wants advice on how to respond. The adviser does not need the person’s name or distinctive story.",
          "wrong": "Getting advice requires forwarding the full message.",
          "right": "Describe the relevant issue without unnecessary identifying details.",
          "why": "Advice may be possible while preserving more of the person’s privacy.",
          "fixDistractors": [
            "Change only the name and retain every identifying detail.",
            "Treat any concern about privacy as a ban on seeking advice."
          ],
          "cat": 7,
          "id": "u07-l3-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Share a confidence only within its understood purpose, unless a serious competing responsibility needs careful action.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A volunteer discovers a public event document accidentally includes private phone numbers. They have been asked to keep the registration list confidential. The document owner can remove the numbers promptly.",
          "call": "Which action addresses the exposure with the least additional disclosure?",
          "options": [
            {
              "text": "Quietly alert the document owner and request removal",
              "why": "The responsible person can act without spreading the list further."
            },
            {
              "text": "Post the full list publicly to demonstrate the problem",
              "why": "This repeats the exposure.",
              "trap": 9
            },
            {
              "text": "Do nothing because confidentiality forbids mentioning an error",
              "why": "A limited alert can protect the confidential information.",
              "trap": 5
            },
            {
              "text": "Send the list to every attendee for verification",
              "why": "That enlarges the audience without necessity.",
              "trap": 9
            }
          ],
          "answer": 0,
          "issue": "confidentiality and protective action",
          "facts": [
            "The document owner can remove the numbers promptly"
          ],
          "id": "u07-l3-transfer",
          "rule": "u07-l3-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u07l4",
      "title": "A promise has limits",
      "objective": "Recognize that a commitment does not license serious harm or override every other obligation.",
      "takeaway": "Take a promise seriously while examining serious conflicts, safer options and what repair remains possible.",
      "fieldwork": "Compare two fictional promises: one inconvenient to keep, one that would expose someone to serious harm.",
      "items": [
        {
          "kind": "rule",
          "say": "Take a promise seriously while examining serious conflicts, safer options and what repair remains possible.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "A promise is weighty, not a blank check",
          "elements": [
            "Identify the actual commitment",
            "Examine the competing responsibility",
            "Seek a safer alternative and explain the change"
          ],
          "distractorElements": [
            "Treat inconvenience as automatic release",
            "Treat a promise as permission for any harm"
          ],
          "ex": [
            {
              "facts": "You promised to publish a group photo; one participant then explains it reveals a location they must keep private.",
              "result": "Pause that publication and explore a crop or replacement image."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Any inconvenient promise can be ignored because circumstances change.",
              "a": false,
              "why": "Ordinary inconvenience alone does not erase reliance or responsibility."
            },
            {
              "t": "mcq",
              "q": "A promised action would create a newly discovered serious risk. What is relevant?",
              "options": [
                "Only the exact words of the original promise",
                "The risk, affected people and safer alternatives",
                "Whether keeping the promise is easier to explain"
              ],
              "a": "The risk, affected people and safer alternatives",
              "why": "The conflict needs examination, not automatic obedience to either slogan."
            }
          ],
          "hook": "Keep faith with people, not just with a sentence.",
          "id": "u07-l4-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "An obligation that pulls against another obligation in the same situation.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Competing responsibility",
          "meaning": "An obligation that pulls against another obligation in the same situation.",
          "hook": "Keeping a promise and protecting someone’s privacy may point in different directions.",
          "use": "Keeping a promise and protecting someone’s privacy may point in different directions.",
          "alt": [],
          "id": "u07-l4-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Take a promise seriously while examining serious conflicts, safer options and what repair remains possible.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You promised to post a team photo tonight. Before posting, one teammate explains that the image shows their private address and asks you to crop it. Cropping preserves the team photo and takes two minutes.",
          "call": "Which option honors the purpose while addressing the new concern?",
          "options": [
            {
              "text": "Post the original because every promise must be literal",
              "why": "A harmless adjustment is available.",
              "trap": 7
            },
            {
              "text": "Crop out the address and confirm before posting",
              "why": "The change protects privacy while keeping the intended team photo."
            },
            {
              "text": "Cancel all future team photos",
              "why": "That goes beyond the stated problem.",
              "trap": 7
            },
            {
              "text": "Ask the team to vote on revealing the address",
              "why": "A majority preference does not remove the privacy concern.",
              "trap": 4
            }
          ],
          "answer": 1,
          "issue": "limits and alternatives",
          "facts": [
            "Cropping preserves the team photo"
          ],
          "id": "u07-l4-case",
          "rule": "u07-l4-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Take a promise seriously while examining serious conflicts, safer options and what repair remains possible.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "Does the stated fact create a substantive conflict, or only inconvenience?",
          "buckets": [
            "Substantive conflict",
            "Ordinary inconvenience"
          ],
          "items": [
            {
              "text": "The promised file contains private addresses not intended for release.",
              "bucket": "Substantive conflict",
              "why": "Publishing creates a privacy concern."
            },
            {
              "text": "You prefer watching a film to the agreed easy errand.",
              "bucket": "Ordinary inconvenience",
              "why": "A preference alone is not a new competing duty."
            },
            {
              "text": "The agreed route is now closed and unsafe.",
              "bucket": "Substantive conflict",
              "why": "The changed condition matters to safe performance."
            },
            {
              "text": "The task takes the expected fifteen minutes.",
              "bucket": "Ordinary inconvenience",
              "why": "The expected burden was already part of the agreement."
            },
            {
              "text": "The promised message repeats a claim you now know is false.",
              "bucket": "Substantive conflict",
              "why": "Truthfulness conflicts with sending it unchanged."
            },
            {
              "text": "You feel awkward admitting you are running late.",
              "bucket": "Ordinary inconvenience",
              "why": "Awkwardness does not justify withholding the delay."
            }
          ],
          "mode": "contrast",
          "id": "u07-l4-practice"
        },
        {
          "kind": "trap",
          "say": "Take a promise seriously while examining serious conflicts, safer options and what repair remains possible.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You promised to give an honest reference. The requester later asks you to invent a qualification.",
          "wrong": "My promise to help means I must include the invented qualification.",
          "right": "Offer an accurate reference and decline to invent the qualification.",
          "why": "The original purpose of helping does not make fabrication part of an acceptable commitment.",
          "fixDistractors": [
            "Invent a vaguer qualification instead.",
            "Refuse every future request for help."
          ],
          "cat": 5,
          "id": "u07-l4-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Take a promise seriously while examining serious conflicts, safer options and what repair remains possible.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "You agreed to keep a project draft private. A teammate discovers it includes a serious factual error. The author is available and can correct it before release; nobody has relied on it yet.",
          "call": "What is the proportionate first response?",
          "options": [
            {
              "text": "Release the whole draft publicly",
              "why": "A narrower effective route is available.",
              "trap": 9
            },
            {
              "text": "Ignore the error because secrecy is absolute",
              "why": "Confidentiality need not prevent an internal correction.",
              "trap": 7
            },
            {
              "text": "Accuse the author of deliberate deceit",
              "why": "The author’s motive is not established.",
              "trap": 3
            },
            {
              "text": "Tell the author privately and seek correction before release",
              "why": "This addresses the error while preserving the original confidentiality where possible."
            }
          ],
          "answer": 3,
          "issue": "proportionate response to a conflict",
          "facts": [
            "The author is available and can correct it before release"
          ],
          "id": "u07-l4-transfer",
          "rule": "u07-l4-rule",
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
