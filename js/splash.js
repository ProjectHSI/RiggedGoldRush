((function(window) {

	window.Splash = Splash;
	
	//CONSTANTS
	//Splash.STAGE_WIDTH;


		
	function Splash () {
		
		// private variables
		var _this = this;
		var splash_frame;
		var red_panel;
		var line1;
		var line2;
		var line3;
		var line4;
		var line5;
		var btn;
		
		// Private Functions
	    //---------------------------------------------------------------------------------------------------
		
		
		// Public Functions
		//-----------------------------------------------------------------------------------------------------
		
		
		this.init = function () {
			
			//console.log("Animate");
			//Animate
			splash_frame = document.getElementById("splash");
			red_panel = document.getElementById("red-panel");
			line1 = document.getElementById("line1");
			line2 = document.getElementById("line2");
			line3 = document.getElementById("line3");
			line4 = document.getElementById("line4");
			line5 = document.getElementById("line5");
			btn = document.getElementById("goto-task");
			
			
			red_panel.style.display = 'block';
			
			TweenMax.from(splash_frame, 3.0, {alpha:0, ease: Power2.easeOut});
			TweenMax.from(red_panel, 0.5, {width:100, delay:0.3, alpha:0, ease: Power2.easeOut});
			
			TweenMax.from(line1, 0.4, {alpha:0, delay:0.5, ease: Power2.easeOut});
			TweenMax.from(line2, 0.4, {alpha:0, delay:0.65, ease: Power2.easeOut});
			TweenMax.from(line3, 0.4, {alpha:0, delay:0.8, ease: Power2.easeOut});
			TweenMax.from(line4, 0.4, {alpha:0, delay:0.95, ease: Power2.easeOut});
			TweenMax.from(line5, 0.4, {alpha:0, delay:1.1, ease: Power2.easeOut});
			
			TweenLite.from(btn, 0.6, {delay:1.25, alpha:0, ease: Power2.easeOut});
			
		};
		/*var playTextSquence = function() {
			line1.style.display = 'inline';
			
			
			//Button
			btn.style.display = 'block';
			
			
		}*/
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		var onBodyLoaded = function () {
				
			_this.init();
		}
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------

		window.onload = function () { onBodyLoaded(); };
	}
	
})(window));