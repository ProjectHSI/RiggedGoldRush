((function(window) {

	window.PlayersPage = PlayersPage;
	
	//CONSTANTS
	//PlayersPage.STAGE_WIDTH;


		
	function PlayersPage () {
		
		// private variables
		var _this = this;
		var sub_header, players, _help_btn, _help_screen,  _next_window, add_player_btn, start_btn, pHeader;
		//police_btn, woman_btn, chinaman_btn, brit_btn,
		var _players = [];
		var _userChars = [];
		var _userNames = [];
		var _ttPlayers = 0;
		
		// Private Functions
	    //---------------------------------------------------------------------------------------------------
		var addEventListner = function(element, type, func){
			
			if(window.addEventListener){
				//Non IE8
				//console.log("Add event listener to ",element, type, func); 
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
		var removeEventListner = function(element, type, func){
			
			if (element.removeEventListener) {
			    //console.log("Remove event listener from ",element, type, func); 
				element.removeEventListener(type, func);
			} else if (element.detachEvent) {     
				element.detachEvent('on' + type, func);
			}
				
		};
		// Public Functions
		//-----------------------------------------------------------------------------------------------------

		this.init = function () {
			
			//Assign vars
			_help_btn 	= document.getElementById("help-btn");
			_help_screen = document.getElementById("helpbox");
			sub_header  = document.getElementById("sub-header");
			players		= document.getElementById("players");
			_next_window = document.getElementById("overlay");
			add_player_btn = document.getElementById("add-btn");
			start_btn 	= document.getElementById("start-btn");
			pHeader		= document.getElementById("player-turn");
			
			var ids = ["policeman","woman","chinaman","brit"];
			//Instantiate players
			for (var i = 0; i <= 3; i++) {
				var p = new Player(ids[i]);
				addEventListner(p.hitSpace, 'click', onPlayerClick);
				p.enabled(true);
				p.selected(false);
				_players.push(p);
			}
			
			players.style.display = 'block';
			_next_window.style.display = 'none';
			
			//Add Events
			addEventListner(_help_btn, 'click', onHelpClick);
			addEventListner(_help_screen, 'click', onHelpHide);
			addEventListner(add_player_btn, 'click', onAddPlayer);
			addEventListner(start_btn, 'click', onStart);
			
			//Cancel Btn
			var cancelBtns = players.querySelectorAll('.cancel-btn'); 
			for (i = 0, length = cancelBtns.length; i < length; i++) {
				addEventListner(cancelBtns[i], 'click', onCancelClick);
			}
			
			//OK Btn
			var okBtns = players.querySelectorAll('.ok-btn'); 
			for (i = 0, length = okBtns.length; i < length; i++) {
				addEventListner(okBtns[i], 'click', onOKClick);
			}
			
			//Animate
			TweenMax.from(sub_header, 0.5, {y:-20, alpha:0, ease: Power2.easeOut});
			TweenMax.from(players, 1, {y:40, ease: Power2.easeOut});
		

		};
		
		var startGame = function () {
			
			//get vars
			var query = "";
			
			for (var i = 0; i < _userChars.length; ++i ) {
				query += "p"+(i+1)+"char="+_userChars[i]; 
				query += "&";
				query += "p"+(i+1)+"name="+encodeURIComponent(_userNames[i]);
				query += "&";
			}

			//Assign vars
			window.location="game.html?"+query;
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
		
		var onPlayerClick = function (e) {
			
			//console.log("Player Click ",e.target);
			
			//Set selected mode to all players
			for (var p in _players){
				_players[p].selected(_players[p].hitSpace == e.target);
			}

		};
		var onCancelClick = function (e) {
			
			var t = e.target;
    		var w = t.parentNode;
			var player = t.parentNode.parentNode;
			
			w.style.display = 'none';
			
			for (var p in _players){
				if(_players[p].div === player) {
					_players[p].selected(false);
				}
			}
	
		};
		
		var onOKClick = function (e) {
			
			var t 		= e.target;
    		var w 		= t.parentNode;
			var player 	= t.parentNode.parentNode;
			var id 		= player.id;
			var img 	= player.querySelector('.image');
			
			w.style.display = 'none';
			
			_ttPlayers++;
			
			//Get the name value from input
			var input_fld = w.querySelector('input').value;
			if (input_fld == "") {
				input_fld = "Player "+	_ttPlayers;
			}
			
			//Upate vars
			_userNames.push(input_fld);
			_userChars.push(id);
			
			//Show in Label
			var label = player.querySelector('.txt');
			label.innerHTML = input_fld;
			
			//Set Character to taken
			player.className = player.className + " disabled";
			TweenMax.to(player, 0.5, {marginTop:-5, ease: Power2.easeOut});
			TweenMax.to(img, 0.5, {width:170, ease: Power2.easeOut});
			
			for (var p in _players){
				if(_players[p].div === player) {
					_players[p].taken(true);
					//removeEventListner(_players[p].hitSpace, 'click', onPlayerClick);
				}
			}
			//Show next step overlay
			//hide add btn if all players added & show mesage instead...
			if(_ttPlayers == 4){
				//Auto Start... startGame();
				_next_window.className = 'lastMode';	
			} else {
				//
			}
			_next_window.style.display = 'block';
			TweenMax.from(_next_window, 0.3, {alpha:0, ease: Power2.easeOut});
			
		};
		
		var onAddPlayer = function (e) {
			
			pHeader.innerHTML = "Player "+ (_ttPlayers +1);						
			_next_window.style.display = 'none';
			
		};
		var onStart = function (e) {
					
					
			//animate out
			/*var pm = document.getElementById("player-menu");
			var c = document.getElementById("content");
			c.style.backgroundColor = "#e4dac0";*/
			
			//TweenMax.to(_next_window, 0.2, {alpha:0, ease: Power2.easeOut});
			//TweenMax.to(pm, 0.1, {alpha:0, delay:0.1, ease: Power2.easeOut, onComplete:startGame});
			startGame();
		};
		
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------

		window.onload = function () { onBodyLoaded(); };
	}
	
})(window));