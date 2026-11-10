// Original Everyday Ethics teaching scenarios. Fictional situations; source provenance is per item.
(function () {
  const unit = {
  "id": "u08",
  "title": "Notice the pull",
  "blurb": "Persuasion, pressure and the interests behind advice.",
  "subject": "influence",
  "assume": "These are fictional everyday situations, not legal or professional advice. Use only the stated facts. Scored questions test the stated purpose and conditions; reasonable moral disagreement belongs in reflection.",
  "lessons": [
    {
      "id": "u08l1",
      "title": "Reasons or pressure?",
      "objective": "Distinguish reasons someone can examine from pressure that obstructs a considered choice.",
      "takeaway": "Offer relevant reasons and leave room to understand, question and decline.",
      "fieldwork": "Rewrite a fictional pushy invitation into one that leaves a clear route to decline.",
      "items": [
        {
          "kind": "rule",
          "say": "Offer relevant reasons and leave room to understand, question and decline.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Make room for a real decision",
          "elements": [
            "Explain relevant reasons",
            "Make important limits visible",
            "Allow questions and a feasible no"
          ],
          "distractorElements": [
            "Invent a deadline",
            "Make refusal personally humiliating"
          ],
          "ex": [
            {
              "facts": "A club needs a decision by Friday because it must confirm room numbers.",
              "result": "It states the real deadline, cost and cancellation terms."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Every deadline is manipulative.",
              "a": false,
              "why": "A real constraint can be communicated honestly."
            },
            {
              "t": "mcq",
              "q": "Which detail makes urgency misleading?",
              "options": [
                "The deadline is tomorrow",
                "The speaker repeats the deadline",
                "The claimed deadline does not exist"
              ],
              "a": "The claimed deadline does not exist",
              "why": "The factual basis of the urgency matters."
            }
          ],
          "hook": "An open door can still have a real closing time.",
          "id": "u08-l1-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Influence that undermines a considered choice through deception or exploitation of a vulnerability.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Manipulative pressure",
          "meaning": "Influence that undermines a considered choice through deception or exploitation of a vulnerability.",
          "hook": "Invented scarcity can push a decision by distorting the available time.",
          "use": "Invented scarcity can push a decision by distorting the available time.",
          "alt": [],
          "id": "u08-l1-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Offer relevant reasons and leave room to understand, question and decline.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A workshop organizer says only one seat remains, although twenty seats are open. They want people to register quickly. The fee is nonrefundable.",
          "call": "Which change addresses the misleading pressure?",
          "options": [
            {
              "text": "Use a larger countdown clock",
              "why": "That amplifies the invented scarcity.",
              "trap": 5
            },
            {
              "text": "Say the true availability and make the fee terms clear",
              "why": "This removes the false constraint and supports an informed choice."
            },
            {
              "text": "Keep the claim if registration would help attendees",
              "why": "A hoped-for benefit does not make the statement true.",
              "trap": 1
            },
            {
              "text": "Hide the seat count but retain a fake deadline",
              "why": "The pressure remains based on a false constraint.",
              "trap": 5
            }
          ],
          "answer": 1,
          "issue": "truthful urgency",
          "facts": [
            "twenty seats are open"
          ],
          "id": "u08-l1-case",
          "rule": "u08-l1-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Offer relevant reasons and leave room to understand, question and decline.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Relevant reason",
              "r": "Information that bears on the person’s decision"
            },
            {
              "l": "Invented scarcity",
              "r": "A false claim that availability is limited"
            },
            {
              "l": "Real deadline",
              "r": "A time limit grounded in an actual constraint"
            },
            {
              "l": "Material limitation",
              "r": "A restriction that could change the decision"
            },
            {
              "l": "Feasible refusal",
              "r": "A usable way to say no without the invented penalty"
            }
          ],
          "spare": [
            "Any strong feeling proves manipulation"
          ],
          "mode": "concept",
          "id": "u08-l1-practice"
        },
        {
          "kind": "trap",
          "say": "Offer relevant reasons and leave room to understand, question and decline.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A theatre genuinely must close booking at noon to allocate accessibility support. It clearly explains this reason.",
          "wrong": "A deadline is unethical just because it creates urgency.",
          "right": "Evaluate whether the deadline is real, proportionate and explained.",
          "why": "Urgency can reflect a genuine planning constraint rather than deception.",
          "fixDistractors": [
            "Remove the explanation and call it a flash sale.",
            "Assume all deadlines are beyond question."
          ],
          "cat": 7,
          "id": "u08-l1-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Offer relevant reasons and leave room to understand, question and decline.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A friend invites you on a trip and says, “If you cared about me, you would agree now.” You have asked for the cost and dates, but they will not provide them.",
          "call": "Which response best restores the conditions for a considered choice?",
          "options": [
            {
              "text": "Agree so the friendship is not tested",
              "why": "That leaves the important missing information unresolved.",
              "trap": 2
            },
            {
              "text": "Demand a guarantee the trip will be perfect",
              "why": "That sets an unrealistic condition.",
              "trap": 10
            },
            {
              "text": "Ask for the dates and cost, and decline to commit before knowing them",
              "why": "This names the information needed without accepting the loyalty test."
            },
            {
              "text": "Invent a scheduling conflict",
              "why": "A fabricated reason avoids rather than clarifies the decision.",
              "trap": 3
            }
          ],
          "answer": 2,
          "issue": "pressure and missing information",
          "facts": [
            "they will not provide them"
          ],
          "id": "u08-l1-transfer",
          "rule": "u08-l1-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u08l2",
      "title": "Whose interest is in the advice?",
      "objective": "Recognize a conflict of interest without assuming it proves dishonesty.",
      "takeaway": "Make relevant personal interests visible and use an independent check when impartial judgment matters.",
      "fieldwork": "Invent a recommendation with a referral fee and write a disclosure someone can understand.",
      "items": [
        {
          "kind": "rule",
          "say": "Make relevant personal interests visible and use an independent check when impartial judgment matters.",
          "status": "ethics",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "A conflict deserves daylight",
          "elements": [
            "Name the relevant interest",
            "Explain how it relates to the decision",
            "Use an appropriate independent safeguard"
          ],
          "distractorElements": [
            "Assume disclosure proves the recommendation is sound",
            "Assume every conflicted person must be lying"
          ],
          "ex": [
            {
              "facts": "A committee member’s sibling owns a bidder.",
              "result": "The member discloses the relationship and follows a process for independent comparison."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A disclosed referral fee proves that a product is poor.",
              "a": false,
              "why": "The fee creates an interest; product quality needs separate evidence."
            },
            {
              "t": "mcq",
              "q": "Which step tests a paid recommendation’s merits?",
              "options": [
                "Count how confidently it is delivered",
                "Compare relevant evidence from an independent source",
                "Accept it because the fee was disclosed"
              ],
              "a": "Compare relevant evidence from an independent source",
              "why": "Disclosure helps interpret advice but does not validate it."
            }
          ],
          "hook": "Read the advice and the incentive label.",
          "id": "u08-l2-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "A personal interest that could interfere with a responsibility to exercise independent judgment.",
          "status": "practice",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "term": "Conflict of interest",
          "meaning": "A personal interest that could interfere with a responsibility to exercise independent judgment.",
          "hook": "A selector earning money from one applicant has an interest relevant to the selection.",
          "use": "A selector earning money from one applicant has an interest relevant to the selection.",
          "alt": [],
          "id": "u08-l2-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Make relevant personal interests visible and use an independent check when impartial judgment matters.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "Rae recommends a course and will receive a referral payment if you enroll. The course may be useful, but Rae has not mentioned the payment.",
          "call": "What would improve your ability to evaluate the recommendation?",
          "options": [
            {
              "text": "Disclosure of the payment and independent information about fit",
              "why": "You can consider the interest and separately examine the course."
            },
            {
              "text": "Assuming the payment proves the course is a scam",
              "why": "That conclusion goes beyond the facts.",
              "trap": 3
            },
            {
              "text": "Ignoring the payment because Rae is a friend",
              "why": "Friendship does not remove the relevant interest.",
              "trap": 6
            },
            {
              "text": "Treating a disclosure as proof of quality",
              "why": "Transparency does not establish quality.",
              "trap": 1
            }
          ],
          "answer": 0,
          "issue": "relevant personal interest",
          "facts": [
            "will receive a referral payment"
          ],
          "id": "u08-l2-case",
          "rule": "u08-l2-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Make relevant personal interests visible and use an independent check when impartial judgment matters.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "q": "What is the statement doing?",
          "buckets": [
            "Disclosing an interest",
            "Assessing the merits"
          ],
          "items": [
            {
              "text": "“I earn a fee if you sign up.”",
              "bucket": "Disclosing an interest",
              "why": "This describes the adviser’s incentive."
            },
            {
              "text": "“The course includes the topic you need.”",
              "bucket": "Assessing the merits",
              "why": "This concerns fit, which needs checking."
            },
            {
              "text": "“My sibling owns the supplier.”",
              "bucket": "Disclosing an interest",
              "why": "This relationship may affect independence."
            },
            {
              "text": "“This option has a two-year repair service.”",
              "bucket": "Assessing the merits",
              "why": "This describes a feature of the offer."
            },
            {
              "text": "“I own shares in this company.”",
              "bucket": "Disclosing an interest",
              "why": "The speaker may benefit financially."
            },
            {
              "text": "“The comparison used the same test conditions.”",
              "bucket": "Assessing the merits",
              "why": "This concerns evidence quality."
            }
          ],
          "mode": "contrast",
          "id": "u08-l2-practice"
        },
        {
          "kind": "trap",
          "say": "Make relevant personal interests visible and use an independent check when impartial judgment matters.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A volunteer openly says that a venue is owned by their cousin. The committee immediately accepts it without comparing costs or access.",
          "wrong": "Once a relationship is disclosed, the decision cannot be biased.",
          "right": "Use the disclosure to choose safeguards and still compare the relevant merits.",
          "why": "Disclosure is information, not a substitute for an independent process.",
          "fixDistractors": [
            "Keep future relationships secret to avoid doubt.",
            "Reject the venue solely to punish the family connection."
          ],
          "cat": 5,
          "id": "u08-l2-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Make relevant personal interests visible and use an independent check when impartial judgment matters.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A small grant panel requires members to step out of decisions involving close relatives. Sam’s sister applies. Sam believes her proposal is strongest.",
          "call": "What follows the stated independence procedure?",
          "options": [
            {
              "text": "Vote for her while promising to be objective",
              "why": "The procedure requires stepping out.",
              "trap": 4
            },
            {
              "text": "Vote against her to prove neutrality",
              "why": "That still participates in the conflicted decision.",
              "trap": 4
            },
            {
              "text": "Ask her to withdraw without explaining why",
              "why": "The rule concerns Sam’s participation, not automatic exclusion.",
              "trap": 5
            },
            {
              "text": "Disclose the relationship and step out of her decision",
              "why": "This applies the agreed safeguard without prejudging her proposal."
            }
          ],
          "answer": 3,
          "issue": "independent safeguard",
          "facts": [
            "requires members to step out"
          ],
          "id": "u08-l2-transfer",
          "rule": "u08-l2-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u08l3",
      "title": "When the reward changes the work",
      "objective": "Trace how a metric can encourage behavior without treating the metric as the whole purpose.",
      "takeaway": "Ask what a reward encourages, what it misses and who carries the effects.",
      "fieldwork": "Choose a fictional team metric and name one useful activity it might leave out.",
      "items": [
        {
          "kind": "rule",
          "say": "Ask what a reward encourages, what it misses and who carries the effects.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "The target is a proxy",
          "elements": [
            "Name the underlying purpose",
            "Identify the rewarded behavior",
            "Check unmeasured effects"
          ],
          "distractorElements": [
            "Assume the measured number captures every value",
            "Blame individuals before examining the incentive"
          ],
          "ex": [
            {
              "facts": "A help desk rewards short calls only.",
              "result": "Workers may rush callers even when a careful explanation would solve the problem."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A metric can improve while the underlying service gets worse.",
              "a": true,
              "why": "The measure can omit important aspects of the purpose."
            },
            {
              "t": "mcq",
              "q": "Which evidence matters alongside call length?",
              "options": [
                "Whether the caller’s issue was resolved",
                "Whether the dashboard looks tidy",
                "Whether the target is easy to remember"
              ],
              "a": "Whether the caller’s issue was resolved",
              "why": "Resolution connects the metric to the service’s purpose."
            }
          ],
          "hook": "A scoreboard shows part of the game.",
          "id": "u08-l3-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "An observable indicator used to stand in for something harder to measure.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Proxy measure",
          "meaning": "An observable indicator used to stand in for something harder to measure.",
          "hook": "Call length is measurable; whether someone received useful help may need more information.",
          "use": "Call length is measurable; whether someone received useful help may need more information.",
          "alt": [],
          "id": "u08-l3-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Ask what a reward encourages, what it misses and who carries the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A library rewards staff for the number of questions answered. A staff member splits one visitor’s question into four tickets to increase the count. No extra help is provided.",
          "call": "Which conclusion is supported?",
          "options": [
            {
              "text": "Four tickets prove four times as much useful service",
              "why": "The count changed without additional help.",
              "trap": 5
            },
            {
              "text": "Ticket counts can no longer provide any information",
              "why": "The example reveals a limit, not total uselessness.",
              "trap": 7
            },
            {
              "text": "The measure increased without a matching increase in the intended service",
              "why": "The counted activity became detached from the purpose."
            },
            {
              "text": "The visitor must have wanted four tickets",
              "why": "That preference is not stated.",
              "trap": 3
            }
          ],
          "answer": 2,
          "issue": "metric and purpose",
          "facts": [
            "No extra help is provided"
          ],
          "id": "u08-l3-case",
          "rule": "u08-l3-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "steps",
          "say": "Ask what a reward encourages, what it misses and who carries the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Investigate a misleading improvement",
          "steps": [
            "Name the service’s actual purpose",
            "Compare the metric with relevant outcomes",
            "Revise the incentive and review effects"
          ],
          "distractors": [
            "Assume a higher number proves success",
            "Remove all feedback before learning anything"
          ],
          "applyTo": {
            "facts": "A community program wants reliable attendance, but its dashboard counts registrations only. You have stated the actual purpose.",
            "stop": "Compare the metric with relevant outcomes",
            "why": "Check whether registrations translate into attendance and who is left out."
          },
          "id": "u08-l3-practice"
        },
        {
          "kind": "trap",
          "say": "Ask what a reward encourages, what it misses and who carries the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A team pays for completed tasks, and mentoring falls because it is not counted. A manager says the reward system cannot matter because staff should care.",
          "wrong": "Only individual character can explain what work gets neglected.",
          "right": "Examine both people’s choices and what the reward system makes costly or invisible.",
          "why": "Responsibility and incentives can both matter; neither erases the other.",
          "fixDistractors": [
            "Declare that rewards remove every individual responsibility.",
            "Count mentoring only when it generates a sale."
          ],
          "cat": 7,
          "id": "u08-l3-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Ask what a reward encourages, what it misses and who carries the effects.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A park campaign counts bags of litter collected. Volunteers begin using tiny bags to raise the count. The goal is cleaner paths, and weighing or inspecting collected litter is feasible.",
          "call": "Which change better connects feedback to the purpose?",
          "options": [
            {
              "text": "Reward the largest number of bags more strongly",
              "why": "That reinforces the distorted measure.",
              "trap": 5
            },
            {
              "text": "Combine collection measures with checks of path cleanliness",
              "why": "The check looks at the outcome the campaign intends."
            },
            {
              "text": "Stop cleaning because measurement is imperfect",
              "why": "Imperfect measurement does not defeat the purpose.",
              "trap": 7
            },
            {
              "text": "Assume all volunteers intended to deceive",
              "why": "Intent is not established for everyone.",
              "trap": 3
            }
          ],
          "answer": 1,
          "issue": "proxy limits",
          "facts": [
            "The goal is cleaner paths"
          ],
          "id": "u08-l3-transfer",
          "rule": "u08-l3-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u08l4",
      "title": "Support without steering secretly",
      "objective": "Distinguish helping someone understand a choice from covertly deciding for them.",
      "takeaway": "Make the choice understandable without hiding options or using someone’s dependence against them.",
      "fieldwork": "Sketch a fictional choice screen with equally clear acceptance and refusal routes.",
      "items": [
        {
          "kind": "rule",
          "say": "Make the choice understandable without hiding options or using someone’s dependence against them.",
          "status": "ethics",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Help people choose, not just comply",
          "elements": [
            "Show meaningful options",
            "Explain important consequences",
            "Avoid exploiting dependence"
          ],
          "distractorElements": [
            "Hide refusal behind confusing steps",
            "Treat silence as permission for an unrelated commitment"
          ],
          "ex": [
            {
              "facts": "A tutor explains two study plans and their demands.",
              "result": "The student can choose after asking questions, including choosing neither."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A suggested default is always wrong.",
              "a": false,
              "why": "A clear, reversible default may help; its purpose, visibility and effects matter."
            },
            {
              "t": "mcq",
              "q": "Which design most obstructs a considered refusal?",
              "options": [
                "A visible recommended option",
                "A clear explanation of tradeoffs",
                "A cancellation button disguised as an error"
              ],
              "a": "A cancellation button disguised as an error",
              "why": "The route is intentionally confusing."
            }
          ],
          "hook": "Put the handles where people can reach them.",
          "id": "u08-l4-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "The way options are presented, ordered or made easier to select.",
          "status": "practice",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": true,
          "term": "Choice architecture",
          "meaning": "The way options are presented, ordered or made easier to select.",
          "hook": "A default checkbox shapes a decision even when alternatives technically exist.",
          "use": "A default checkbox shapes a decision even when alternatives technically exist.",
          "alt": [],
          "id": "u08-l4-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Make the choice understandable without hiding options or using someone’s dependence against them.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "An app offers a free event reminder. The signup quietly adds a paid service unless users find an unlabeled checkbox. Users have not requested that service.",
          "call": "Which change directly addresses the hidden commitment?",
          "options": [
            {
              "text": "Make the fee smaller but keep the checkbox hidden",
              "why": "The unrequested commitment remains concealed.",
              "trap": 5
            },
            {
              "text": "Describe the signup as convenient",
              "why": "That does not reveal the paid addition.",
              "trap": 6
            },
            {
              "text": "Require users to read every help page first",
              "why": "That does not make the actual choice clear.",
              "trap": 10
            },
            {
              "text": "Clearly separate the paid service and require an informed selection",
              "why": "Users can understand and choose the additional commitment."
            }
          ],
          "answer": 3,
          "issue": "transparent choice",
          "facts": [
            "quietly adds a paid service"
          ],
          "id": "u08-l4-case",
          "rule": "u08-l4-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Make the choice understandable without hiding options or using someone’s dependence against them.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Default",
              "r": "The option selected unless the user changes it"
            },
            {
              "l": "Opt-in",
              "r": "An affirmative choice to participate"
            },
            {
              "l": "Opt-out",
              "r": "A route to decline or leave participation"
            },
            {
              "l": "Friction",
              "r": "Effort required to take an action"
            },
            {
              "l": "Hidden commitment",
              "r": "An obligation obscured at the point of choice"
            }
          ],
          "spare": [
            "The most profitable option is automatically fair"
          ],
          "mode": "concept",
          "id": "u08-l4-practice"
        },
        {
          "kind": "trap",
          "say": "Make the choice understandable without hiding options or using someone’s dependence against them.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A reading app starts with larger text, explains the setting and lets users change it easily.",
          "wrong": "Any default prevents genuine choice.",
          "right": "Examine whether the default is transparent, appropriate and easy to change.",
          "why": "Defaults shape choices, but they need not conceal or trap people.",
          "fixDistractors": [
            "Hide the setting so readers do not worry.",
            "Assume easy reversal excuses every default."
          ],
          "cat": 7,
          "id": "u08-l4-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Make the choice understandable without hiding options or using someone’s dependence against them.",
          "status": "fictional",
          "src": "Markkula Center ethical decision-making framework and its interpretive limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A team leader asks employees to join an unpaid weekend picnic and says attendance will be remembered during promotion decisions. It is described as optional.",
          "call": "Which detail most undermines the stated freedom to decline?",
          "options": [
            {
              "text": "The link to promotion decisions",
              "why": "A career consequence makes the invitation more than a simple optional social event."
            },
            {
              "text": "The invitation calls attendance optional",
              "why": "The label does not remove the stated career consequence.",
              "trap": 5
            },
            {
              "text": "Several employees say they are enthusiastic",
              "why": "Their enjoyment does not remove pressure on others.",
              "trap": 6
            },
            {
              "text": "The picnic happens outside scheduled work hours",
              "why": "That timing does not remove the promotion-related pressure.",
              "trap": 6
            }
          ],
          "answer": 0,
          "issue": "dependence and choice",
          "facts": [
            "remembered during promotion decisions"
          ],
          "id": "u08-l4-transfer",
          "rule": "u08-l4-rule",
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
