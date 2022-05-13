((function(window) {

	window.IntroPage = IntroPage;
	
	//CONSTANTS
	//IntroPage.STAGE_WIDTH;


		
	function IntroPage () {
		
		// private variables
		var _this = this;
		var _newspaper, _start_btn, _help_btn, _help_screen;
	
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
				
		}
		
		// Public Functions
		//-----------------------------------------------------------------------------------------------------
		this.init = function () {
			
			//Assign vars
			//_intro 	= document.getElementById("intro");
			_newspaper 	= document.getElementById("newspaper");
			_start_btn 	= document.getElementById("start-btn");
			_help_btn 	= document.getElementById("help-btn");
			_help_screen = document.getElementById("helpbox");
			
			_newspaper.style.display = 'block';
			_start_btn.style.display = 'block';
			
			//Animate
			TweenMax.from(_newspaper, 0.5, {y:60, ease: Power2.easeOut});
			TweenLite.from(_start_btn, 0.5, {delay:0.25, alpha:0, ease: Power2.easeOut});
			
			//Help Button
			addEventListner(_help_btn, 'click', onHelpClick);
			addEventListner(_help_screen, 'click', onHelpHide);
			
			
		};
		
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		var onBodyLoaded = function () {
				
			_this.init();
		}
		
		var onHelpClick = function (e) {
			
			e.preventDefault();
			
			_help_screen.style.display = 'block';
			TweenMax.from(_help_screen, 0.5, {alpha:60, ease: Power2.easeOut});
		}
		
		var onHelpHide = function () {
			
			_help_screen.style.display = 'none';
			
			console.log("hide help");
		}
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------

		window.onload = function () { onBodyLoaded(); };
	}
	
})(window));