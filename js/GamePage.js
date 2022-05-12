((function(window) {

	window.GamePage = GamePage;
	
	//CONSTANTS
	GamePage.BEACON;


		
	function GamePage () {
		
		// private variables
		var _this = this;
		var _sub_header,_help_btn, _help_screen, _feedbackOverlay, _feedbackText, _cur_player_label, _wage_notice, _gameDiv, _sitContent, _nextBtn, _sitHeader, _lightbox, _container, _pointsMenu, _scoreboard;
		var _userChars = [];
		var _userNames = [];
		var _userIndexes = [];
		var _userPoints = [100,100,100,100];
		var _userAlive = [];
		var _ttPlayers = 0;
		var _ttRounds = 12;
		var _curPlayerIndex = 0;
		var _curRound = 0;
		var _firstQuestion = true;
		var _completed = false;
		var _noWinner = false;
		//var _bgPosition = 0;
		var _newRound = true;
		var _json = data;
		var _curSituation = null;
		var _oldSituation = null;
		var _optionAction;
		var _optionLabel;
		
		//Character choices
		var _changedJob = false; //Policeman sit 2
		var _hasLicence = false; //brit question 5
		var _joinedStockade = false;  //brit question 5

		// Private Functions
	//---------------------------------------------------------------------------------------------------
		var addEventListner = function(element, type, func){
			
			if(window.addEventListener){
				//Non IE8
				element.addEventListener(type, function(e) { 
					func(e);
				});
					
			} else {
				//IE8
				element.attachEvent('on' + type, function(e) { 
					func(e);
				});
			}
				
		};
		
		var getParameterByName = function (name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		};
		
		// Public Functions
		//-----------------------------------------------------------------------------------------------------

		this.init = function () {
			
			//Assign vars
			_help_btn 			= document.getElementById("help-btn");
			_help_screen 		= document.getElementById("helpbox");
			_sub_header  		= document.getElementById("sub-header");
			_wage_notice		= document.getElementById("notice");
			_gameDiv 			= document.getElementById("game");
			_sitContent 		= document.getElementById("sitContent");
			//_nextBtn			= document.getElementById("nextBtn");
			_sitHeader   		= document.getElementById("sit-header");
			_lightbox	 		= document.getElementById("lightbox");
			_feedbackOverlay 	= document.getElementById("overlay");
			_cur_player_label 	= document.getElementById("cur_player");
			_container 			= document.getElementById("content");
			_pointsMenu			= document.getElementById("points_menu");
			_scoreboard			= document.getElementById("scoreboard");	
			
			GamePage.BEACON = document.createElement("div");
			addEventListner(GamePage.BEACON, '_optionAccepted_', onOptionAccepted);
			addEventListner(GamePage.BEACON, '_specialContinue_', onSpecialContinue);
			
			_feedbackOverlay.style.display = 'none';
			_feedbackText = _feedbackOverlay.querySelector('.feedback');
			
			addEventListner(_lightbox, 'click', onCloseLightbox);
			
			//Temp
			addEventListner(_feedbackText, 'click', onCloseFeedback);
			
			//Setup Players
			for (var i = 1; i <= 4; i++) {
				
				var scoreLabel = document.getElementById('p'+i+'_score');
				
				if (getParameterByName('p'+i+'char') != "" && getParameterByName('p'+i+'name') != "") {
					
					_userChars.push(getParameterByName('p'+i+'char'));
					_userNames.push(getParameterByName('p'+i+'name'));
					_userAlive.push(true);
						
					//Map char name to content index
					switch(getParameterByName('p'+i+'char')) {
						case 'chinaman':
							_userIndexes.push(0);
							break;
						case 'brit':
							_userIndexes.push(1);
							break;
						case 'woman':
							_userIndexes.push(2);
							break;
						case 'policeman':
							_userIndexes.push(3);
							break;
					} 
					
						
					var n  = scoreLabel.querySelector('.name');
					var s  = scoreLabel.querySelector('.score');
					n.innerHTML = getParameterByName('p'+i+'name');
					s.innerHTML = _userPoints[_ttPlayers];
					
					scoreLabel.style.display = 'block';
					
					_ttPlayers++;
					
				} 
			}
			
			//console.log(_ttPlayers);
			
			if (_ttPlayers === 0){
				//No player Data
				
			} else {
				//Setup First PLayer and Question
				_curPlayerIndex = _ttPlayers;
				nextQuestion();
								
				//Add Events
				addEventListner(_help_btn, 'click', onHelpClick);
				addEventListner(_help_screen, 'click', onHelpHide);
				
							
				//Temp next button
				//addEventListner(_nextBtn, 'click', nextQuestion);
	
			}
		};
		
	
		
		//Private functions
		var nextQuestion = function () {
			
			//console.log("Next Question. Cur/Old Situation ",_curSituation);
			_oldSituation = _curSituation;
			//UPDATE INDEXES
			
			//Next Player ID
			_curPlayerIndex++;
			
			//Check round
			if (_curPlayerIndex >= _ttPlayers){
				//Next Round
				_curPlayerIndex = 0;
				_curRound++;
				_newRound = true;
				
				var roundNum	= _sitHeader.querySelector('span');
				roundNum.innerHTML = _curRound;
				
				if (_curRound > _ttRounds){
					//END GAME
					//console.log("COMPLETED");
					_completed = true;
				}
			} else {
				_newRound = false;	
			}
			
			//CHECK IF SKIP
			if (!_userAlive[_curPlayerIndex]) {
				nextQuestion();
				return;
			}
			
			//SETUP
			if (!_completed){
										
				updateScoreboard();
				
				//SETUP QUESTION
				_container.className = _userChars[_curPlayerIndex] + "-mode";
				
				var contentIndex = _userIndexes[_curPlayerIndex];
				//console.log("Content index: ",contentIndex, ". Round index ",(_curRound-1));
				
				
				var sitData = _json.characters.character[contentIndex].situation[(_curRound-1)];
				_curSituation = new Situation(_userChars[_curPlayerIndex], sitData, _userAlive[_curPlayerIndex]);
				_sitContent.appendChild(_curSituation.div);
				_curSituation.init();
					
				//ANIMATE
				if (_firstQuestion) {
					
					//Just Fade In
					TweenMax.from(_curSituation.div, 0.5, {alpha:0, ease:Linear.easeNone});
					_firstQuestion = false;
					
				} else {
					
					//Otherwise, if multiplayer, slide in and out
					
					if (_ttPlayers > 1 ) {
						
						//Slide Mode
						var bg_inc = 1300 / _ttPlayers;
						var bg_pos = bg_inc * _curPlayerIndex;
						if (bg_pos == 0) {
							bg_pos = 1300;
						}
						
						var bg_pos_str = '-'+bg_pos.toString()+'px 0';
						
						TweenMax.to(_gameDiv, 0.6, {backgroundPosition: bg_pos_str, ease:Power2.easeOut});
						TweenMax.from(_curSituation.div, 0.6, {x:970, ease:Power2.easeOut});
						TweenMax.to(_oldSituation.div, 0.6, {x:-990, ease:Power2.easeOut, onComplete: function (){
							
							removeOldSituation();
							
							if(_newRound)
								_gameDiv.style.backgroundPosition = "0 0";
							//reset bg pos?
			
						}});
						
					} else {
						//Single player more
						TweenMax.from(_curSituation.scenario, 0.5, {alpha:0, ease:Linear.easeNone});
						
						removeOldSituation();
						
					}
										
				}
				
				
			} else {
				
				//COMPLETED
				removeOldSituation();
				gotoCompleted();
				
			}
			
			
			//console.log("question added ",_curSituation);
		};
		
		
		//UPDATE SCOREBOARD
		var updateScoreboard = function () {
				
			
			if(_userChars[_curPlayerIndex] === "policeman" && _curRound > 3){
				//MNo wage deduction
				_wage_notice.style.display = 'none';	
				
			} else {
				//Deduct Wages
				_userPoints[_curPlayerIndex] = _userPoints[_curPlayerIndex] - 10;
				
				if (_curRound < 3) {
					//Show message
					
					var leftPos = 217 + (_curPlayerIndex * 150);
					_wage_notice.style.display = "block";
					_wage_notice.style.left = leftPos + "px";
					_wage_notice.style.opacity = "1";
					
					TweenMax.from(_wage_notice, 0.9, {y:20, alpha:0, ease: Power2.easeOut});
					TweenMax.to(_wage_notice, 0.5, {alpha:0, delay:5, ease: Power2.easeOut});
				}
				
			} 
			//Update Scoreboard labels
			_cur_player_label.innerHTML = _userNames[_curPlayerIndex];
			updateScoreDisplay(_curPlayerIndex);
			
			var scoreLabel;
			
			for (var i = 1; i <= _ttPlayers; i++) {
				
				scoreLabel 	= document.getElementById('p'+i+'_score');
				
				if (i == (_curPlayerIndex+1)) {
					//Current
					scoreLabel.className = "player_score current";	
				} else {
					scoreLabel.className = "player_score";	
				}
			}
			
			
		
	};
		
		
		//REMOVE OLD SITUATION
		var removeOldSituation = function () {
			
			//console.log("Remove ",_oldSituation);
			
			if (_oldSituation.div != null) {	
				_sitContent.removeChild(_oldSituation.div);
				_oldSituation = null;
			}
		};
		
		//When use chooses an option	
		 var showFeedback = function (text, action, points) {
			
			//console.log("Show feedback. Action:",action);
			_optionAction = action;
			
			_feedbackOverlay.style.display = 'block';
			
			if (_optionAction == "change") {
				_feedbackText.innerHTML = text + "<div class='continueBtn btn'>Change Answer</div>";
			} else {
				_feedbackText.innerHTML = text + "<div class='continueBtn btn'>Continue</div>";
			}
						
			if (_optionAction == "continue") {
				//Enable continue button
				updateUserScore(points);
				
			} else if (_optionAction == "continueDishonest"){
				//Choose a dishonest option
				_json.characters.character[3].situation[10].specialFunc = "dishonestySpinner";
				updateUserScore(points);
				
				
			} else if (_optionAction == "changeToMiner"){
				//Change to british questions
				_userChars[_curPlayerIndex] = "policeman2";
				//Chagne Artwork
				var charArt = document.getElementById("player-art");
				var charImg =  charArt.querySelector("img");
				charImg.src = "images/players-policeman2_zoom.png";
				//Change ref to brit questions
				_userIndexes[_curPlayerIndex] = 1;
				
			} else if (_optionAction == "buyLicence") {
				//Brit Q5
				//yesLicence
				_json.characters.character[1].situation[5].specialFunc = "hasLicence";
				updateUserScore(points);
				
			} else if (_optionAction == "dontJoinStockade") {
				//Brit Q9
				_json.characters.character[1].situation[9].specialFunc = "noStockade";
				//console.log(_json.characters.character[1].situation[9].specialFunc );
				updateUserScore(points);
				
			} else if (_optionAction == "notSellingGrog") {
				//Woman Q6
				//Setup next sitation special functionality
				_json.characters.character[2].situation[6].specialFunc = "noSellGrog";
				updateUserScore(points);
				
			} else if (_optionAction == "spinAndPoints") {
				//Police q4
				updateUserScore(points);
				
			} else if (_optionAction == "change") {
				//On Click just hides the screen
			}
			
			//console.log("... End Show feedback. Action:",action);
		};
		
		var updateUserScore = function (points) {
				
			_userPoints[_curPlayerIndex] = _userPoints[_curPlayerIndex] + points;
			//console.log("Updated points ",_userPoints[_curPlayerIndex]);
			updateScoreDisplay(_curPlayerIndex);
			checkUserAlive();
			
		};
		
		
		var updateScoreDisplay = function (id) {
			
			//console.log("Update score display #",id,_userPoints[id]);
			//console.log(id, " : ", _userPoints[id]);
			
			var scoreLabel 	= document.getElementById('p'+(id+1)+'_score');
			var scoreText  	= scoreLabel.querySelector('.score');
			var points		= _userPoints[id];
			
			if (points < 0) points = 0;
			
			scoreText.innerHTML = points;	
		}
		
		//COMPLETED SCREEN
		var gotoCompleted = function () {
				
			
			//Hide Old Scoreboard
			_pointsMenu.style.display = 'none';
			_cur_player_label.style.display = 'none';
			
			var output = "";
			var charsOutput = "";
			var highest = 0;
			var highIndex = 0;
			var feedback = "";
			//console.log(_userNames,_userPoints);
			
			
			//console.log("all user points",_userPoints);	
			
			//Sort to get winning scores
			var pointsSorted = _userPoints.slice(0);
			pointsSorted.sort(function(a, b){return b-a});
			
			
			//console.log("all user points",_userPoints);	
			
			var points = 0; 
			
			//Show results scores
			for (var i = 0; i < _ttPlayers; i++) {
				
				var contentIndex = _userIndexes[i];
				var label = _userChars[i];
				var url = "";
				var linkName = "";
				
				if (label == "brit") label = "British Miner";
				
				points = _userPoints[i];
				
				if (points < 0) points = 0;
				
				if (points < 50 ) {
					feedback = _json.characters.character[contentIndex].results[0].text;
				} else if (points < 150 ) {
					feedback = _json.characters.character[contentIndex].results[1].text;
				} else if (points < 250 ) {
					feedback = _json.characters.character[contentIndex].results[2].text;
				} else {
					feedback = _json.characters.character[contentIndex].results[3].text;
				}
			
				url_1 	 = _json.characters.character[contentIndex].moreInfo[0].url;
				url_2 	 = _json.characters.character[contentIndex].moreInfo[0].url;
					
				output += '<div class="result" id="result-'+i+'">';
				output += ' <h3>'+_userNames[i]+': '+points+'</h3>';
				output += ' <p>'+feedback+'</p>';
				output += ' <h4>Find Out More:</h4>';
				
				if (_json.characters.character[contentIndex].moreInfo[0].url != ""){
					url 		= _json.characters.character[contentIndex].moreInfo[0].url;
					linkName 	= _json.characters.character[contentIndex].moreInfo[0].label;
					output 	   += ' <a href=" '+url+'" class="link" target="_blank">&bull; '+linkName+' &raquo;</a>';
				}
				if (_json.characters.character[contentIndex].moreInfo[1].url != undefined) {
					if (_json.characters.character[contentIndex].moreInfo[1].url != ""){
						url 		= _json.characters.character[contentIndex].moreInfo[1].url;
						linkName 	= _json.characters.character[contentIndex].moreInfo[1].label;
						output 	   += ' <a href=" '+url+'" class="link" target="_blank">&bull; '+linkName+' &raquo;</a>';
					}
				}
				
				//If has winning score and allow winner badge, add a winner banner
				if (points == pointsSorted[0] && !_noWinner) {
					output += '<div class="winner">Winner</div>';
				}
				
				output += '</div>';
				
				//Character art 
				charsOutput += '<img width="210" height="360" alt="" src="https://games-digital-classroom.nma.gov.au/goldrush/images/players-'+_userChars[i]+'_zoom.png">';
				
			}
			
			var results = document.getElementById("results");
			results.innerHTML =  output;
			results.className = "playersX"+_ttPlayers;
			
			_sitContent.innerHTML = charsOutput;
			_sitContent.className = "playersX"+_ttPlayers;
			
			var h1 = _sitHeader.querySelector('h1');
			var h3 = _sitHeader.querySelector('h3');
			h1.innerHTML = "How did you fare?";
			h1.style.textAlign = 'center';
			h3.style.display = 'none';
			
			//Tween in
			TweenMax.to(_scoreboard, 0.5, {height:230, ease: Power2.easeOut});
			TweenMax.to(_sitHeader, 0.5, {width:460, marginLeft:260, ease: Power2.easeOut});
			
		};
		
		//CHECK SCORE ABOVE ZERO & STILL ACTIVE
		var checkUserAlive = function () {
			
			//See if they have enough points to keep playing and havent been shown end game screen
			if (_userPoints[_curPlayerIndex] <= 0 && _userAlive[_curPlayerIndex] == true) {
			
				//Update scoreboard
				var scoreLabel 	= document.getElementById('p'+(_curPlayerIndex+1)+'_score');
				var nameText  	= scoreLabel.querySelector('.name');
				nameText.className = "name out";
				
				//Test this...
				//_oldSituation = _curSituation;
				
				//Change Action
				if (_ttPlayers == 1) {
					
					//Single player, jump to conclusion
					//console.log("Single player, Game over");
					_optionAction = "endGameSingle";
					_userAlive[_curPlayerIndex] = false;
					
				} else {
					
					//console.log("Multi player, User Game over");
					_optionAction = "endMultiSingle";
					_userAlive[_curPlayerIndex] = false;
				}
				
			}
				
		};
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		var onBodyLoaded = function () {
				
			_this.init();
		};
		
		var onHelpClick = function (e) {

			e.preventDefault();
			_help_screen.style.display = 'block';

		};
		
		var onHelpHide = function () {
			
			_help_screen.style.display = 'none';

		};
		var onCloseLightbox = function () {
			
			_lightbox.style.display = 'none';

		};
		
		var onCloseFeedback = function () {
			
			//console.log("Action",_optionAction);
			
			_feedbackOverlay.style.display = 'none';
			
				
			if (_optionAction == "change" || _optionAction == "endGame") {
				
				//Just close the window
				
			} else if ( _optionAction == "spin" ||  _optionAction == "spinAndPoints") {
				
				//Hide Questions and Show spinner
				_curSituation.switchToSpinner(_optionLabel);
				
			} else if (_optionAction == "endGameSingle") {
				
				//Single Player - show game over message
				_noWinner = true;
				showFeedback("<h3>Game Over</h3><p>Unfortunately you have run out of luck and money! The game is over for you.</p>", "singleCompleted", 0);
				
			} else if (_optionAction == "singleCompleted") {
				
				//Single Player - close game over message
				//console.log("singleCompleted");
				gotoCompleted();
				
			} else if (_optionAction == "endMultiSingle") {
				
				//Mulit player - show end message
				//console.log("end users game - multiplayer");
				
				//if some players still alive, contine
				if (_userAlive.indexOf(true) > -1) {
					//some players still in game
					showFeedback("<h3>Game Over "+_userNames[_curPlayerIndex]+"</h3><p>Unfortunately you have run out of luck and money! The game is over for you.</p>", "continue", 0);
				} else {
					//all over!
					_noWinner = true;
					showFeedback("<h3>Game Over</h3><p>Unfortunately you and all the other players have run out of luck and money! The game is over.</p>", "singleCompleted", 0);
				}
			} else {
				//All other options, continue
				nextQuestion();
			}

		};
		
		var onOptionAccepted = function (e) {
			_optionLabel = e.detail.label;
			showFeedback(e.detail.feedback, e.detail.action, e.detail.points);
			
		};
		
		var onSpecialContinue = function (e) {
			nextQuestion();
		};
		
		
		
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------

		window.onload = function () { onBodyLoaded(); };
	}
	
})(window));