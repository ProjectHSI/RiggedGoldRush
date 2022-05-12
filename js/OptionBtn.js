((function(window) {

	window.OptionBtn = OptionBtn;
	
	//CONSTANTS
	//PlayersPage.STAGE_WIDTH;


		
	function OptionBtn (label, obj) {
		
		// private variables
		var _this = this;
		
		var _text = obj.text;
		var _enabled = true;
		
				
		//public vars
		this.div;
		this.label = label;
		this.taken = false;
		this.points = obj.points;
		this.feedback;
		this.continueAction;
		
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
				_this.div.className = "option enabled";
				//addEventListner(_this.div, 'mouseover', onOptionRollover);
				//addEventListner(_this.div, 'mouseout', onOptionRollout);
				this.taken = false;
			} else {
				_this.div.className = "option ";
				this.taken = true;
				//removeEventListner(_this.div, 'mouseover', onOptionRollover);
				//removeEventListner(_this.div, 'mouseout', onOptionRollout);
			}
			
			//console.log("Enabled: ",_enabled);
				
		};
		
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		/*var onOptionClick = function (e) {
			
			console.log("Clicked Option ",e);
			
		
		};*/
		
		
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------
		//Setup Feedback
		this.feedback = "<h3>Option "+label+"</h3><p>"+obj.feedback+"</p><h4>"+obj.pointsText+"</h4>";	
		this.continueAction = obj.action;
		
		//Display
		_this.div = document.createElement("div");
		_this.div.id = "op"+label;
		_this.div.className = "option enabled";
		_this.div.innerHTML = '<div class="label">'+label+'</div><div class="text">'+_text+'</div>';
		
		//addEventListner(_this.div, 'click', onOptionClick);
		
		
	}
	
})(window));