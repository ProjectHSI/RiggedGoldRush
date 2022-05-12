var data = {
	"characters": {
	  "character": [
		{
		  "name": "chinaman",
		  "situation": [
			{
			  "id": "1",
  "specialFunc":"",
   "blurb": "You are a peasant famer in China and hear about great wealth being discovered in far off Australia. You consider two options. You could work as indentured labourer (someone who had agreed to work for a particular person for a set time) in Australia as a shepherd, cook or gardener. Or you could take out a loan in China so you can work as part of a group at the gold fields.",
			  "question": "What do you choose?",
			  "image": "chinaman-01",
			  "options": {
				"option": [
				  {
					"text": "Become an indentured labourer.",
					"points": -100,
					"feedback": "This will get you to the gold fields but you will not have time to mine for gold! ",
					"pointsText": "Change your answer to keep your points and for the chance to strike it rich.",
					"action": "change"
				  },
				  {
					"text": "Take out a loan.",
					"points": 0,
					"feedback": "With luck and hard work this could start you on the path to wealth in Australia!",
					"pointsText": "",
					"action": "continue"
					
				  }
				]
			  }
			},
			{
			  "id": "2",
  "specialFunc":"",
   "blurb": "You find out you will need to pay a landing tax. The tax is as expensive as the fare you paid to get to Australia. You could pay the tax and head straight for the goldfields. Or you could go to the next colony, where there is no tax, and walk overland to the goldfields. ",
			  "question": "What do you choose?",
			  "image": "chinaman-02",
			  "options": {
				"option": [
				  {
					"text": "Pay the tax.",
					"points": 20,
					"feedback": "The gold fields were next door.",
					"pointsText": "Gain 20 points for getting to the goldfields quickly.",
					"action": "continue"
				  },
				  {
					"text": "Walk overland and avoid the tax.",
					"points": 10,
					"feedback": "Gain 10 points for avoiding the tax. Lose 10 points for the delay in getting to the gold fields.",
					"pointsText": "",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "3",
  "specialFunc":"",
   "blurb": "There are many different nationality groups at the gold fields. You could stay with your own group from China or mix with other nationalities.",
			  "question": "What do you choose?",
			  "image": "chinaman-03",
			  "options": {
				"option": [
				  {
					"text": "Stay with my own group.",
					"points": 50,
					"feedback": "Sharing language and customs will make life easier for you.",
					"pointsText": "Gain 50 points.",
					"action": "continue"
				  },
				  {
					"text": "Try to mix with other nationalities.",
					"points": -10,
					"feedback": "Language, cultural differences and racial prejudice makes your life difficult.",
					"pointsText": "Lose 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "4",
  "specialFunc":"",
   "blurb": "You set up your camp. Some miners nearby are unfriendly to you, others are curious. You could stay in your group or try to make friends.",
			  "question": "What do you choose?",
			  "image": "chinaman-04",
			  "options": {
				"option": [
				  {
					"text": "Try to make friends.",
					"points": 10,
					"feedback": "This may be successful or you may encounter insults or hostility by mixing with other miners.",
					"pointsText": "Gain 10 points for good intentions.",
					"action": "continue"
				  },
				  {
					"text": "Avoid all other miners as much as possible.",
					"points": 10,
					"feedback": "This is possibly a sensible approach. You do not want to antagonise any hostile, racist miners.",
					"pointsText": "Gain 10 points for being cautious.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "5",
  "specialFunc":"",
   "blurb": "Miners have already found most of the surface, or alluvial gold. People are still finding small specks of gold but no one is finding large nuggets anymore. --- Many are now turning to âdeep sinkingâ. This involves digging deep shafts in the hope of coming across a gold seam.",
			  "question": "What do you choose?",
			  "image": "chinaman-05",
			  "options": {
				"option": [
				  {
					"text": "Sift through the dug soil to find the small specks.",
					"points": 10,
					"feedback": "A wise choice. If you work as a group, you will be able to find all the small specks that no one else is looking for.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  },
				  {
					"text": "Dig deep shafts and hope to find a gold seam.",
					"points": 500,
					"feedback": "You found a huge gold seem!.",
					"pointsText": "Gain 500 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "6",
  "specialFunc":"",
   "blurb": "A new goldfield has opened and miners are rushing there. You could join the rush as the first people in are usually the most successful. Or you could stay where you are and have less competition.",
			  "question": "What do you choose?",
			  "image": "chinaman-06",
			  "options": {
				"option": [
				  {
					"text": "Go to the new rush.",
					"points": 20,
					"feedback": "A good decision, this gives you a chance to find the easy gold.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Stay where you are.",
					"points": 500,
					"feedback": "Another huge gold seam you found! In your current one!",
					"pointsText": "Gain 500 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "7",
  "specialFunc":"",
   "blurb": "There is a threat of violence toward the Chinese from some of the other miners. It may come to nothing but you cannot be certain. --- Will you stay and trust the other miners to keep the violent few in order, or will you  move and try to avoid any violence?",
			  "question": "What do you choose (Gur fcvaare qbrf abguvat sbe bcgvba o, qb bcgvba n sbe ab ivbyrapr!)?",
			  "image": "chinaman-07",
			  "options": {
				"option": [
				  {
					"text": "Stay, and hope that everything is okay.",
					"points": 0,
					"feedback": "Letâs hope all is well.",
					"pointsText": "Spin to find out.",
					"action": "spin",
					"spinner": {
						"result": [
						  {
							"range": "1,2,3,4,5,6,7,8,9",
							"points": 10,
							"feedback": "You are OK.",
							"pointsText": "Gain 10 points.",
							"action": "continue"
						  },
						  {
							"range": "10",
							"points": 0,
							"feedback": "Unlucky! These was no violence but the miners did create a hole in the bucket, oh well!",
							"pointsText": "",
							"action": "continue"
						  },
						]
					  }
				  },
				  {
					"text": "Leave for another field.",
					"points": 0,
					"feedback": "Moving means you will have to stop mining and so you will lose money.  There may also be violent people in the new place.",
					"pointsText": "Spin to find out.",
					"action": "spin",
					 "spinner": {
					   "result": [
						  {
							"range": "1,2,3,4,5,6,7,8,9",
							"points": -30,
							"feedback": "The miners demand you move back! There is violence.",
							"pointsText": "Lose 30 points.",
							"action": "continue"
						  },
						  {
							"range": "10",
							"points": -30,
							"feedback": "There is violence.",
							"pointsText": "Lose 30 points.",
							"action": "continue"
						  },
						]
					  }
				  }
				]
			  }
			},
			{
			  "id": "8",
  "specialFunc":"",
   "blurb": "Congratulations, you have been mining for one year. --- Have you been lucky?",
			  "question": "Spin to find out.",
			  "image": "chinaman-08",
			  "spinner": {
				"result": [
				  {
					"range": "1,2",
					"points": 500,
					"feedback": "You have struck it rich!",
					"pointsText": "Gain 500 points!",
					"action": "continue"
				  },
				  {
					"range": "3,4,5,6,7,8",
					"points": 100,
					"feedback": "You have found enough gold to be comfortable.",
					"pointsText": "Gain 100 points.",
					"action": "continue"
				  },
				  {
					"range": "9,10",
					"points": 0,
					"feedback": "glitchy",
					"pointsText": "Lose 100 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "9",
  "specialFunc":"",
   "blurb": "Chinese communities are starting to develop on and near the goldfields. --- You can stay and be part of this development, or you can go home, pay off your debt, and improve your life back in China.",
			  "question": "What do you choose?",
			  "image": "chinaman-09",
			  "options": {
				"option": [
				  {
					"text": "Return to China.",
					"points": -5000,
					"feedback": "The game is over for you but find out what might have happened had you decided to stay in Australia.",
					"pointsText": "",
					"action": "change"
				  },
				  {
					"text": "Stay in the new community.",
					"points": 20,
					"feedback": "A good choice. You want to contribute to the new society.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "10",
  "specialFunc":"",
   "blurb": "You have decided to stay in Australia. You can maintain your Chinese culture or you can adopt Western ways.",
			  "question": "What do you choose?",
			  "image": "chinaman-10",
			  "options": {
				"option": [
				  {
					"text": "Maintain Chinese culture.",
					"points": 10,
					"feedback": "An understandable choice. You are comfortable with your own culture.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  },
				  {
					"text": "Adopt Western ways.",
					"points": 50,
					"feedback": "People who change and adapt are very brave. And they gave you a tiny bit of gold.",
					"pointsText": "Gain 50 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "11",
  "specialFunc":"",
   "blurb": "You are ready to start a family but there are no Chinese women for you to marry. --- You can bring a suitable person out from China, or you can look in the local community for a partner.",
			  "question": "What do you choose?",
			  "image": "chinaman-11",
			  "options": {
				"option": [
				  {
					"text": "Bring out a Chinese bride.",
					"points": 10,
					"feedback": "An understandable choice.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  },
				  {
					"text": "Marry a local woman.",
					"points": 50,
					"feedback": "The woman had some nice gold!",
					"pointsText": "Gain 50 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "12",
  "specialFunc":"",
   "blurb": "In your local community, there is little prejudice against the Chinese but the âWhite Australiaâ policy is developing and it has a number of intentions that will prejudice Chinese and other non-European people. --- Will you leave or stay? ",
			  "question": "What do you choose?",
			  "image": "chinaman-12",
			  "options": {
				"option": [
				  {
					"text": "Become an Australian citizen and stay in the new community that grew up around the goldfield.",
					"points": 30,
					"feedback": "A strong citizenship commitment.",
					"pointsText": "Gain 30 points.",
					"action": "continue"
				  },
				  {
					"text": "Return to China.",
					"points": 10,
					"feedback": "An understandable decision to protect yourself and your family.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
		  ],
		  "results": [
			  {
				  "text":"I-. How did you lose I made this r̵̨̛̛͍̄̆̇̾̋̎̌̓̅̈́͗͆̓̅͗̈́̑̃̊̿͌͒͌̀͂̏́̎͐̿͛̈̆̃͒͂̄̒̿̓̎̃̐̔͘ị̵̡̢̡̡̘̠͕͖͕̰̱̹͉͎͉̲̰͈̫͓͔̠̪̣̠͕͕͈̺͇̜̫̬̗̺͈̱͓͖͉͉͉̭̦̏̿͑̈͒̑͐̄̓͂̿͋̔͂̄̊̅͊̽̀̂̎̾́̀̓̊̾̓͐͒̈́̽̆̍̆͘̕̚̕ͅͅǵ̶̮̖͗͐͐̐́̽̊̓̓̅̑̎͂̔͛̑̈́́̈́͑̒̈́͐̀͐͗̂̕̚͘̕̚͝͠ģ̵̡̧̨̛͖̦̙̮͇̬̠̝̟̠͓̹̼͓͇̭̙̥͚̻͎͙͓̯̥̹͓̯͍̻̗̗͇̖̣̬̭̈̂͐̾̊̀͑͊̿̚̚͝ͅͅǧ̸̨̧̛̫̭̩̰̯̲͔͎͎̤͍̗͇̭̼̮͖̽͑̊̒̏̔̈́̄̏́̍͐́̍̄̀̊̄͊͋̓̾̏̓͆̎̓̊̍͒͗̂̕̕̕ͅͅę̴̨̨͕̘̜͔͇̼̣̥͍̙͔̞͖̜̘̥̥͍͖͖̰͚͎̟̤̦̼̳̫̦̳͚̤̖͖̤̪̾́̓͆̀͜͜͜ḑ̴̡̨̨̨̛̣̻̥̰̟͎̼̗̝̝̪̮͓̜͕̤̹̣̣̬͚̰͙͉̠̞̙̆̄̓̐̽̄̂̃̀̀̄̆͌͋̓͋͊͌̆̈́̑̑̓̅̌̔̚͜͝͝͝ ̸̢̛͍̩͖̙̼͔̘̩̤͔̯̱͙̙͚̟͎̻̈̂̋̔̃̌͂̋̉̎͐̈́̿͛͋̉̅̍͌͐̽̅̽̇̊̽̓͌̽̔̚̕͜͝͝͠f̷̢̡͇̳̬͚̹̟̦̩͈̬̫̤͉̖̺̯̙̜͓̩̖̝͒͌͗͗̀͌͊̒̒̑̓̆̊͆̌͂̇̀̽͊͛̕ǒ̴̢̢̨̨̨̨̥͙͍͕͖̤̺̺̻͍͔͙̦̙͚̘̤̘̜̹̩̝͉̉̓͗̓̐̃̔̾̌͊͂̈̓̇̍̒̍̈́̃͋̋̿̔͛̂́̋̂̀̀̽̃̓̅͘͜͝͝͝r̷̨̢̧͈͔̟͎͇̞͙͍̩͇̻̭͈̞̮̦̹̰̰̜̦͉̭̤̘͔͒́̆̎̀̌͆̓́͌͂̍̾͂̒̓́̉̈́̓̃̀̋̔̍́͐̀̍̀̔́͋̅̑̈̈́̾̌̋̿͌̾͌̚͘͝ ̶̧̧̢̧̨̢̛͈͉͖̠͉͇̝̠̜̝͈̣̹̗̝̪͉̠̱̖̗̱̝̯̟͓̺̼̬̺̙̣̫̩͍͇͂̌͌̌̓̓́͆̿͗̒̔͘̕̕͜͠ÿ̴̛̼̹̰̟̞̟͉̟͈̣͇͆̈́͂̋̾́͒̔͒̾̉̄̏̑̔̈͋́̕͘͠͝o̵̙̻̩͆̽́̉̋͑̇̀́͆̽̾͐͛̽̈͌͑̈́́̿̆͛̈̉̏̍̀̂̆̃̍̉̓̓͛̑͗̑̋̕͝u̴̖̲͉͕̣̱̦͕͊̿̐̈́̆͑͜!̴͔̆̓͛̾̎͋̐͘͝-̴̨̢̡̠̯̯̮͚̥̣̫͖̥͈̱͕̻̼̦͔̘̝̝̣̺̱̤̠͓̖̖͚̦͇͉̹̘̝̘̳̙̗͖̩͓̳̽̌͒̐̇͑͛̉̑̈́̍̍̈́̉͐́̒̃͑͆͐̅̒͋͂̈̽̿͂̉́̏̀̆̑́̂͒͑͆̉͛͘̕̕͜͠"
			  },
			  {
				  "text":"I-. How did you lose I made this r̵̨̛̛͍̄̆̇̾̋̎̌̓̅̈́͗͆̓̅͗̈́̑̃̊̿͌͒͌̀͂̏́̎͐̿͛̈̆̃͒͂̄̒̿̓̎̃̐̔͘ị̵̡̢̡̡̘̠͕͖͕̰̱̹͉͎͉̲̰͈̫͓͔̠̪̣̠͕͕͈̺͇̜̫̬̗̺͈̱͓͖͉͉͉̭̦̏̿͑̈͒̑͐̄̓͂̿͋̔͂̄̊̅͊̽̀̂̎̾́̀̓̊̾̓͐͒̈́̽̆̍̆͘̕̚̕ͅͅǵ̶̮̖͗͐͐̐́̽̊̓̓̅̑̎͂̔͛̑̈́́̈́͑̒̈́͐̀͐͗̂̕̚͘̕̚͝͠ģ̵̡̧̨̛͖̦̙̮͇̬̠̝̟̠͓̹̼͓͇̭̙̥͚̻͎͙͓̯̥̹͓̯͍̻̗̗͇̖̣̬̭̈̂͐̾̊̀͑͊̿̚̚͝ͅͅǧ̸̨̧̛̫̭̩̰̯̲͔͎͎̤͍̗͇̭̼̮͖̽͑̊̒̏̔̈́̄̏́̍͐́̍̄̀̊̄͊͋̓̾̏̓͆̎̓̊̍͒͗̂̕̕̕ͅͅę̴̨̨͕̘̜͔͇̼̣̥͍̙͔̞͖̜̘̥̥͍͖͖̰͚͎̟̤̦̼̳̫̦̳͚̤̖͖̤̪̾́̓͆̀͜͜͜ḑ̴̡̨̨̨̛̣̻̥̰̟͎̼̗̝̝̪̮͓̜͕̤̹̣̣̬͚̰͙͉̠̞̙̆̄̓̐̽̄̂̃̀̀̄̆͌͋̓͋͊͌̆̈́̑̑̓̅̌̔̚͜͝͝͝ ̸̢̛͍̩͖̙̼͔̘̩̤͔̯̱͙̙͚̟͎̻̈̂̋̔̃̌͂̋̉̎͐̈́̿͛͋̉̅̍͌͐̽̅̽̇̊̽̓͌̽̔̚̕͜͝͝͠f̷̢̡͇̳̬͚̹̟̦̩͈̬̫̤͉̖̺̯̙̜͓̩̖̝͒͌͗͗̀͌͊̒̒̑̓̆̊͆̌͂̇̀̽͊͛̕ǒ̴̢̢̨̨̨̨̥͙͍͕͖̤̺̺̻͍͔͙̦̙͚̘̤̘̜̹̩̝͉̉̓͗̓̐̃̔̾̌͊͂̈̓̇̍̒̍̈́̃͋̋̿̔͛̂́̋̂̀̀̽̃̓̅͘͜͝͝͝r̷̨̢̧͈͔̟͎͇̞͙͍̩͇̻̭͈̞̮̦̹̰̰̜̦͉̭̤̘͔͒́̆̎̀̌͆̓́͌͂̍̾͂̒̓́̉̈́̓̃̀̋̔̍́͐̀̍̀̔́͋̅̑̈̈́̾̌̋̿͌̾͌̚͘͝ ̶̧̧̢̧̨̢̛͈͉͖̠͉͇̝̠̜̝͈̣̹̗̝̪͉̠̱̖̗̱̝̯̟͓̺̼̬̺̙̣̫̩͍͇͂̌͌̌̓̓́͆̿͗̒̔͘̕̕͜͠ÿ̴̛̼̹̰̟̞̟͉̟͈̣͇͆̈́͂̋̾́͒̔͒̾̉̄̏̑̔̈͋́̕͘͠͝o̵̙̻̩͆̽́̉̋͑̇̀́͆̽̾͐͛̽̈͌͑̈́́̿̆͛̈̉̏̍̀̂̆̃̍̉̓̓͛̑͗̑̋̕͝u̴̖̲͉͕̣̱̦͕͊̿̐̈́̆͑͜!̴͔̆̓͛̾̎͋̐͘͝-̴̨̢̡̠̯̯̮͚̥̣̫͖̥͈̱͕̻̼̦͔̘̝̝̣̺̱̤̠͓̖̖͚̦͇͉̹̘̝̘̳̙̗͖̩͓̳̽̌͒̐̇͑͛̉̑̈́̍̍̈́̉͐́̒̃͑͆͐̅̒͋͂̈̽̿͂̉́̏̀̆̑́̂͒͑͆̉͛͘̕̕͜͠"
			  },
			  {
				  "text":"Well done, you are financially better off that when you started. Some Chinese survived and thrived but many did not."
			  },
			  {
				  "text":"Congratulations! You made it rich on the goldfields! Some Chinese survived and thrived but many did not."
			  }
		  ],
		  "moreInfo": [
			  {
				  "label":"James Ah Oun",
				  "url":"http://wiki.prov.vic.gov.au/index.php/James_Ah_Oun_Prisoner_Number_7911_%2824597%29"
			  },
			  {
				  "label":"",
				  "url":""
			  }
			  
			]
		},
		{
		  "name": "brit",
		  "situation": [
			{
			  "id": "1",
  "specialFunc":"",
   "blurb": "You are a British man lured to Australia by the promise of getting rich on the goldfields. You paid an expensive fare to get out on the first ship available. You are now at the wharf, just 150 km from the goldfields. You will have the best chance of success if you join a group. ",
			  "question": "What do you choose?",
			  "image": "brit-01",
			  "options": {
				"option": [
				  {
					"text": "Join a group now.",
					"points": 100,
					"feedback": "Apparently new miners get gold in this group? That's good sharing though.",
					"pointsText": "Gain 100 points.",
					"action": "continue"
				  },
				  {
					"text": "Wait and join a group when you get to the goldfields.",
					"points": 10,
					"feedback": "That could work. You do not know these people but you will be able to see what their mining skills are like. ",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "2",
  "specialFunc":"",
   "blurb": "You need supplies for the goldfields â clothes, equipment, transport and food. There is much competition and prices are on the rise! You can get supplies in the city and carry them to the goldfields, or wait and stock up when you get there.",
			  "question": "What do you choose?",
			  "image": "brit-02",
			  "options": {
				"option": [
				  {
					"text": "Buy goods and equipment in town.",
					"points": -10,
					"feedback": "Goods are expensive and you have to pay more to transport them.",
					"pointsText": "Lose 10 points.",
					"action": "continue"
				  },
				  {
					"text": "Buy goods and equipment at the goldfields.",
					"points": 10,
					"feedback": "Wait they bought extra goods for me?",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "3",
  "specialFunc":"",
   "blurb": "You have reached the goldfields. You can pan for gold or dig a mine shaft. Panning is relatively cheap and easy but there is not a lot of surface gold left. --- Digging a mine shaft is slower and more expensive but you may find a gold seam and strike it rich. ",
			  "question": "What do you choose?",
			  "image": "brit-03",
			  "options": {
				"option": [
				  {
					"text": "Pan for gold.",
					"points": 50,
					"feedback": "There's one last gold seam there...!",
					"pointsText": "Gain 50 points.",
					"action": "continue"
				  },
				  {
					"text": "Dig a mine shaft.",
					"points": -10,
					"feedback": "This is slow going and you will not have any income while you sink the shaft.  ",
					"pointsText": "Lose 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "4",
  "specialFunc":"",
   "blurb": "You are in a small group. You notice many other groups are banding together. This gives them a bigger area to sink their shafts but it also increases the number of people who will share in any finds. --- You could stay in a small group or join a bigger group.",
			  "question": "What do you choose?",
			  "image": "brit-04",
			  "options": {
				"option": [
				  {
					"text": "Stay small and have a bigger share of the gold.",
					"points": 40,
					"feedback": "You found some gold. Nice!",
					"pointsText": "Gain 40 points.",
					"action": "continue"
				  },
				  {
					"text": "Go bigger and have a larger area to mine.",
					"points": 10,
					"feedback": "This gives you a better chance of finding gold, but reduces your potential share.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "5",
			  "specialFunc":"",
			   "blurb": "You need a licence to mine. The licenses are expensive and your funds are low.  You could mine without a licence but the police will arrest and fine you if they find out. ",
			  "question": "What do you choose?",
			  "image": "brit-05",
			  "options": {
				"option": [
				  {
					"text": "Buy a licence.",
					"points": -10,
					"feedback": "That will cost you money, but you are safe from arrest.",
					"pointsText": "Lose 10 points.",
					"action": "buyLicence"
				  },
				  {
					"text": "Risk it and mine without a licence.",
					"points": 20,
					"feedback": "That saves you money, but you might be arrested.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "6",
			  "specialFunc":"noLicence",
			   "blurb": "The police come to the goldfields to conduct a licence hunt!  A mounted policeman approaches you.",
			  "question": "",
			  "image": "brit-06",
			  "options": {
				"option": [
				  {
					"text": "You have a licence.",
					"points": 10,
					"feedback": "You are okay.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  },
				  {
					"text": "You do not have a licence. ",
					"points": -40,
					"feedback": "You have to pay a fine.",
					"pointsText": "Lose 40 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "7",
  "specialFunc":"",
   "blurb": "A friend is going to set up a supplies store. He asks you to invest in it. It will cost a lot of money but there is a steady demand for goods from the miners. ",
			  "question": "What do you choose?",
			  "image": "brit-07",
			  "options": {
				"option": [
				  {
					"text": "Invest in the store.",
					"points": 5000,
					"feedback": "Wait this is a Big W?",
					"pointsText": "Lose 20 points. However, it gives you a steady income. Gain 5020 points.",
					"action": "continue"
				  },
				  {
					"text": "Save your money.",
					"points": 0,
					"feedback": "Aww man that store was a Big W!",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "8",
  "specialFunc":"",
   "blurb": "Unrest is building on the goldfields. Miners are angry about corruption amongst officials, the harsh treatment of miners by police, and the prohibitive cost of licences. --- Some miners call for the burning of licenses, as a protest and they want miners to swear allegiance to a new flag. This is a serious threat to the goldfield authorities. --- While you agree with the minersâ views, you know siding with them may be dangerous.",
			  "question": "What do you choose?",
			  "image": "brit-08",
			  "options": {
				"option": [
				  {
					"text": "Burn your license and swear allegiance to the new flag.",
					"points": 20,
					"feedback": "The miners give you gold for your participation.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Keep well away from the troublemakers.",
					"points": 0,
					"feedback": "An understandable decision. You are protecting yourself.",
					"pointsText": "No points lost for this decision.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "9",
  "specialFunc":"",
   "blurb": "The protesting miners are aware their actions will provoke the authorities. To protect themselves they build a stockade. They ask you to join them.",
			  "question": "What do you choose?",
			  "image": "brit-09",
			  "options": {
				"option": [
				  {
					"text": "Join them in the stockade.",
					"points": 20,
					"feedback": "All is quiet, there is no threat from anyone. The miners give you gold for your participation.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Avoid the stockade and any association with the miners.",
					"points": 0,
					"feedback": "You are keeping away from trouble.",
					"pointsText": "There are no harmful consequences for this decision.",
					"action": "dontJoinStockade"
				  }
				]
			  }
			},
			{
			  "id": "10",
			  "specialFunc":"hasStockade",
			  "blurb": "It is Saturday night and authorities attack the stockade. Violence breaks out. Many people are wounded. Some are killed.",
			  "question": "Spin to find out your fate.",
			  "image": "brit-10",
				"spinner": {
					"result": [
					  {
						"range": "1,2,3,4,5,6,7,8,9,10",
						"points": -1000000000,
						"feedback": "You are safe. Nah JK you're dead",
						"pointsText": "You received the death penalty hom am I suppos-",
						"action": "continue"
					  }
					]
				  } 
			},
			{
			  "id": "11",
  "specialFunc":"",
   "blurb": "Congratulations, you have been mining for one year. Have you been lucky?",
			  "question": "Spin to find out.",
			  "image": "brit-11",
			  "spinner": {
				"result": [
				  {
					"range": "1,2",
					"points": 500,
					"feedback": "You have struck it rich!",
					"pointsText": "Gain 500 points!",
					"action": "continue"
				  },
				  {
					"range": "3,4,5,6,7,8",
					"points": 200,
					"feedback": "You have found enough gold to be comfortable. ",
					"pointsText": "Gain 200 points.",
					"action": "continue"
				  },
				  {
					"range": "9,10",
					"points": 0,
					"feedback": "Hole in the boat",
					"pointsText": "",
					"action": "continue"
				  }
				]
			   }
			},
			{
			  "id": "12",
  "specialFunc":"",
   "blurb": "It is time to decide if you will stay in Australia or return to Britain.",
			  "question": "What do you choose?",
			  "image": "brit-12",
			  "options": {
				"option": [
				  {
					"text": "Stay in Australia, in the new community that grew up around the goldfield.",
					"points": 20,
					"feedback": "A good decision, you are committed to the new community.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Return to Britain.",
					"points": 10,
					"feedback": "A good decision. It is time to go back to your family.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  }
				]
			  }
			}
		  ],
		  "results": [
			  {
				  "text":"You shouldn't have participated in the stockade.",
			  },
			  {
				  "text":"I-. How did you lose I made this r̵̨̛̛͍̄̆̇̾̋̎̌̓̅̈́͗͆̓̅͗̈́̑̃̊̿͌͒͌̀͂̏́̎͐̿͛̈̆̃͒͂̄̒̿̓̎̃̐̔͘ị̵̡̢̡̡̘̠͕͖͕̰̱̹͉͎͉̲̰͈̫͓͔̠̪̣̠͕͕͈̺͇̜̫̬̗̺͈̱͓͖͉͉͉̭̦̏̿͑̈͒̑͐̄̓͂̿͋̔͂̄̊̅͊̽̀̂̎̾́̀̓̊̾̓͐͒̈́̽̆̍̆͘̕̚̕ͅͅǵ̶̮̖͗͐͐̐́̽̊̓̓̅̑̎͂̔͛̑̈́́̈́͑̒̈́͐̀͐͗̂̕̚͘̕̚͝͠ģ̵̡̧̨̛͖̦̙̮͇̬̠̝̟̠͓̹̼͓͇̭̙̥͚̻͎͙͓̯̥̹͓̯͍̻̗̗͇̖̣̬̭̈̂͐̾̊̀͑͊̿̚̚͝ͅͅǧ̸̨̧̛̫̭̩̰̯̲͔͎͎̤͍̗͇̭̼̮͖̽͑̊̒̏̔̈́̄̏́̍͐́̍̄̀̊̄͊͋̓̾̏̓͆̎̓̊̍͒͗̂̕̕̕ͅͅę̴̨̨͕̘̜͔͇̼̣̥͍̙͔̞͖̜̘̥̥͍͖͖̰͚͎̟̤̦̼̳̫̦̳͚̤̖͖̤̪̾́̓͆̀͜͜͜ḑ̴̡̨̨̨̛̣̻̥̰̟͎̼̗̝̝̪̮͓̜͕̤̹̣̣̬͚̰͙͉̠̞̙̆̄̓̐̽̄̂̃̀̀̄̆͌͋̓͋͊͌̆̈́̑̑̓̅̌̔̚͜͝͝͝ ̸̢̛͍̩͖̙̼͔̘̩̤͔̯̱͙̙͚̟͎̻̈̂̋̔̃̌͂̋̉̎͐̈́̿͛͋̉̅̍͌͐̽̅̽̇̊̽̓͌̽̔̚̕͜͝͝͠f̷̢̡͇̳̬͚̹̟̦̩͈̬̫̤͉̖̺̯̙̜͓̩̖̝͒͌͗͗̀͌͊̒̒̑̓̆̊͆̌͂̇̀̽͊͛̕ǒ̴̢̢̨̨̨̨̥͙͍͕͖̤̺̺̻͍͔͙̦̙͚̘̤̘̜̹̩̝͉̉̓͗̓̐̃̔̾̌͊͂̈̓̇̍̒̍̈́̃͋̋̿̔͛̂́̋̂̀̀̽̃̓̅͘͜͝͝͝r̷̨̢̧͈͔̟͎͇̞͙͍̩͇̻̭͈̞̮̦̹̰̰̜̦͉̭̤̘͔͒́̆̎̀̌͆̓́͌͂̍̾͂̒̓́̉̈́̓̃̀̋̔̍́͐̀̍̀̔́͋̅̑̈̈́̾̌̋̿͌̾͌̚͘͝ ̶̧̧̢̧̨̢̛͈͉͖̠͉͇̝̠̜̝͈̣̹̗̝̪͉̠̱̖̗̱̝̯̟͓̺̼̬̺̙̣̫̩͍͇͂̌͌̌̓̓́͆̿͗̒̔͘̕̕͜͠ÿ̴̛̼̹̰̟̞̟͉̟͈̣͇͆̈́͂̋̾́͒̔͒̾̉̄̏̑̔̈͋́̕͘͠͝o̵̙̻̩͆̽́̉̋͑̇̀́͆̽̾͐͛̽̈͌͑̈́́̿̆͛̈̉̏̍̀̂̆̃̍̉̓̓͛̑͗̑̋̕͝u̴̖̲͉͕̣̱̦͕͊̿̐̈́̆͑͜!̴͔̆̓͛̾̎͋̐͘͝-̴̨̢̡̠̯̯̮͚̥̣̫͖̥͈̱͕̻̼̦͔̘̝̝̣̺̱̤̠͓̖̖͚̦͇͉̹̘̝̘̳̙̗͖̩͓̳̽̌͒̐̇͑͛̉̑̈́̍̍̈́̉͐́̒̃͑͆͐̅̒͋͂̈̽̿͂̉́̏̀̆̑́̂͒͑͆̉͛͘̕̕͜͠",
			  },
			  {
				  "text":"Well done, you are financially better off that when you started. Many miners struck out, some prospered, some strove to achieve democratic ideals.",
			  },
			  {
				  "text":"Congratulations! You made it rich on the goldfields! Many miners struck out, some prospered, some strove to achieve democratic ideals.",
			  }
		  ],
		  "moreInfo": [
			  {
				  "label":"Mining and Migration",
				  "url":"http://www.nma.gov.au/kspace/teachers/goldfields/learning/victoria"
			  },
			  {
				  "label":"",
				  "url":""
			  }
			]
		},
		{
		  "name": "woman",
		  "situation": [
			{
			  "id": "1",
  "specialFunc":"",
   "blurb": "You are a woman with a husband and two children. Your husband decides that he is going to try his luck on the goldfields. You and the children can go with him or stay at home.",
			  "question": "What do you choose?",
			  "image": "woman-01",
			  "options": {
				"option": [
				  {
					"text": "Stay at home.",
					"points": 0,
					"feedback": "An understandable choice but the game is now over for you.",
					"pointsText": "Would you like to choose again?",
					"action": "change"
				  },
				  {
					"text": "Go to the goldfields.",
					"points": 0,
					"feedback": "A brave choice.",
					"pointsText": "Good luck!",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "2",
  "specialFunc":"",
   "blurb": "You arrive at the goldfields. Your most important job is to look after your family.",
			  "question": "Will you search for gold too?",
			  "image": "woman-02",
			  "options": {
				"option": [
				  {
					"text": "Look after the family only.",
					"points": 10,
					"feedback": "This will help your family live successfully.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
					
				  },
				  {
					"text": "Look after the family and search for gold.",
					"points": 20,
					"feedback": "You will work hard but now you have the chance of finding gold.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "3",
  "specialFunc":"",
   "blurb": "The goldfields are not healthy environments. The sanitation is poor, food spoils easily, and water is often contaminated.  Many people on the goldfields become ill. --- Will you and your family stay healthy? ",
			  "question": "Spin to see",
			  "image": "woman-03",
			  "spinner": {
				"result": [
				  {
					"range": "1,2,3,4,5,6,7,8",
					"points": 0,
					"feedback": "You are in luck. You and your family stay healthy.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  },
				  {
					"range": "9,10",
					"points": 0,
					"feedback": "Thank god Medicare existed a̶n̶d̶ ̶w̶a̶s̶n̶'̶t̶ ̶a̶b̶o̶u̶t̶ ̶t̶o̶ ̶b̶e̶ ̶s̶l̶a̶u̶g̶h̶t̶e̶r̶e̶d̶ ̶b̶y̶ ̶t̶h̶e̶ ̶L̶i̶b̶e̶r̶a̶l̶&̶N̶a̶t̶i̶o̶n̶a̶l̶ ̶p̶a̶r̶t̶y̶.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  },
				  
				]
			  }
			},
			{
			  "id": "4",
  "specialFunc":"",
   "blurb": "You could work for other miners who do not have wives to wash and cook for them.",
			  "question": "What do you choose?",
			  "image": "woman-04",
			  "options": {
				"option": [
				  {
					"text": "Take on the extra work.",
					"points": 100,
					"feedback": "A good decision. This will bring in extra income as well as helping the community. The miners also give their gold for supporting them.",
					"pointsText": "Gain 100 points.",
					"action": "continue"
				  },
				  {
					"text": "Only cook and wash for your own family.",
					"points": 10,
					"feedback": "A good decision. You are focusing your energies on supporting your family.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "5",
  "specialFunc":"",
   "blurb": "You are considering opening a refreshments tent for the miners. --- This will be extra work but it will earn you money. You will come into regular contact with miners, many of whom are very rough. ",
			  "question": "What do you choose?",
			  "image": "woman-05",
			  "options": {
				"option": [
				  {
					"text": "Set up a refreshment tent. The miners also give their gold for supporting them.",
					"points": 100,
  
					"feedback": "A good decision. People always need food and drink.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Decide against setting up a refreshment tent.",
					"points": -10,
					"feedback": "This will allow you to keep mining and supporting your family, but will lose the chance of a steady income. ",
					"pointsText": "Lose 10 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "6",
  "specialFunc":"",
   "blurb": "You have the chance to sell illegal alcohol, âsly grogâ. This is a very profitable but the police will arrest and fine you if they find out. --- Alcohol was supposed to be sold only from hotels on the goldfields. There were, however, many âsly grogâ tents where it was sold secretly and illegally for great profits.",
			  "question": "What do you choose?",
			  "image": "woman-06",
			  "options": {
				"option": [
				  {
					"text": "Take the risk and sell sly grog.",
					"points": 40,
					"feedback": "This will make you a lot of money.",
					"pointsText": "Gain 40 points.",
					"action": "continue"
				  },
				  {
					"text": "Do not sell sly grog.",
					"points": 0,
					"feedback": "This is a sound decision.",
					"pointsText": "No points gained or lost.",
					"action": "notSellingGrog"
				  }
				]
			  }
			},
			{
			  "id": "7",
			  "specialFunc":"sellGrog",
			   "blurb": "The police hear a rumour that you are selling sly grog.",
			  "question": "Spin to see what happens.",
			  "image": "woman-07",
				"spinner": {
				"result": [
				  {
					"range": "1,2,3",
					"points": -10000000000,
					"feedback": "You are arrested during a police raid.",
					"pointsText": "",
					"action": "continue"
				  },
				  {
					"range": "4,5,6",
					"points": -40,
					"feedback": "You are arrested but bribe the police.",
					"pointsText": "Lose 40 points.",
					"action": "continue"
				  },
				  {
					"range": "7,8,9,10",
					"points": 0,
					"feedback": "The police carry out a raid but do not find evidence of your illegal action.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }			
			},
			{
			  "id": "8",
  "specialFunc":"",
   "blurb": "There is much unrest on the goldfields. Miners are protesting about the high cost of the gold licence, police brutality and corrupt officials. --- They also want political rights. You agree with their views but know it could be dangerous to support them.",
			  "question": "What do you choose?",
			  "image": "woman-08",
			  "options": {
				"option": [
				  {
					"text": "Support the miners.",
					"points": 100,
					"feedback": "You are sticking up for your beliefs. There is no problem so far. The miners also give their gold for supporting them. The miners also give their gold for supporting them.",
					"pointsText": "100 points gained.",
					"action": "continue"
				  },
				  {
					"text": "Keep quiet about your support for the miners.",
					"points": 0,
					"feedback": "You are putting your family first. There is no problem so far.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "9",
  "specialFunc":"",
   "blurb": "The miners have built a stockade to protect them from the authorities. They ask you to help sew a protest flag to fly at the stockade. --- You support the miners but getting involved could put you or your family at risk. ",
			  "question": "What do you choose?",
			  "image": "woman-09",
			  "options": {
				"option": [
				  {
					"text": "Help sew a protest flag.",
					"points": 100,
					"feedback": "You are sticking up for your beliefs. There is no problem so far. The miners also give their gold for supporting them.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  },
				  {
					"text": "Avoid any association with the stockade.",
					"points": 0,
					"feedback": "You are putting your family first. There is no problem so far.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "10",
  "specialFunc":"",
   "blurb": "It is Saturday night. Many miners have gathered within the stockade. --- Your husband is one of them. He asks you to come and join him. You know that authorities might attack the stockade.",
			  "question": "What do you choose?",
			  "image": "woman-10",
			  "options": {
				"option": [
				  {
					"text": "Join your husband and take a stand for the rights of miners (Please do not).",
					"points": 10,
					"feedback": "The stockade is attacked, and many miners are arrested, killed or wounded. Is your husband safe?",
					"pointsText": "Spin to find out.",
					"action": "spin",
					"spinner": {
						"result": [
						  {
							"range": "1,2,3,4,5,6,6,7,8,9,10",
							"points": -100,
							"feedback": "Your husband is killed.",
							"pointsText": "Lose 100 points.",
							"action": "continue"
						  }
						]
					  }
				  },
				  {
					"text": "Stay out of harmâs way.",
					"points": 0,
					"feedback": "A safe choice.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				   }
				]
			  },  
			  
			},
			{
			  "id": "11",
  "specialFunc":"",
   "blurb": "It is time to see if you were successful.",
			  "question": "Spin the wheel to find out.",
			  "image": "woman-11",
			  "spinner": {
				"result": [
				  {
					"range": "1,2,3",
					"points": 500,
					"feedback": "You have struck it rich!",
					"pointsText": "Gain 500 points.",
					"action": "continue"
				  },
				  {
					"range": "4,5,6,7,8,9,10",
					"points": 100,
					"feedback": "You have found enough to be comfortable.",
					"pointsText": "Gain 100 points.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "12",
  "specialFunc":"",
   "blurb": "It is a year later. You could stay near the goldfields and help build the new community, or leave for a new place.",
			  "question": "What do you choose?",
			  "image": "woman-12",
			  "options": {
				"option": [
				  {
					"text": "Stay in the new community that grew up around the goldfield.",
					"points": 20,
					"feedback": "A good decision, you are committed to the new community.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Leave for somewhere else.",
					"points": 10,
					"feedback": "A good choice.",
					"pointsText": "Gain 10 points to help you move to your new community.",
					"action": "continue"
				  }
				]
			  }
			}
		  ],
		  "results": [
			  {
				  "text":"You shouldn't have done that."
			  },
			  {
				  "text":"I-. How did you lose I made this r̵̨̛̛͍̄̆̇̾̋̎̌̓̅̈́͗͆̓̅͗̈́̑̃̊̿͌͒͌̀͂̏́̎͐̿͛̈̆̃͒͂̄̒̿̓̎̃̐̔͘ị̵̡̢̡̡̘̠͕͖͕̰̱̹͉͎͉̲̰͈̫͓͔̠̪̣̠͕͕͈̺͇̜̫̬̗̺͈̱͓͖͉͉͉̭̦̏̿͑̈͒̑͐̄̓͂̿͋̔͂̄̊̅͊̽̀̂̎̾́̀̓̊̾̓͐͒̈́̽̆̍̆͘̕̚̕ͅͅǵ̶̮̖͗͐͐̐́̽̊̓̓̅̑̎͂̔͛̑̈́́̈́͑̒̈́͐̀͐͗̂̕̚͘̕̚͝͠ģ̵̡̧̨̛͖̦̙̮͇̬̠̝̟̠͓̹̼͓͇̭̙̥͚̻͎͙͓̯̥̹͓̯͍̻̗̗͇̖̣̬̭̈̂͐̾̊̀͑͊̿̚̚͝ͅͅǧ̸̨̧̛̫̭̩̰̯̲͔͎͎̤͍̗͇̭̼̮͖̽͑̊̒̏̔̈́̄̏́̍͐́̍̄̀̊̄͊͋̓̾̏̓͆̎̓̊̍͒͗̂̕̕̕ͅͅę̴̨̨͕̘̜͔͇̼̣̥͍̙͔̞͖̜̘̥̥͍͖͖̰͚͎̟̤̦̼̳̫̦̳͚̤̖͖̤̪̾́̓͆̀͜͜͜ḑ̴̡̨̨̨̛̣̻̥̰̟͎̼̗̝̝̪̮͓̜͕̤̹̣̣̬͚̰͙͉̠̞̙̆̄̓̐̽̄̂̃̀̀̄̆͌͋̓͋͊͌̆̈́̑̑̓̅̌̔̚͜͝͝͝ ̸̢̛͍̩͖̙̼͔̘̩̤͔̯̱͙̙͚̟͎̻̈̂̋̔̃̌͂̋̉̎͐̈́̿͛͋̉̅̍͌͐̽̅̽̇̊̽̓͌̽̔̚̕͜͝͝͠f̷̢̡͇̳̬͚̹̟̦̩͈̬̫̤͉̖̺̯̙̜͓̩̖̝͒͌͗͗̀͌͊̒̒̑̓̆̊͆̌͂̇̀̽͊͛̕ǒ̴̢̢̨̨̨̨̥͙͍͕͖̤̺̺̻͍͔͙̦̙͚̘̤̘̜̹̩̝͉̉̓͗̓̐̃̔̾̌͊͂̈̓̇̍̒̍̈́̃͋̋̿̔͛̂́̋̂̀̀̽̃̓̅͘͜͝͝͝r̷̨̢̧͈͔̟͎͇̞͙͍̩͇̻̭͈̞̮̦̹̰̰̜̦͉̭̤̘͔͒́̆̎̀̌͆̓́͌͂̍̾͂̒̓́̉̈́̓̃̀̋̔̍́͐̀̍̀̔́͋̅̑̈̈́̾̌̋̿͌̾͌̚͘͝ ̶̧̧̢̧̨̢̛͈͉͖̠͉͇̝̠̜̝͈̣̹̗̝̪͉̠̱̖̗̱̝̯̟͓̺̼̬̺̙̣̫̩͍͇͂̌͌̌̓̓́͆̿͗̒̔͘̕̕͜͠ÿ̴̛̼̹̰̟̞̟͉̟͈̣͇͆̈́͂̋̾́͒̔͒̾̉̄̏̑̔̈͋́̕͘͠͝o̵̙̻̩͆̽́̉̋͑̇̀́͆̽̾͐͛̽̈͌͑̈́́̿̆͛̈̉̏̍̀̂̆̃̍̉̓̓͛̑͗̑̋̕͝u̴̖̲͉͕̣̱̦͕͊̿̐̈́̆͑͜!̴͔̆̓͛̾̎͋̐͘͝-̴̨̢̡̠̯̯̮͚̥̣̫͖̥͈̱͕̻̼̦͔̘̝̝̣̺̱̤̠͓̖̖͚̦͇͉̹̘̝̘̳̙̗͖̩͓̳̽̌͒̐̇͑͛̉̑̈́̍̍̈́̉͐́̒̃͑͆͐̅̒͋͂̈̽̿͂̉́̏̀̆̑́̂͒͑͆̉͛͘̕̕͜͠"
			  },
			  {
				  "text":"Well done, despite the many challenges, you are financially better off that when you started. ",
				  
			  },
			  {
				  "text":"Congratulations! Luck and hard work paid off. You made it rich on the goldfields! "	
			  }
		  ],
		  "moreInfo": [
			  {
				  "label":"Eliza Perrin: An âOrdinaryâ Woman of the Goldfields",
				  "url":"https://goldmuseumballarat.wordpress.com/2013/02/08/eliza-perrin-an-ordinary-woman-of-the-goldfields/"
			  },
			  {
				  "label":"",
				  "url":""
			  }
			]
		},
		{
		  "name": "policeman",
		  "situation": [
			{
			  "id": "1",
			  "-specialMode": "true",
  "specialFunc":"",
   "blurb": "You are a city policeman. It is steady work but not well paid. Many of your colleagues are heading to the goldfields in the hope of striking it rich. You could stay in the city to go to the goldfields.",
			  "question": "What do you choose?",
			  "image": "policeman-01",
			  "options": {
				"option": [
				  {
					"text": "Leave for the goldfields.",
					"points": -10,
					"feedback": "A brave decision. You will need to quit and get supplies and equipment. ",
					"pointsText": "Lose 10 points.",
					"action": "continue"
				  },
				  {
					"text": "Stay in the city.",
					"points": 0,
					"feedback": "A sensible decision but you game ends here.",
					"pointsText": "Do you want to change your answer?",
					"action": "change"
				  }
				]
			  }
			},
			{
			  "id": "2",
  "specialFunc":"",
   "blurb": "You arrive at the goldfields. There are many miners here already and it looks like hard, dirty work. --- You wonder if you would be better off working as a policeman. The authorities are hiring.",
			  "question": "What do you choose?",
			  "image": "policeman-02",
			  "options": {
				"option": [
				  {
					"text": "Take a job as a policeman.",
					"points": 0,
					"feedback": "You have lost the opportunity to strike it rich but you will receive a good wage.",
					"pointsText": "You no longer have to pay the 10 point cost of living allowance when you take a turn.",
					"action": "continue"
				  },
				  {
					"text": "Take up mining.",
					"points": 0,
					"feedback": "Good luck!",
					"pointsText": "You will not have a steady wage but you have the chance to strike it rich.",
					"action": "changeToMiner"
				  }
				]
			  }
			},
			{
			  "id": "3",
  "specialFunc":"",
   "blurb": "As a policeman, you need to check that miners have a licence. It is your job to arrest and fine anyone without a licence. --- You approach a group of miners. One sees you and races off. You could chase him or check the licences of the other miners.",
			  "question": "What do you choose?",
			  "image": "policeman-03",
			  "options": {
				"option": [
				  {
					"text": "You chase the miner.",
					"points": 10,
					"feedback": "Sometimes miners work together to avoid fines. A miner with a licence will run off, if the police officer chasers after him, it gives the others a chance to hide. ",
					"pointsText": "Is this a ploy? Spin to find out.",
					"action": "spin",
					"spinner": {
						"result": [
						  {
							"range": "1,2,3,4,5",
							"points": 0,
							"feedback": "The miners tricked you. Every person who wanted to dig for gold had to get a licence. This licence had to be carried at all times. If miners did not have a licence they would be arrested and put in gaol and fined.",
							"pointsText": "No points gained or lost.",
							"action": "continue"
						  },
						  {
							"range": "6,7,8,9,10",
							"points": 10,
							"feedback": "You caught the miner, he did not have a licence, so you can fine him.",
							"pointsText": "Gain 10 points.",
							"action": "continue"
						  },
						]
					  }
				  },
				  {
					"text": "You stay and check the others.",
					"points": 10,
					"feedback": "Do the miners have licences? ",
					"pointsText": "Spin to see.",
					"action": "spin",
					 "spinner": {
						"result": [
						  {
							"range": "1,2,3,4,5",
							"points": 0,
							"feedback": "These miners have licences. There is no one to fine.",
							"pointsText": "No points gained or lost.",
							"action": "continue"
						  },
						  {
							"range": "6,7,8,9,10",
							"points": 10,
							"feedback": "These miners do not have a licences. You can make your arrests.",
							"pointsText": "Gain 10 points.",
							"action": "continue"
						  },
						]
					  }
				  }
				]
			  }
			},
			{
			  "id": "4",
  "specialFunc":"",
   "blurb": "You arrest a miner because he has no licence. He begs you not to arrest him. He tells you a sad story about his sick wife and hungry children, and promises to buy a licence immediately.",
			  "question": "What do you choose?",
			  "image": "policeman-04",
			  "options": {
				"option": [
				  {
					"text": "Arrest him.",
					"points": 0,
					"feedback": "You are doing your job.",
					"pointsText": "No points lost or gained.",
					"action": "continue"
				  },
				  {
					"text": "Feel sorry for him, trust him, and let him go.",
					"points": -10,
					"feedback": "Understandable, but you are not doing your job. Lose 10 points. ",
					"pointsText": "Spin to see if he was genuine or not.",
					"action": "spinAndPoints",
					"spinner": {
						"result": [
						  {
							"range": "1,2,3,4,5,6,7,8,9,10",
							"points": -10,
							"feedback": "He tricked you.",
							"pointsText": "Lose another 10 points.",
							"action": "continue"
						  }
						]
					  }
				  }
				]
			  }
			},
			{
			  "id": "5",
  "specialFunc":"",
   "blurb": "You discover people selling âsly grogâ. This is the selling of alcohol without a licence. It is a crime. They offer you a bribe if you let them go.",
			  "question": "What do you choose?",
			  "image": "policeman-05",
			  "options": {
				"option": [
				  {
					"text": "Take the bribe.",
					"points": 20,
					"feedback": "This is a way to make extra money on top of your pay.",
					"pointsText": "Gain 20 points",
					"action": "continueDishonest"
				  },
				  {
					"text": "Arrest them.",
					"points": 0,
					"feedback": "You are doing your job.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "6",
  "specialFunc":"",
   "blurb": "There is often tension between the miners and the police. --- A miner is abusive to you. He has a licence. You could destroy it then arrest and fine him to get even. There is no one else around.",
			  "question": "What do you choose?",
			  "image": "policeman-06",
			  "options": {
				"option": [
				  {
					"text": "Destroy the licence and arrest him.",
					"points": 10,
					"feedback": "There are no witnesses and the miner is fined. ",
					"pointsText": "Gain 10 points.",
					"action": "continueDishonest"
				  },
				  {
					"text": "Hand his licence back and let him off with a warning.",
					"points": 0,
					"feedback": "You are doing your job.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "7",
  "specialFunc":"",
   "blurb": "You are on another licence hunt.  A miner has no licence and he offers you a bribe to let him go.",
			  "question": "What do you choose?",
			  "image": "policeman-07",
			  "options": {
				"option": [
				  {
					"text": "Take the bribe.",
					"points": 20,
					"feedback": "This is a way to make extra money on top of your pay.",
					"pointsText": "Gain 20 points.",
					"action": "continueDishonest"
				  },
				  {
					"text": "Arrest and fine him.",
					"points": 0,
					"feedback": "You are doing your job.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "8",
  "specialFunc":"",
   "blurb": "Some of the miners are protesting against authority at the gold fields. They have barricaded themselves behind a stockade. These miners are acting unlawfully. --- The police launch an attack to break the protest. Many people are shot and injured. You see a miner running away. He is a family man and not armed. He is too far away for you to catch him.",
			  "question": "Spin to find out.",
			  "image": "policeman-08",
			  "options": {
				"option": [
				  {
					"text": "Shoot him.",
					"points": 10,
					"feedback": "This is justified â he is a fleeing criminal.",
					"pointsText": "Gain 10 points.",
					"action": "continue"
				  },
				  {
					"text": "Let him go.",
					"points": -10,
					"feedback": "This is sympathetic, but you are not doing your job.",
					"pointsText": "Lose 10 points.",
					"action": "continue"
				  }
				]
			   }
			  
			},
			{
			  "id": "9",
  "specialFunc":"",
   "blurb": "While searching for miners hiding in the stockade you come across a bag of gold. It belonged to a miner who died defending the stockade. He has a family on the goldfields. Nobody is watching you.",
			  "question": "What do you choose?",
			  "image": "policeman-09",
			  "options": {
				"option": [
				  {
					"text": "Take the gold for yourself.",
					"points": 100,
					"feedback": "Nobody sees this. You just made a lot of money.",
					"pointsText": "Gain 100 points.",
					"action": "continueDishonest"
				  },
				  {
					"text": "Take the gold but hand it over to his wife and family.",
					"points": 0,
					"feedback": "You are doing your job.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "10",
  "specialFunc":"",
   "blurb": "The miners at the stockade go on trial. You need to give evidence. One of the accused is a man who has abused and taunted you. --- You think he was there at the stockade but you are not completely certain. The courts will convict him if you say he was there.",
			  "question": "What do you choose?",
			  "image": "policeman-10",
			  "options": {
				"option": [
				  {
					"text": "Say you are certain he was there.",
					"points": 20,
					"feedback": "The miner is convicted, and you are paid a reward.",
					"pointsText": "Gain 20 points.",
					"action": "continueDishonest"
				  },
				  {
					"text": "Tell the truth â that you think he was there, but you are not absolutely sure.",
					"points": 0,
					"feedback": "The miner is set free.",
					"pointsText": "No points gained or lost.",
					"action": "continue"
				  }
				]
			  }
			},
			{
			  "id": "11",
			  "specialFunc":"honestySpinner",
			   "blurb": "It is time to see how you went on the goldfields.",
			  "question": "Spin to discover your fate.",
			  "image": "policeman-11",
			  "spinner": {
				"result": [
				  {
					"range": "1,2,3,4,5",
					"points": -1000,
					"feedback": "The courts convict you for unlawful actions in the course of your work. You lose your job and go to gaol.",
					"pointsText": "Lose all your points. Game over for you.",
					"action": "continue"
				  },
				  {
					"range": "6,7,8,9,10",
					"points": 20000000000000,
					"feedback": "Miners respect your honesty and fairness in the course of your work. ",
					"pointsText": "Gain 200 points.",
					"action": "continue"
				  },
				]
			   }
			  
		  
			},
			{
			  "id": "12",
  "specialFunc":"",
   "blurb": "The gold rush is over but you could stay on in the community, working as a policeman or in another line of work. ",
			  "question": "What do you choose?",
			  "image": "policeman-12",
			  "options": {
				"option": [
				  {
					"text": "Stay in the new community that grew up around the goldfield.",
					"points": 20,
					"feedback": "A good decision, you are committed to the new community.",
					"pointsText": "Gain 20 points.",
					"action": "continue"
				  },
				  {
					"text": "Move on.",
					"points": 10,
					"feedback": "A good choice.",
					"pointsText": "Gain 10 points to help you move to your new community.",
					"action": "continue"
				  }
				]
			  }
			}
		  ],
		  "results": [
			  {
				  "text":"I-. How did you lose I made this r̵̨̛̛͍̄̆̇̾̋̎̌̓̅̈́͗͆̓̅͗̈́̑̃̊̿͌͒͌̀͂̏́̎͐̿͛̈̆̃͒͂̄̒̿̓̎̃̐̔͘ị̵̡̢̡̡̘̠͕͖͕̰̱̹͉͎͉̲̰͈̫͓͔̠̪̣̠͕͕͈̺͇̜̫̬̗̺͈̱͓͖͉͉͉̭̦̏̿͑̈͒̑͐̄̓͂̿͋̔͂̄̊̅͊̽̀̂̎̾́̀̓̊̾̓͐͒̈́̽̆̍̆͘̕̚̕ͅͅǵ̶̮̖͗͐͐̐́̽̊̓̓̅̑̎͂̔͛̑̈́́̈́͑̒̈́͐̀͐͗̂̕̚͘̕̚͝͠ģ̵̡̧̨̛͖̦̙̮͇̬̠̝̟̠͓̹̼͓͇̭̙̥͚̻͎͙͓̯̥̹͓̯͍̻̗̗͇̖̣̬̭̈̂͐̾̊̀͑͊̿̚̚͝ͅͅǧ̸̨̧̛̫̭̩̰̯̲͔͎͎̤͍̗͇̭̼̮͖̽͑̊̒̏̔̈́̄̏́̍͐́̍̄̀̊̄͊͋̓̾̏̓͆̎̓̊̍͒͗̂̕̕̕ͅͅę̴̨̨͕̘̜͔͇̼̣̥͍̙͔̞͖̜̘̥̥͍͖͖̰͚͎̟̤̦̼̳̫̦̳͚̤̖͖̤̪̾́̓͆̀͜͜͜ḑ̴̡̨̨̨̛̣̻̥̰̟͎̼̗̝̝̪̮͓̜͕̤̹̣̣̬͚̰͙͉̠̞̙̆̄̓̐̽̄̂̃̀̀̄̆͌͋̓͋͊͌̆̈́̑̑̓̅̌̔̚͜͝͝͝ ̸̢̛͍̩͖̙̼͔̘̩̤͔̯̱͙̙͚̟͎̻̈̂̋̔̃̌͂̋̉̎͐̈́̿͛͋̉̅̍͌͐̽̅̽̇̊̽̓͌̽̔̚̕͜͝͝͠f̷̢̡͇̳̬͚̹̟̦̩͈̬̫̤͉̖̺̯̙̜͓̩̖̝͒͌͗͗̀͌͊̒̒̑̓̆̊͆̌͂̇̀̽͊͛̕ǒ̴̢̢̨̨̨̨̥͙͍͕͖̤̺̺̻͍͔͙̦̙͚̘̤̘̜̹̩̝͉̉̓͗̓̐̃̔̾̌͊͂̈̓̇̍̒̍̈́̃͋̋̿̔͛̂́̋̂̀̀̽̃̓̅͘͜͝͝͝r̷̨̢̧͈͔̟͎͇̞͙͍̩͇̻̭͈̞̮̦̹̰̰̜̦͉̭̤̘͔͒́̆̎̀̌͆̓́͌͂̍̾͂̒̓́̉̈́̓̃̀̋̔̍́͐̀̍̀̔́͋̅̑̈̈́̾̌̋̿͌̾͌̚͘͝ ̶̧̧̢̧̨̢̛͈͉͖̠͉͇̝̠̜̝͈̣̹̗̝̪͉̠̱̖̗̱̝̯̟͓̺̼̬̺̙̣̫̩͍͇͂̌͌̌̓̓́͆̿͗̒̔͘̕̕͜͠ÿ̴̛̼̹̰̟̞̟͉̟͈̣͇͆̈́͂̋̾́͒̔͒̾̉̄̏̑̔̈͋́̕͘͠͝o̵̙̻̩͆̽́̉̋͑̇̀́͆̽̾͐͛̽̈͌͑̈́́̿̆͛̈̉̏̍̀̂̆̃̍̉̓̓͛̑͗̑̋̕͝u̴̖̲͉͕̣̱̦͕͊̿̐̈́̆͑͜!̴͔̆̓͛̾̎͋̐͘͝-̴̨̢̡̠̯̯̮͚̥̣̫͖̥͈̱͕̻̼̦͔̘̝̝̣̺̱̤̠͓̖̖͚̦͇͉̹̘̝̘̳̙̗͖̩͓̳̽̌͒̐̇͑͛̉̑̈́̍̍̈́̉͐́̒̃͑͆͐̅̒͋͂̈̽̿͂̉́̏̀̆̑́̂͒͑͆̉͛͘̕̕͜͠"
			  },
			  {
				  "text":"I-. How did you lose I made this r̵̨̛̛͍̄̆̇̾̋̎̌̓̅̈́͗͆̓̅͗̈́̑̃̊̿͌͒͌̀͂̏́̎͐̿͛̈̆̃͒͂̄̒̿̓̎̃̐̔͘ị̵̡̢̡̡̘̠͕͖͕̰̱̹͉͎͉̲̰͈̫͓͔̠̪̣̠͕͕͈̺͇̜̫̬̗̺͈̱͓͖͉͉͉̭̦̏̿͑̈͒̑͐̄̓͂̿͋̔͂̄̊̅͊̽̀̂̎̾́̀̓̊̾̓͐͒̈́̽̆̍̆͘̕̚̕ͅͅǵ̶̮̖͗͐͐̐́̽̊̓̓̅̑̎͂̔͛̑̈́́̈́͑̒̈́͐̀͐͗̂̕̚͘̕̚͝͠ģ̵̡̧̨̛͖̦̙̮͇̬̠̝̟̠͓̹̼͓͇̭̙̥͚̻͎͙͓̯̥̹͓̯͍̻̗̗͇̖̣̬̭̈̂͐̾̊̀͑͊̿̚̚͝ͅͅǧ̸̨̧̛̫̭̩̰̯̲͔͎͎̤͍̗͇̭̼̮͖̽͑̊̒̏̔̈́̄̏́̍͐́̍̄̀̊̄͊͋̓̾̏̓͆̎̓̊̍͒͗̂̕̕̕ͅͅę̴̨̨͕̘̜͔͇̼̣̥͍̙͔̞͖̜̘̥̥͍͖͖̰͚͎̟̤̦̼̳̫̦̳͚̤̖͖̤̪̾́̓͆̀͜͜͜ḑ̴̡̨̨̨̛̣̻̥̰̟͎̼̗̝̝̪̮͓̜͕̤̹̣̣̬͚̰͙͉̠̞̙̆̄̓̐̽̄̂̃̀̀̄̆͌͋̓͋͊͌̆̈́̑̑̓̅̌̔̚͜͝͝͝ ̸̢̛͍̩͖̙̼͔̘̩̤͔̯̱͙̙͚̟͎̻̈̂̋̔̃̌͂̋̉̎͐̈́̿͛͋̉̅̍͌͐̽̅̽̇̊̽̓͌̽̔̚̕͜͝͝͠f̷̢̡͇̳̬͚̹̟̦̩͈̬̫̤͉̖̺̯̙̜͓̩̖̝͒͌͗͗̀͌͊̒̒̑̓̆̊͆̌͂̇̀̽͊͛̕ǒ̴̢̢̨̨̨̨̥͙͍͕͖̤̺̺̻͍͔͙̦̙͚̘̤̘̜̹̩̝͉̉̓͗̓̐̃̔̾̌͊͂̈̓̇̍̒̍̈́̃͋̋̿̔͛̂́̋̂̀̀̽̃̓̅͘͜͝͝͝r̷̨̢̧͈͔̟͎͇̞͙͍̩͇̻̭͈̞̮̦̹̰̰̜̦͉̭̤̘͔͒́̆̎̀̌͆̓́͌͂̍̾͂̒̓́̉̈́̓̃̀̋̔̍́͐̀̍̀̔́͋̅̑̈̈́̾̌̋̿͌̾͌̚͘͝ ̶̧̧̢̧̨̢̛͈͉͖̠͉͇̝̠̜̝͈̣̹̗̝̪͉̠̱̖̗̱̝̯̟͓̺̼̬̺̙̣̫̩͍͇͂̌͌̌̓̓́͆̿͗̒̔͘̕̕͜͠ÿ̴̛̼̹̰̟̞̟͉̟͈̣͇͆̈́͂̋̾́͒̔͒̾̉̄̏̑̔̈͋́̕͘͠͝o̵̙̻̩͆̽́̉̋͑̇̀́͆̽̾͐͛̽̈͌͑̈́́̿̆͛̈̉̏̍̀̂̆̃̍̉̓̓͛̑͗̑̋̕͝u̴̖̲͉͕̣̱̦͕͊̿̐̈́̆͑͜!̴͔̆̓͛̾̎͋̐͘͝-̴̨̢̡̠̯̯̮͚̥̣̫͖̥͈̱͕̻̼̦͔̘̝̝̣̺̱̤̠͓̖̖͚̦͇͉̹̘̝̘̳̙̗͖̩͓̳̽̌͒̐̇͑͛̉̑̈́̍̍̈́̉͐́̒̃͑͆͐̅̒͋͂̈̽̿͂̉́̏̀̆̑́̂͒͑͆̉͛͘̕̕͜͠"
			  },
			  {
				  "text":"Well done, you stayed safe and are financially better off that when you started."
			  },
			  {
				  "text":"Congratulations! You made it rich on the goldfields! You were also lucky to survive. "
			  }
		  ],
		  "moreInfo": [
			  {
				  "label":"Explore the NMA Collection",
				  "url":"http://collectionsearch.nma.gov.au/ce/bullion%20box?object=130767"
			  },
			  {
				  "label":"",
				  "url":""
			  }
			]
		}
	  ]
	}
  };