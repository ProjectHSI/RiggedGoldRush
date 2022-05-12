((function(window) {

	window.Spinner = Spinner;
	
	function Spinner (obj, forcedResult) {
		
		// private variables
		var _this = this;
		var _enabled = true;
		var _wheel;
		var _pin;
		var _spun = false;
		var _feedback, _points, _continueAction;
		
		
		var isIE = document.all?true:false;
		var _wheelOffset = 0;
		var _forcedResult = forcedResult;
			
		//public vars
		this.div;
			
		
		// Private Functions
		//--------------------------------------------------------------------------------------
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
		
		var showFeedback = function () {
			
			_wheel.style.cursor = "default";
			
			//TRIGGER EVENT FROM MAIN CLASS
			var browserName=navigator.appName; 
				//console.log(browserName);
				
				if (browserName=="Microsoft Internet Explorer" || browserName=="Netscape")
				{
					var eventObj = document.createEvent("CustomEvent");
					eventObj.initCustomEvent('_optionAccepted_', false, false, {
						'feedback': _feedback,
						'points': _points,
						'action': _continueAction
					});
					
				} else {
					
					var eventObj = new CustomEvent(
						"_optionAccepted_", 
						{
							detail: {
								feedback: _feedback,
								points: _points,
								action: _continueAction
							},
							bubbles: true,
							cancelable: true
						}
					);
				}
				GamePage.BEACON.dispatchEvent(eventObj);
		
			
		}
		
		var updateSpinnerRotation = function(mp){
			
			  var _y;
			  if (!isIE) {
				_y = mp.pageY;
			  }
			  if (isIE) {
				_y = event.clientY + document.body.scrollLeft;
			  }
			  _y = _y - _wheelOffset;
			  
			  if (_y > 345) {
				_y = 345;  
			  }
			  var rotate = _y * (345/180);
			  //console.log(_y, rotate);
			  
			  TweenMax.set(_wheel, {rotation:rotate});
			  
			 
			  
			  return true;
		}
		// Public Functions
		//-----------------------------------------------------------------------------------------------------
		
		
		
		//Getters and Setters
		this.enabled = function(v){
			
			if (v == undefined) return;
			
			_enabled = v;
				
		};
		
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		//Start Drag
		var onSpinnerStartDrag = function (e) {
			
			//e.preventDefault();
			
			//FACTOR IN IF SCROLLED!!!!
			//console.log(_wheelOffset);
			
			var rect = _wheel.getBoundingClientRect();
			_wheelOffset = rect.top;
			
		
			document.onmousemove = updateSpinnerRotation;	
			
			addEventListner(document, 'mouseup', onSpinnerStopDrag);
			
		};
		//Stop Drag
		var onSpinnerStopDrag = function (e) {
			
			//Remove spinner event listeners
			document.onmousemove = null;
			removeEventListner(_wheel, 'mousedown', onSpinnerStartDrag);
			removeEventListner(document, 'mouseup', onSpinnerStopDrag);
			
			onSpinnerRelease();			
			
		};
		
		//Stopped dragging, spin wheel
		var onSpinnerRelease = function () {
			
			if (!_spun) {
				_spun = true;
				
				var rand;
				
				//Force result to 1 if dishonest
				if (_forcedResult > 0)
					rand = _forcedResult;
				else 
					rand = Math.floor((Math.random() * 10)); 
				
				var rot = ((360*5) + (rand * 36) * -1);
				var spinNum = rand +1;
				
				_feedback = "";
				//console.log("Rand number: ",rand, "Spin Num:",spinNum, "rotation:",rot);
				
				//Map result index to rand number
				for (var r in obj.result){
					
					//console.log(obj.result[r]);
					
					if (obj.result[r].range.indexOf(spinNum) >= 0){
						
						
						
						//Setup response
						_feedback = "<h3>Spin Result: "+spinNum+"</h3><p>"+obj.result[r].feedback+"</p><h4>"+obj.result[r].pointsText+"</h4>";
						_points = obj.result[r].points;
						_continueAction = "continue";
						
						break;
						
					}
				}
				_wheel.style.cursor = "default";
				
				//Animate
				TweenMax.to(_pin,0.1,{rotation:-20, repeat:34, ease: Linear.easeNone});
				TweenMax.to(_pin,0.8,{rotation:0, delay:3.4, ease: Power2.easeOut, onComplete:showFeedback});
				TweenMax.to(_wheel,4,{rotation:rot, ease: Power2.easeOut});
			}
			
		};

		
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------
		
		_wheel = document.createElement("div");
		_wheel.className = "wheel";
		_wheel.innerHTML = '<img src="https://games-digital-classroom.nma.gov.au/goldrush/images/wheel.png" alt="" />';
		
		_pin = document.createElement("div");
		_pin.className = "pin";
		_pin.innerHTML = '<img src="https://games-digital-classroom.nma.gov.au/goldrush/images/wheel-pin.png" alt="" />';
		
		_this.div = document.createElement("div");
		_this.div.className = "spinner";		
		_this.div.appendChild(_wheel);
		_this.div.appendChild(_pin);
		
		//addEventListner(_wheel, 'click', onSpinnerRelease);
		addEventListner(_wheel, 'mousedown', onSpinnerStartDrag);
		
		//On release outside issue?
		//addEventListner(_wheel, 'mouseup', onSpinnerRelease);
		
		
		
	}
	
})(window));