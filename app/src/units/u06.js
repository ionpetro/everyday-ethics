// Original Everyday Ethics content. Fictional cases and authored teaching synthesis.
(function () {
  const unit = {
  "id": "u06",
  "title": "Fair by which rule?",
  "blurb": "Make the allocation rule visible, then examine what it does.",
  "subject": "fairness",
  "assume": "These are original fictional situations. Use only the stated facts. Scored questions test concepts or a stated decision standard, not whether someone is a good person. Real ethical disagreements can remain; no exercise requires confronting anyone or sharing private experiences.",
  "lessons": [
    {
      "id": "u06l1",
      "title": "Equal is one possible rule",
      "objective": "Distinguish equal shares from allocation based on a stated relevant need.",
      "takeaway": "Distinguish equal shares from allocation based on a stated relevant need.",
      "fieldwork": "Choose a fictional allocation objective, then explain why equal shares or a specified need fits that objective.",
      "items": [
        {
          "id": "u06-l1-principle",
          "kind": "rule",
          "say": "Distinguish equal shares from allocation based on a stated relevant need.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Equal is one possible rule",
          "elements": [
            "Name the allocation objective",
            "Identify the relevant differences",
            "Apply the chosen criterion consistently"
          ],
          "distractorElements": [
            "Assume identical shares fit every objective",
            "Change the criterion to favor a preferred person"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "A workshop has adjustable seats. Equal access may require different adjustments for different users.",
              "result": "The relevant comparison is usable access, not identical chair settings."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Giving everyone an identical item always gives everyone equal usable access.",
              "a": false,
              "why": "Different circumstances can make identical provision work differently."
            },
            {
              "t": "mcq",
              "q": "A fund explicitly prioritizes the largest verified unmet transport need. What is most relevant under that rule?",
              "options": [
                "Who submitted the neatest handwriting",
                "The verified gap between required travel cost and available support",
                "Who knows the organizer best"
              ],
              "a": "The verified gap between required travel cost and available support",
              "why": "The stated criterion concerns unmet transport need, not presentation or personal ties."
            }
          ],
          "hook": "The relevant comparison is usable access, not identical chair settings."
        },
        {
          "id": "u06-l1-concept",
          "kind": "term",
          "say": "Distributing a resource according to a specified relevant need.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Need-based allocation",
          "meaning": "Distributing a resource according to a specified relevant need.",
          "use": "A repair fund might prioritize loss of essential heating rather than divide money equally.",
          "hook": "A repair fund might prioritize loss of essential heating rather than divide money equally.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u06-l1-case",
          "kind": "hypo",
          "say": "Distinguish equal shares from allocation based on a stated relevant need.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A fictional travel fund has two applicants with equal eligibility. Its published rule is to cover verified unmet bus fare. Jo has a $20 shortfall and Ana a $40 shortfall; there is $60 available and no other condition.",
          "call": "Which allocation follows the stated rule?",
          "rule": "u06-l1-principle",
          "issue": "equal shares and relevant need",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Each receives $30 because identical amounts are always required.",
              "why": "That gives Jo more than the verified need and leaves part of Ana’s need unmet.",
              "trap": 4
            },
            {
              "text": "Jo receives $40 because Jo applied first.",
              "why": "Arrival order is not the published criterion.",
              "trap": 6
            },
            {
              "text": "Hold the entire fund because the two needs differ.",
              "why": "The stated rule exists to handle the verified difference, and the fund is sufficient.",
              "trap": 10
            },
            {
              "text": "Jo receives $20 and Ana $40.",
              "why": "Each verified shortfall is covered exactly within the available total."
            }
          ],
          "answer": 3,
          "facts": [
            "Its published rule is to cover verified unmet bus fare."
          ]
        },
        {
          "id": "u06-l1-contrast",
          "kind": "sort",
          "say": "Distinguish equal shares from allocation based on a stated relevant need.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "Which allocation criterion is being used?",
          "buckets": [
            "Equal shares",
            "Specified need"
          ],
          "items": [
            {
              "text": "Each of four members receives one quarter of the refund.",
              "bucket": "Equal shares",
              "why": "The amount is identical per person."
            },
            {
              "text": "Travel support covers each person’s verified fare shortfall.",
              "bucket": "Specified need",
              "why": "The amount follows the stated need."
            },
            {
              "text": "Every participant receives the same number of tokens.",
              "bucket": "Equal shares",
              "why": "Tokens are divided identically."
            },
            {
              "text": "Extra reading time follows a documented access requirement.",
              "bucket": "Specified need",
              "why": "The provision responds to a relevant access difference."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u06-l1-misconception",
          "kind": "trap",
          "say": "Distinguish equal shares from allocation based on a stated relevant need.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A learner sees different access arrangements and concludes unequal treatment must be favoritism, without checking why they differ.",
          "wrong": "Different provision automatically proves favoritism.",
          "right": "Check whether the difference follows a relevant, consistently applied access criterion.",
          "why": "Different inputs may support comparable access; the justification needs examination.",
          "fixDistractors": [
            "Assume any claimed need must be accepted without a relevant check.",
            "Require identical arrangements even when they prevent participation."
          ],
          "cat": 7,
          "boundary": false
        },
        {
          "id": "u06-l1-transfer",
          "kind": "hypo",
          "say": "Distinguish equal shares from allocation based on a stated relevant need.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A community class promises every learner access to the same written instructions. One participant cannot read the small print. Large-print copies are available at no additional cost. The goal is usable access, not identical paper.",
          "call": "Which action follows that goal?",
          "rule": "u06-l1-principle",
          "issue": "equal shares and relevant need",
          "transfer": true,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Provide only small print so everyone gets identical paper.",
              "why": "Identical format does not meet the stated usable-access goal.",
              "trap": 4
            },
            {
              "text": "Offer a large-print copy with the same instructions.",
              "why": "The format changes to make the same content usable."
            },
            {
              "text": "Remove some instructions from the larger copy to keep one page.",
              "why": "That changes the content rather than only its accessible format.",
              "trap": 2
            },
            {
              "text": "Assume someone else will read it aloud without asking.",
              "why": "An unconfirmed workaround does not establish the participant’s usable access.",
              "trap": 3
            }
          ],
          "answer": 1,
          "facts": [
            "The goal is usable access, not identical paper."
          ]
        }
      ]
    },
    {
      "id": "u06l2",
      "title": "Relevant merit, visible standards",
      "objective": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
      "takeaway": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
      "fieldwork": "For a fictional role, name two relevant criteria and one attractive detail that does not establish either criterion.",
      "items": [
        {
          "id": "u06-l2-principle",
          "kind": "rule",
          "say": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Relevant merit, visible standards",
          "elements": [
            "State the task-related standard",
            "Use comparable evidence",
            "Separate relevant ability from irrelevant preference"
          ],
          "distractorElements": [
            "Treat familiarity as proof of ability",
            "Invent a new standard after seeing who wins"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "A translation role needs accurate translation, not a shared hobby with the panel.",
              "result": "Compare the relevant work sample using the same stated standard."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A candidate’s shared hobby with a reviewer establishes their ability to perform an unrelated task.",
              "a": false,
              "why": "Similarity may feel familiar without providing task-relevant evidence."
            },
            {
              "t": "mcq",
              "q": "A role requires proofreading a short newsletter. Which evidence is most directly relevant?",
              "options": [
                "A comparable proofreading sample",
                "A shared hometown with the reviewer",
                "A more expensive presentation folder"
              ],
              "a": "A comparable proofreading sample",
              "why": "A relevant work sample bears on the stated task."
            }
          ],
          "hook": "Compare the relevant work sample using the same stated standard."
        },
        {
          "id": "u06-l2-concept",
          "kind": "term",
          "say": "A standard that bears on the purpose of the decision.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Relevant criterion",
          "meaning": "A standard that bears on the purpose of the decision.",
          "use": "For a route-planning task, accurate routing matters more than sharing a reviewer’s favorite sport.",
          "hook": "For a route-planning task, accurate routing matters more than sharing a reviewer’s favorite sport.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u06-l2-case",
          "kind": "hypo",
          "say": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A club is choosing someone to translate a notice accurately. Both applicants submit the same translation exercise. The published standard is accuracy, and Sam’s sample has fewer errors. Pat is a close friend of the reviewer.",
          "call": "Which decision follows the published standard?",
          "rule": "u06-l2-principle",
          "issue": "task-relevant standards",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Select Sam on the stronger accuracy evidence.",
              "why": "The comparable sample directly addresses the stated criterion."
            },
            {
              "text": "Select Pat because the reviewer can communicate with a friend more comfortably.",
              "why": "Personal comfort is not the published accuracy standard.",
              "trap": 6
            },
            {
              "text": "Add an unannounced social-fit criterion after seeing the samples.",
              "why": "Changing the standard afterward can favor a preferred applicant.",
              "trap": 4
            },
            {
              "text": "Ignore both samples because friendship makes comparison impossible.",
              "why": "The stated evidence still allows comparison against the published criterion.",
              "trap": 10
            }
          ],
          "answer": 0,
          "facts": [
            "The published standard is accuracy"
          ]
        },
        {
          "id": "u06-l2-contrast",
          "kind": "pairs",
          "say": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Comparable evidence",
              "r": "Information collected under sufficiently similar conditions for the intended comparison"
            },
            {
              "l": "Task-related standard",
              "r": "A requirement tied to the work or purpose being assessed"
            },
            {
              "l": "Favoritism",
              "r": "An advantage based on a preferred person rather than the stated relevant basis"
            }
          ],
          "mode": "concept"
        },
        {
          "id": "u06-l2-misconception",
          "kind": "trap",
          "say": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A reviewer says a polished accent must prove a person can maintain a spreadsheet, without checking any spreadsheet work.",
          "wrong": "A polished speaking style proves unrelated technical accuracy.",
          "right": "Use evidence of the spreadsheet task rather than a proxy unrelated to the stated standard.",
          "why": "A favorable impression in one domain does not establish performance in another.",
          "fixDistractors": [
            "Assume every polished speaker lacks the skill.",
            "Replace task evidence with the reviewer’s first impression."
          ],
          "cat": 7,
          "boundary": false
        },
        {
          "id": "u06-l2-transfer",
          "kind": "hypo",
          "say": "Judge performance against criteria relevant to the role rather than personal similarity or connections.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A volunteer rota needs someone available on Tuesday and able to use a specific scheduling tool. Both applicants pass the same tool exercise, but only Lee confirms Tuesday availability. The role cannot move days.",
          "call": "Which conclusion follows the stated requirements?",
          "rule": "u06-l2-principle",
          "issue": "task-relevant standards",
          "transfer": true,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Choose the applicant with the higher score in an unrelated art contest.",
              "why": "That evidence does not address this rota’s requirements.",
              "trap": 6
            },
            {
              "text": "Choose the unavailable applicant because equal skill means every other difference is irrelevant.",
              "why": "The stated availability condition still matters.",
              "trap": 2
            },
            {
              "text": "Lee meets both demonstrated requirements.",
              "why": "The skill evidence is equal, and the fixed availability requirement distinguishes the applicants."
            },
            {
              "text": "Assume the unavailable applicant will change plans after selection.",
              "why": "No such availability has been confirmed.",
              "trap": 3
            }
          ],
          "answer": 2,
          "facts": [
            "The role cannot move days."
          ]
        }
      ]
    },
    {
      "id": "u06l3",
      "title": "Fairness in the process",
      "objective": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
      "takeaway": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
      "fieldwork": "Sketch a fictional decision process: one clear criterion, an accessible way to take part, and a route for correcting a factual error.",
      "items": [
        {
          "id": "u06-l3-principle",
          "kind": "rule",
          "say": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Fairness in the process",
          "elements": [
            "Explain the decision basis",
            "Check that people can participate",
            "Allow review of relevant errors"
          ],
          "distractorElements": [
            "Treat a procedure’s existence as proof of fairness",
            "Refuse to correct a known error for consistency’s sake"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "A scholarship form wrongly records an eligible applicant as late.",
              "result": "A review route lets the applicant supply the timestamp and have the error checked."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Applying a mistaken record consistently makes the record accurate.",
              "a": false,
              "why": "Uniform application does not fix the underlying factual error."
            },
            {
              "t": "mcq",
              "q": "An applicant disputes a recorded submission time. What evidence most directly addresses the issue?",
              "options": [
                "A copy of the submission receipt",
                "Their favorite subject",
                "How many friends support them"
              ],
              "a": "A copy of the submission receipt",
              "why": "The dated receipt bears on timeliness under the rule."
            }
          ],
          "hook": "A review route lets the applicant supply the timestamp and have the error checked."
        },
        {
          "id": "u06-l3-concept",
          "kind": "term",
          "say": "Fairness in how a decision is made, including consistent criteria and a meaningful chance to address relevant errors.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Procedural fairness",
          "meaning": "Fairness in how a decision is made, including consistent criteria and a meaningful chance to address relevant errors.",
          "use": "A clear rule needs an accessible application route and a way to check a wrong record.",
          "hook": "A clear rule needs an accessible application route and a way to check a wrong record.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u06-l3-case",
          "kind": "hypo",
          "say": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A workshop allocates places to eligible applications received before noon. Taylor is rejected as late, but has an automatic receipt showing 11:40. A review process exists, and a place is still available.",
          "call": "Which response follows the rule while addressing the disputed fact?",
          "rule": "u06-l3-principle",
          "issue": "procedure and correction",
          "transfer": false,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Keep the rejection because correcting it would always be unfair to others.",
              "why": "Correcting a verified factual error can restore the stated rule rather than change it.",
              "trap": 4
            },
            {
              "text": "Check the receipt and correct the decision if it confirms a timely eligible application.",
              "why": "Review tests whether the actual rule was applied to accurate information."
            },
            {
              "text": "Admit Taylor without checking eligibility because any appeal must succeed.",
              "why": "An appeal is a request for review, not proof that all criteria are satisfied.",
              "trap": 3
            },
            {
              "text": "Replace the deadline with a new rule favoring the loudest complaint.",
              "why": "That changes the criterion instead of checking the relevant record.",
              "trap": 10
            }
          ],
          "answer": 1,
          "facts": [
            "an automatic receipt showing 11:40"
          ]
        },
        {
          "id": "u06-l3-contrast",
          "kind": "sort",
          "say": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "q": "Does this step apply a rule or change it?",
          "buckets": [
            "Applies the stated rule",
            "Changes the rule"
          ],
          "items": [
            {
              "text": "Verify a receipt against the published deadline.",
              "bucket": "Applies the stated rule",
              "why": "The check concerns an existing criterion."
            },
            {
              "text": "Add a new requirement after applications close.",
              "bucket": "Changes the rule",
              "why": "It introduces a condition applicants did not face before."
            },
            {
              "text": "Correct a wrongly entered eligibility date.",
              "bucket": "Applies the stated rule",
              "why": "It repairs the factual basis for applying the criterion."
            },
            {
              "text": "Waive every condition only for a reviewer’s friend.",
              "bucket": "Changes the rule",
              "why": "The special exception is not part of the stated standard."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u06-l3-misconception",
          "kind": "trap",
          "say": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A committee says its process must be fair because it used the same online form, although the form cannot be used with a required access tool.",
          "wrong": "An identical form proves everyone had a meaningful opportunity.",
          "right": "Check whether the process is usable by the people expected to participate.",
          "why": "Formal sameness can coexist with a practical barrier.",
          "fixDistractors": [
            "Assume every unsuccessful applicant was excluded by the form.",
            "Ignore criteria entirely whenever an access issue is raised."
          ],
          "cat": 7,
          "boundary": false
        },
        {
          "id": "u06-l3-transfer",
          "kind": "hypo",
          "say": "Make criteria usable, apply them consistently, and provide a way to correct relevant mistakes.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A shared-space lottery requires entry through a form. A member reports that the submit button does not work with their assistive technology. Staff reproduce the problem before the deadline, and an equally timed alternative entry route is feasible.",
          "call": "Which response repairs participation while preserving the lottery criterion?",
          "rule": "u06-l3-principle",
          "issue": "procedure and correction",
          "transfer": true,
          "boundary": false,
          "callType": "accurate",
          "options": [
            {
              "text": "Give the member a guaranteed winning place without considering the stated lottery.",
              "why": "That changes selection rather than just repairing entry access.",
              "trap": 4
            },
            {
              "text": "Keep the broken route because everyone received the same link.",
              "why": "Identical links do not establish usable participation.",
              "trap": 2
            },
            {
              "text": "Move the deadline earlier so the issue no longer needs handling.",
              "why": "That reduces access instead of addressing the verified barrier.",
              "trap": 10
            },
            {
              "text": "Offer the accessible entry route with the same deadline and lottery treatment.",
              "why": "It removes the verified access barrier without granting a different selection advantage."
            }
          ],
          "answer": 3,
          "facts": [
            "Staff reproduce the problem before the deadline"
          ]
        }
      ]
    },
    {
      "id": "u06l4",
      "title": "Scarcity does not choose the rule",
      "objective": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
      "takeaway": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
      "fieldwork": "For a fictional shortage, separate the resource limit from your proposed allocation rule, and explain one tradeoff of that rule.",
      "items": [
        {
          "id": "u06-l4-principle",
          "kind": "rule",
          "say": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
          "status": "ethics",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "title": "Scarcity does not choose the rule",
          "elements": [
            "Verify the available capacity",
            "State the criterion and why it fits",
            "Acknowledge who waits and how decisions can be reviewed"
          ],
          "distractorElements": [
            "Treat scarcity as a justification for any favored outcome",
            "Call a lottery universally fair in every setting"
          ],
          "ordered": false,
          "ex": [
            {
              "facts": "Three equally eligible applicants seek two identical places under an agreed lottery.",
              "result": "A lottery follows that rule, but the shortage alone did not require choosing a lottery."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A shortage by itself determines whether need, merit, equal chance, or another criterion should be used.",
              "a": false,
              "why": "The resource limit describes feasibility, not the full ethical basis for distribution."
            },
            {
              "t": "mcq",
              "q": "There are four available places and six equally eligible applicants under an agreed equal-chance rule. Which method fits?",
              "options": [
                "A transparent lottery among the six",
                "Let a reviewer choose their four friends",
                "Pretend all six places are available"
              ],
              "a": "A transparent lottery among the six",
              "why": "The agreed criterion is equal chance; the lottery implements it without inventing capacity."
            }
          ],
          "hook": "A lottery follows that rule, but the shortage alone did not require choosing a lottery."
        },
        {
          "id": "u06-l4-concept",
          "kind": "term",
          "say": "A limit that prevents all relevant wants or needs from being fully met with the available resource.",
          "status": "practice",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "term": "Scarcity",
          "meaning": "A limit that prevents all relevant wants or needs from being fully met with the available resource.",
          "use": "Two seats for three eligible people creates a limit; it does not explain which allocation rule is justified.",
          "hook": "Two seats for three eligible people creates a limit; it does not explain which allocation rule is justified.",
          "lang": "english",
          "alt": []
        },
        {
          "id": "u06-l4-case",
          "kind": "hypo",
          "say": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A club has two spare tickets and three equally eligible members. Before names were known, members agreed to a transparent lottery with one entry per person. No priority condition applies.",
          "call": "Which allocation method follows the agreement?",
          "rule": "u06-l4-principle",
          "issue": "scarcity and explicit criteria",
          "transfer": false,
          "boundary": true,
          "callType": "accurate",
          "options": [
            {
              "text": "Give the tickets to the two members the organizer knows best.",
              "why": "Personal familiarity is not the agreed criterion.",
              "trap": 6
            },
            {
              "text": "Give a second entry to the person who asks most often.",
              "why": "That changes the agreed equal-chance rule.",
              "trap": 4
            },
            {
              "text": "Run the agreed one-entry-per-person lottery among all three.",
              "why": "The applicants meet the same eligibility conditions, and the agreed rule is equal chance."
            },
            {
              "text": "Promise all three a ticket and hope someone cancels.",
              "why": "The promise exceeds known capacity without a confirmed alternative.",
              "trap": 3
            }
          ],
          "answer": 2,
          "facts": [
            "No priority condition applies."
          ]
        },
        {
          "id": "u06-l4-contrast",
          "kind": "pairs",
          "say": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "pairs": [
            {
              "l": "Capacity constraint",
              "r": "The available resource limits what can be supplied"
            },
            {
              "l": "Allocation criterion",
              "r": "The reason used to decide who receives the limited resource"
            },
            {
              "l": "Review route",
              "r": "A way to challenge a relevant error in applying that criterion"
            }
          ],
          "mode": "concept"
        },
        {
          "id": "u06-l4-misconception",
          "kind": "trap",
          "say": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A learner sees a lottery used for equal-priority tickets and concludes all limited resources must always be allocated randomly.",
          "wrong": "A lottery is always the fairest method for every shortage.",
          "right": "Choose and justify a criterion that fits the resource, relevant needs, and commitments.",
          "why": "Equal chance can fit one setting while another has relevant differences a lottery would ignore.",
          "fixDistractors": [
            "Replace every lottery with organizer preference.",
            "Treat need as automatically irrelevant whenever there is scarcity."
          ],
          "cat": 7,
          "boundary": true
        },
        {
          "id": "u06-l4-transfer",
          "kind": "hypo",
          "say": "Make the limits and allocation criterion explicit when not everyone can receive the benefit.",
          "status": "fictional",
          "src": "Original course synthesis; Markkula ethical-decision framework and its stated limits",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "speed": false,
          "stem": "A tool library has one replacement charger. Its published priority is restoring access for a member whose borrowed tool otherwise cannot be used. One applicant has no working charger; another has a working spare and wants a second. Both facts are verified.",
          "call": "Which allocation applies this specific priority?",
          "rule": "u06-l4-principle",
          "issue": "scarcity and explicit criteria",
          "transfer": true,
          "boundary": true,
          "callType": "accurate",
          "options": [
            {
              "text": "Give the replacement to the member with no working charger.",
              "why": "That restores the lost access the stated rule prioritizes."
            },
            {
              "text": "Use a lottery because any shortage requires equal chance.",
              "why": "The published rule names a relevant difference in need.",
              "trap": 4
            },
            {
              "text": "Give it to the person with a spare because they applied first.",
              "why": "Arrival order is not the stated priority.",
              "trap": 6
            },
            {
              "text": "Offer it to both simultaneously to avoid making a judgment.",
              "why": "One charger cannot satisfy both promises at the same time.",
              "trap": 2
            }
          ],
          "answer": 0,
          "facts": [
            "Both facts are verified."
          ]
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.ETHICS_UNITS = globalThis.ETHICS_UNITS || []).push(unit);
})();
