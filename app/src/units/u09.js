// Original Everyday Ethics teaching scenarios. Fictional situations; source provenance is per item.
(function () {
  const unit = {
  "id": "u09",
  "title": "Think before you share",
  "blurb": "People remain people when the interaction is digital.",
  "subject": "digital",
  "assume": "These are fictional everyday situations, not legal or professional advice. Use only the stated facts. Scored questions test the stated purpose and conditions; reasonable moral disagreement belongs in reflection.",
  "lessons": [
    {
      "id": "u09l1",
      "title": "A message changes rooms",
      "objective": "Notice how an audience change can alter the meaning and risk of a message.",
      "takeaway": "Check the audience and purpose before moving someone’s words or image into a new setting.",
      "fieldwork": "Using an invented message, compare sharing it with one friend and publishing it to strangers.",
      "items": [
        {
          "kind": "rule",
          "say": "Check the audience and purpose before moving someone’s words or image into a new setting.",
          "status": "ethics",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "Context travels unevenly",
          "elements": [
            "Identify the original audience",
            "Consider what the new audience lacks",
            "Check permission and relevant effects"
          ],
          "distractorElements": [
            "Assume public access means every reuse is harmless",
            "Treat a screenshot as the entire conversation"
          ],
          "ex": [
            {
              "facts": "A joking line from a private team chat appears in a public presentation.",
              "result": "The new audience may miss the relationship, context and expectation of privacy."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A screenshot always includes enough context to judge a conversation.",
              "a": false,
              "why": "It can omit preceding messages, tone and purpose."
            },
            {
              "t": "mcq",
              "q": "Which question matters before forwarding a private voice note?",
              "options": [
                "Will the new listener find it amusing?",
                "Was sharing with this audience understood or agreed?",
                "Can I forward it in one tap?"
              ],
              "a": "Was sharing with this audience understood or agreed?",
              "why": "Convenience does not settle the permission or effects."
            }
          ],
          "hook": "A sentence can change meaning when it changes rooms.",
          "id": "u09-l1-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Moving information from its original recipients to a different group.",
          "status": "practice",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": true,
          "term": "Audience shift",
          "meaning": "Moving information from its original recipients to a different group.",
          "hook": "A family update copied into a public feed reaches people outside its original context.",
          "use": "A family update copied into a public feed reaches people outside its original context.",
          "alt": [],
          "id": "u09-l1-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Check the audience and purpose before moving someone’s words or image into a new setting.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "Mila sends a funny rehearsal recording to three bandmates for feedback. One bandmate wants to post it publicly. Mila has not agreed to publication.",
          "call": "What best addresses the audience change?",
          "options": [
            {
              "text": "Post it because sending implies permission for every use",
              "why": "The original audience and purpose were limited.",
              "trap": 5
            },
            {
              "text": "Ask Mila about public posting and explain where it would appear",
              "why": "This checks the new use before acting."
            },
            {
              "text": "Remove her first name but keep her recognizable face",
              "why": "The person can still be identified.",
              "trap": 2
            },
            {
              "text": "Post it briefly because deletion guarantees no copies",
              "why": "Copies may persist; deletion is not a guarantee.",
              "trap": 3
            }
          ],
          "answer": 1,
          "issue": "audience and purpose",
          "facts": [
            "Mila has not agreed to publication"
          ],
          "id": "u09-l1-case",
          "rule": "u09-l1-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Check the audience and purpose before moving someone’s words or image into a new setting.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "q": "Does this keep the understood audience, or expand it?",
          "buckets": [
            "Within stated audience",
            "Audience expanded"
          ],
          "items": [
            {
              "text": "A draft shared with two editors stays in their review folder.",
              "bucket": "Within stated audience",
              "why": "The recipients match the agreement."
            },
            {
              "text": "A private joke is pasted into a public announcement.",
              "bucket": "Audience expanded",
              "why": "The public was not the original group."
            },
            {
              "text": "A class discussion recording is sent to the registered class as agreed.",
              "bucket": "Within stated audience",
              "why": "The distribution matches the stated scope."
            },
            {
              "text": "A friend’s voice note is played to coworkers without asking.",
              "bucket": "Audience expanded",
              "why": "Coworkers are new listeners."
            },
            {
              "text": "A public flyer is sent to the neighborhood list named on the flyer.",
              "bucket": "Within stated audience",
              "why": "This use matches the published purpose."
            },
            {
              "text": "A limited support-group post is copied to a social feed.",
              "bucket": "Audience expanded",
              "why": "The new setting changes who can receive it."
            }
          ],
          "mode": "contrast",
          "id": "u09-l1-practice"
        },
        {
          "kind": "trap",
          "say": "Check the audience and purpose before moving someone’s words or image into a new setting.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "An old public post is technically accessible. Someone wants to use it in a mocking campaign directed at its author.",
          "wrong": "If information is public, every reuse is harmless.",
          "right": "Consider the new purpose, context and foreseeable effects as well as access.",
          "why": "Availability is a fact about access; it does not settle the ethics of a new use.",
          "fixDistractors": [
            "Assume all public posts must never be quoted.",
            "Treat removing the username as guaranteed anonymity."
          ],
          "cat": 7,
          "id": "u09-l1-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Check the audience and purpose before moving someone’s words or image into a new setting.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A volunteer wants to show a complaint to a designer to fix confusing instructions. The designer needs the confusing wording but not the complainant’s name, address or personal circumstances.",
          "call": "Which version serves the stated purpose with less exposure?",
          "options": [
            {
              "text": "The full complaint and registration record",
              "why": "Those extra details are not needed for the design task.",
              "trap": 9
            },
            {
              "text": "A public post tagging the complainant",
              "why": "That changes the audience and adds exposure.",
              "trap": 9
            },
            {
              "text": "Only the relevant wording with identifying details removed",
              "why": "It gives the designer what the task needs."
            },
            {
              "text": "A fabricated complaint with a stronger claim",
              "why": "That changes the evidence rather than protecting it.",
              "trap": 3
            }
          ],
          "answer": 2,
          "issue": "purpose-limited sharing",
          "facts": [
            "not the complainant’s name, address or personal circumstances"
          ],
          "id": "u09-l1-transfer",
          "rule": "u09-l1-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u09l2",
      "title": "Collect less, protect more",
      "objective": "Match information collection to a defined purpose rather than collecting because it is possible.",
      "takeaway": "Ask what information the task actually needs, who can access it and when it should be removed.",
      "fieldwork": "For a fictional club signup, cross out fields that do not serve the stated purpose.",
      "items": [
        {
          "kind": "rule",
          "say": "Ask what information the task actually needs, who can access it and when it should be removed.",
          "status": "ethics",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "Need is narrower than possibility",
          "elements": [
            "State the specific purpose",
            "Collect only relevant information",
            "Limit access and retention"
          ],
          "distractorElements": [
            "Collect everything just in case",
            "Treat optional fields as mandatory"
          ],
          "ex": [
            {
              "facts": "A walking club needs a contact route to announce cancellations.",
              "result": "It does not need every member’s employer, birth date and home address for that purpose."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Information that is easy to collect is automatically necessary.",
              "a": false,
              "why": "Convenience is not a purpose-based reason."
            },
            {
              "t": "mcq",
              "q": "A room booking needs a name and contact route. Which extra request needs justification?",
              "options": [
                "The booking date",
                "The requested room",
                "Their full birth date without a stated booking need"
              ],
              "a": "Their full birth date without a stated booking need",
              "why": "That information has no stated connection to the booking."
            }
          ],
          "hook": "An empty field can be a form of care.",
          "id": "u09-l2-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Limiting collected and retained information to what a defined purpose needs.",
          "status": "practice",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": true,
          "term": "Data minimization",
          "meaning": "Limiting collected and retained information to what a defined purpose needs.",
          "hook": "A reminder service may need a contact address without needing a complete personal profile.",
          "use": "A reminder service may need a contact address without needing a complete personal profile.",
          "alt": [],
          "id": "u09-l2-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Ask what information the task actually needs, who can access it and when it should be removed.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A book club collects emails to send meeting reminders. A volunteer suggests adding members’ home addresses to the spreadsheet “in case we need them someday.” No address-based activity is planned.",
          "call": "Which question best tests the proposal?",
          "options": [
            {
              "text": "What defined club purpose requires those addresses?",
              "why": "The purpose should establish need before collection."
            },
            {
              "text": "Can the spreadsheet hold more columns?",
              "why": "Technical capacity does not establish necessity.",
              "trap": 6
            },
            {
              "text": "Would the sheet look more complete?",
              "why": "Completeness is not the stated purpose.",
              "trap": 6
            },
            {
              "text": "Can members be persuaded to provide them?",
              "why": "Willingness alone does not explain why the club needs them.",
              "trap": 9
            }
          ],
          "answer": 0,
          "issue": "purpose and necessity",
          "facts": [
            "No address-based activity is planned"
          ],
          "id": "u09-l2-case",
          "rule": "u09-l2-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "pairs",
          "say": "Ask what information the task actually needs, who can access it and when it should be removed.",
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
              "l": "Collection",
              "r": "Obtaining information"
            },
            {
              "l": "Access limit",
              "r": "Restricting who can view information"
            },
            {
              "l": "Retention period",
              "r": "How long information is kept"
            },
            {
              "l": "Purpose statement",
              "r": "The specified reason information is needed"
            },
            {
              "l": "Deletion",
              "r": "Removing information when it no longer needs to be kept"
            }
          ],
          "spare": [
            "Keep every detail forever for convenience"
          ],
          "mode": "concept",
          "id": "u09-l2-practice"
        },
        {
          "kind": "trap",
          "say": "Ask what information the task actually needs, who can access it and when it should be removed.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "An event is over. Organizers promised to use phone numbers only for same-day coordination, and no continuing purpose has been agreed.",
          "wrong": "Keeping the numbers forever is harmless because nobody is using them today.",
          "right": "Review and remove numbers that no longer serve the agreed purpose.",
          "why": "Unused retained information can still be exposed or repurposed later.",
          "fixDistractors": [
            "Send the list to sponsors before deleting it.",
            "Rename the file so the original promise no longer applies."
          ],
          "cat": 7,
          "id": "u09-l2-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Ask what information the task actually needs, who can access it and when it should be removed.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A community workshop needs accommodation requests for one event. The coordinator can handle requests privately. A proposed public attendee sheet would expose every request to all participants.",
          "call": "Which setup meets the need with less disclosure?",
          "options": [
            {
              "text": "Require public posting so everyone can verify need",
              "why": "That adds disclosure unrelated to coordination.",
              "trap": 9
            },
            {
              "text": "Refuse all accommodation requests",
              "why": "That removes access rather than solving the privacy issue.",
              "trap": 10
            },
            {
              "text": "Ask people to use vague hints in the public sheet",
              "why": "Hints can still expose people and may not meet the need.",
              "trap": 2
            },
            {
              "text": "Use a private route to the coordinator and limit details to what is needed",
              "why": "The responsible person can arrange support without broadcasting each request."
            }
          ],
          "answer": 3,
          "issue": "access and purpose",
          "facts": [
            "The coordinator can handle requests privately"
          ],
          "id": "u09-l2-transfer",
          "rule": "u09-l2-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u09l3",
      "title": "The tool cannot own your decision",
      "objective": "Identify what a person must verify before relying on an automated recommendation.",
      "takeaway": "Treat an AI output as a claim to examine, and keep a person responsible for decisions that affect others.",
      "fieldwork": "Review an invented automated recommendation and list the evidence and correction route it would need.",
      "items": [
        {
          "kind": "rule",
          "say": "Treat an AI output as a claim to examine, and keep a person responsible for decisions that affect others.",
          "status": "ethics",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "Responsibility stays with the decision-maker",
          "elements": [
            "Check relevant evidence",
            "Look for omitted context",
            "Keep a human owner and correction route"
          ],
          "distractorElements": [
            "Treat fluent wording as verification",
            "Blame the tool for an unreviewed decision"
          ],
          "ex": [
            {
              "facts": "A tool ranks volunteers using incomplete attendance records.",
              "result": "The organizer checks missing records before using the ranking to allocate places."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A confident explanation proves that an automated recommendation is accurate.",
              "a": false,
              "why": "Confidence in presentation is not independent evidence."
            },
            {
              "t": "mcq",
              "q": "What would help someone challenge an incorrect automated summary?",
              "options": [
                "A clear contact who can inspect and correct it",
                "A longer disclaimer with no contact",
                "A label saying “computer generated” only"
              ],
              "a": "A clear contact who can inspect and correct it",
              "why": "Correction needs an accountable route, not just a label."
            }
          ],
          "hook": "A tool can suggest; a person must answer for the use.",
          "id": "u09-l3-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Human review with the authority and responsibility to question, change and correct a decision.",
          "status": "practice",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "term": "Accountable oversight",
          "meaning": "Human review with the authority and responsibility to question, change and correct a decision.",
          "hook": "A reviewer who cannot change an output is not providing meaningful oversight.",
          "use": "A reviewer who cannot change an output is not providing meaningful oversight.",
          "alt": [],
          "id": "u09-l3-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Treat an AI output as a claim to examine, and keep a person responsible for decisions that affect others.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "An AI summary says a volunteer missed three shifts. The attendance sheet shows two entries belong to another person with the same first name. The coordinator is about to remove the volunteer from the rota.",
          "call": "What should happen before relying on the summary?",
          "options": [
            {
              "text": "Use it because automated summaries are neutral",
              "why": "Automation does not resolve the identified data error.",
              "trap": 5
            },
            {
              "text": "Check and correct the identity mismatch with the relevant records",
              "why": "The specific evidence undermines the summary."
            },
            {
              "text": "Ask the tool to sound less certain but keep the decision",
              "why": "Tone does not repair the mistaken identity.",
              "trap": 10
            },
            {
              "text": "Publish the volunteer’s records so everyone can investigate",
              "why": "That adds unnecessary exposure.",
              "trap": 9
            }
          ],
          "answer": 1,
          "issue": "verification before reliance",
          "facts": [
            "two entries belong to another person"
          ],
          "id": "u09-l3-case",
          "rule": "u09-l3-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "steps",
          "say": "Treat an AI output as a claim to examine, and keep a person responsible for decisions that affect others.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "Check a consequential output",
          "steps": [
            "Locate the relevant underlying evidence",
            "Resolve material mismatches before relying on it",
            "Assign a responsible person and correction route"
          ],
          "distractors": [
            "Treat fluent wording as proof",
            "Remove the appeal route because a model was used"
          ],
          "applyTo": {
            "facts": "You have found that a tool merged two people’s records. A decision has not yet been made.",
            "stop": "Resolve material mismatches before relying on it",
            "why": "The known mismatch affects the basis of the proposed decision."
          },
          "id": "u09-l3-practice"
        },
        {
          "kind": "trap",
          "say": "Treat an AI output as a claim to examine, and keep a person responsible for decisions that affect others.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A manager accepts every tool recommendation instantly and calls this human review. The manager has not inspected the evidence and cannot explain the decisions.",
          "wrong": "A human click is enough to make oversight meaningful.",
          "right": "Give the reviewer time, evidence and authority to question the result.",
          "why": "Oversight requires an actual opportunity to detect and correct errors.",
          "fixDistractors": [
            "Ask the reviewer to click twice instead.",
            "Hide the automated origin so review feels more human."
          ],
          "cat": 5,
          "id": "u09-l3-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Treat an AI output as a claim to examine, and keep a person responsible for decisions that affect others.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A tool drafts an apology for a missed deadline and invents a family emergency. You know the deadline was missed because you scheduled poorly.",
          "call": "Which response preserves responsibility and factual accuracy?",
          "options": [
            {
              "text": "Send it because the tool chose the explanation",
              "why": "You remain responsible for sending a false claim.",
              "trap": 5
            },
            {
              "text": "Replace “family” with “personal” but retain the invented emergency",
              "why": "The central claim remains false.",
              "trap": 5
            },
            {
              "text": "Remove the invented explanation and state the actual issue and repair plan",
              "why": "The draft can be revised to reflect what happened."
            },
            {
              "text": "Say apologies written with tools never count",
              "why": "The relevant issue is truth and responsibility, not tool use alone.",
              "trap": 7
            }
          ],
          "answer": 2,
          "issue": "ownership of assisted communication",
          "facts": [
            "invents a family emergency"
          ],
          "id": "u09-l3-transfer",
          "rule": "u09-l3-rule",
          "transfer": true,
          "callType": "decision"
        }
      ]
    },
    {
      "id": "u09l4",
      "title": "Pause the pile-on",
      "objective": "Separate checking a concern from amplifying an unverified accusation.",
      "takeaway": "Verify what you can, protect relevant context and correct mistakes without creating needless exposure.",
      "fieldwork": "Draft a correction to a fictional post without repeating the private details it exposed.",
      "items": [
        {
          "kind": "rule",
          "say": "Verify what you can, protect relevant context and correct mistakes without creating needless exposure.",
          "status": "ethics",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "title": "Reach is not verification",
          "elements": [
            "Check the original evidence",
            "Separate observation from accusation",
            "Correct proportionately and avoid needless exposure"
          ],
          "distractorElements": [
            "Count reposts as independent confirmation",
            "Repeat private details to criticize their exposure"
          ],
          "ex": [
            {
              "facts": "A clipped video appears to show a volunteer taking supplies.",
              "result": "The full recording shows the volunteer returning borrowed equipment to storage."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Ten reposts of one screenshot are ten independent sources.",
              "a": false,
              "why": "They may all trace back to the same unverified source."
            },
            {
              "t": "mcq",
              "q": "Which step adds relevant evidence to a clipped recording?",
              "options": [
                "Reading more reactions",
                "Finding the original recording and context",
                "Counting how many people are angry"
              ],
              "a": "Finding the original recording and context",
              "why": "Context can change what the recording supports."
            }
          ],
          "hook": "Before passing the spark, check what is burning.",
          "id": "u09-l4-rule",
          "ordered": false
        },
        {
          "kind": "term",
          "say": "Increasing the audience or reach of a message.",
          "status": "practice",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": true,
          "term": "Amplification",
          "meaning": "Increasing the audience or reach of a message.",
          "hook": "A repost can expand a claim’s consequences even when it adds no new evidence.",
          "use": "A repost can expand a claim’s consequences even when it adds no new evidence.",
          "alt": [],
          "id": "u09-l4-term",
          "lang": "english"
        },
        {
          "kind": "hypo",
          "say": "Verify what you can, protect relevant context and correct mistakes without creating needless exposure.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "A cropped screenshot appears to show a coach insulting a player. You have not seen the preceding messages. A friend asks you to repost it with the coach’s private phone number.",
          "call": "Which response avoids adding unsupported accusation and exposure?",
          "options": [
            {
              "text": "Repost with “just asking questions”",
              "why": "That still spreads the accusation and private number.",
              "trap": 5
            },
            {
              "text": "Assume the coach is innocent because context is missing",
              "why": "Missing context does not prove the opposite claim.",
              "trap": 3
            },
            {
              "text": "Post the number but omit the screenshot",
              "why": "The unnecessary exposure remains.",
              "trap": 9
            },
            {
              "text": "Decline to share the number and seek relevant context before making a claim",
              "why": "This separates investigation from amplification."
            }
          ],
          "answer": 3,
          "issue": "verification and exposure",
          "facts": [
            "You have not seen the preceding messages"
          ],
          "id": "u09-l4-case",
          "rule": "u09-l4-rule",
          "transfer": false,
          "callType": "decision"
        },
        {
          "kind": "sort",
          "say": "Verify what you can, protect relevant context and correct mistakes without creating needless exposure.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "q": "What does this action primarily do?",
          "buckets": [
            "Adds relevant evidence",
            "Adds reach without verification"
          ],
          "items": [
            {
              "text": "Find the complete dated announcement.",
              "bucket": "Adds relevant evidence",
              "why": "The original may clarify scope and timing."
            },
            {
              "text": "Forward the same screenshot to five groups.",
              "bucket": "Adds reach without verification",
              "why": "More recipients do not add support."
            },
            {
              "text": "Ask the named organizer to clarify the disputed instruction.",
              "bucket": "Adds relevant evidence",
              "why": "The response may resolve a specific uncertainty."
            },
            {
              "text": "Repost the accusation because it has many likes.",
              "bucket": "Adds reach without verification",
              "why": "Popularity is used to extend the claim’s reach, not to verify it."
            },
            {
              "text": "Compare the claim with the original published record.",
              "bucket": "Adds relevant evidence",
              "why": "The comparison tests the content."
            },
            {
              "text": "Copy an anonymous accusation into a new post.",
              "bucket": "Adds reach without verification",
              "why": "The new post does not independently check the claim."
            }
          ],
          "mode": "contrast",
          "id": "u09-l4-practice"
        },
        {
          "kind": "trap",
          "say": "Verify what you can, protect relevant context and correct mistakes without creating needless exposure.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "You discover your earlier post named the wrong person. You quietly delete it, although several people already shared it.",
          "wrong": "Deletion alone ensures everyone stops relying on the mistake.",
          "right": "Correct the mistaken claim for the audience that saw it, without repeating unnecessary private details.",
          "why": "People who relied on the earlier claim may not notice that it disappeared.",
          "fixDistractors": [
            "Repost the full private record as proof of the correction.",
            "Wait until every copy can be found before correcting anything."
          ],
          "cat": 3,
          "id": "u09-l4-trap",
          "boundary": true
        },
        {
          "kind": "hypo",
          "say": "Verify what you can, protect relevant context and correct mistakes without creating needless exposure.",
          "status": "fictional",
          "src": "ACM Code of Ethics (professional scope); Markkula ethical reasoning framework",
          "sourceIds": [
            "E1",
            "E2",
            "E3"
          ],
          "speed": false,
          "stem": "You shared an incorrect event cancellation. The organizer confirms the event is happening, and your original audience is still reachable in the same group.",
          "call": "Which correction best addresses the reliance you created?",
          "options": [
            {
              "text": "Post a clear correction in that group and link the current event notice",
              "why": "The people affected can revise their plans."
            },
            {
              "text": "Only update your private notes",
              "why": "That does not reach the people who saw the error.",
              "trap": 2
            },
            {
              "text": "Blame the first person who sent it and leave your post unchanged",
              "why": "That does not correct your audience’s information.",
              "trap": 6
            },
            {
              "text": "Announce that all event information is unreliable",
              "why": "The specific correction is known.",
              "trap": 7
            }
          ],
          "answer": 0,
          "issue": "repairing information",
          "facts": [
            "your original audience is still reachable"
          ],
          "id": "u09-l4-transfer",
          "rule": "u09-l4-rule",
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
