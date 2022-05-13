((function(window) {

	window.Player = Player;
	
	//CONSTANTS
	//PlayersPage.STAGE_WIDTH;


		
	function Player (id) {
		
		// private variables
		var _this = this;
		var _selected;
		var _enabled;
		var _taken = false;
		
		
		//public vars
		this.div = document.getElementById(id);
		this.hitSpace = _this.div.querySelector(".target");
		this.image = _this.div.querySelector(".image");
	
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
		var removeEventListner = function(element, type, func){
			
			if (document.removeEventListener) 
				element.removeEventListener(type, _this[type + 'function'], false);
  			else if(_listeners[type])   
				element.detachEvent('on' + type, _this[type + 'function']);
				
		};
		// Public Functions
		//-----------------------------------------------------------------------------------------------------
		//Getters and Setters
		this.enabled = function(v){
			
			if (v == undefined) return;
			
			_enabled = v;
			
			if (v) {
				addEventListner(_this.hitSpace, 'mouseover', onPlayerRollover);
				addEventListner(_this.hitSpace, 'mouseout', onPlayerRollout);
			} else {
				removeEventListner(_this.hitSpace, 'mouseover', onPlayerRollover);
				removeEventListner(_this.hitSpace, 'mouseout', onPlayerRollout);
			}
							
		};
		this.selected = function(v){
			
			if (v == undefined) return;
			
			_selected = v;
						
			if (!_taken) {
				
				_this.enabled(!_selected);
		
				//Make window appear
				var w = _this.div.querySelector(".name_window");
				w.style.display = _selected ? 'block' : 'none';
			
				//Update Cursor
				_this.hitSpace.style.cursor = _selected ? 'default' : 'pointer';
			}
				
					
		};
		this.taken = function(v){
			
			_taken = v;
			
			_this.enabled(false);
			_this.selected(false);
			
		};
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		var onPlayerRollover = function () {
			
			if (!_enabled) return;
			
				
			TweenLite.to(_this.div, 0.5, {marginTop:10, ease: Power2.easeOut});
			TweenLite.to(_this.image, 0.5, {width:175, ease: Power2.easeOut});

		};
		var onPlayerRollout = function () {
			
			if (!_enabled) return;
				
			TweenLite.to(_this.div, 0.5, {marginTop:0, ease: Power2.easeOut});
			TweenLite.to(_this.image, 0.5, {width:172, ease: Power2.easeOut});

		};
		
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------
		var elements = this.div.getElementsByClassName('label');
		var labelDiv = elements[0];
		
		labelDiv.style.pointerEvents = "none";
		
	}
	
})(window));