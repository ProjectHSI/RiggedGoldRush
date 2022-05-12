((function(window) {

	window.OptionsMenu = OptionsMenu;
	
	//CONSTANTS
	//PlayersPage.STAGE_WIDTH;


		
	function OptionsMenu (optionA_Obj, optionB_Obj) {
		
		// private variables
		var _this = this;
		var _optionA, _optionB;
		var _options = [];
		//public vars
		this.div;
		
		//console.log(optionA_Obj, optionB_Obj);
		
		//this.hitSpace = _this.div.querySelector(".target");
		//this.image = _this.div.querySelector(".image");
		
		
		// Private Functions
	    //---------------------------------------------------------------------------------------------------
		var addEventListner = function(element, type, func){
			
			//console.log("Add event listener to ",element, type, func);
			
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
			
			//console.log("Remove event listener from ",element, type, func);
			
			if (element.removeEventListener) {
				element.removeEventListener(type, func);
			} else if (element.detachEvent) {     
				element.detachEvent('on' + type, func);
			}
				
		};
		// Public Functions
		//-----------------------------------------------------------------------------------------------------
		
		this.resizeOptions = function () {
			//Check height and make same height			
			var h = Math.max(_optionA.div.offsetHeight, _optionB.div.offsetHeight);
			
			h = h-20;
			
			_optionA.div.style.height =
			_optionB.div.style.height = h +"px";
		
		}
		this.disableOptionA = function () {
			_optionA.div.className = "option disabled";
			//remove event listner
			removeEventListner(_optionA.div, 'click', onOptionClick);
		}
		this.disableOptionB = function () {
			_optionB.div.className = "option disabled";
			//remove event listner
			removeEventListner(_optionB.div, 'click', onOptionClick);
		}
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		var onOptionClick = function (e) {
			
			
			var t = e.target; // the element
			var p = t.parentNode;
			var taken;
			var curOp;
			
			
			for (var o in _options){
				
				if(_options[o].div == t || _options[o].div == p) {
					
					//console.log(_options[o]);
					
					//removeEventListner(_options[o].div,'click', onOptionClick);
					taken = _options[o].taken;
					_options[o].enabled(false);
					curOp = _options[o];
					
				}
			}


			if (!taken) {
			
				//TRIGGER EVENT FROM MAIN CLASS
				
				var browserName=navigator.appName; 
				//console.log(browserName);
				
				if (browserName=="Microsoft Internet Explorer" || browserName=="Netscape")
				{
					var eventObj = document.createEvent("CustomEvent");
					eventObj.initCustomEvent('_optionAccepted_', false, false, {
						'feedback': curOp.feedback,
						'points': curOp.points,
						'action': curOp.continueAction,
						'label':curOp.label
					});
					
				} else {
								
					
					var eventObj = new CustomEvent(
						"_optionAccepted_", 
						{
							detail: {
								feedback: curOp.feedback,
								points: curOp.points,
								action: curOp.continueAction,
								label:curOp.label
							},
							bubbles: true,
							cancelable: true
						}
					);
								
				}
								
				
				GamePage.BEACON.dispatchEvent(eventObj);
			}

		};
		
		
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------		
		_optionA = new OptionBtn("A",optionA_Obj);
		_optionB = new OptionBtn("B",optionB_Obj);
		
		_options.push(_optionA);
		_options.push(_optionB);
		
		_this.div = document.createElement("div");
		_this.div.className = "options-menu";
		_this.div.appendChild(_optionA.div);
		_this.div.appendChild(_optionB.div);
		
		
		addEventListner(_optionA.div, 'click', onOptionClick);
		addEventListner(_optionB.div, 'click', onOptionClick);
		
		
	}
	
})(window));