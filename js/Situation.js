((function(window) {

	window.Situation = Situation;
	
	//CONSTANTS
	//PlayersPage.STAGE_WIDTH;


		
	function Situation (mode, obj, active) {
		
		//console.log(mode, obj);
		
		// private variables
		var _this = this;
		var _filename, _optionsMenu, _spinner;
		var _playerArt = document.createElement("div");	
		var _colorstrip = document.createElement("div");	
		var _lightboxImage;
		var _timer;
		var _active = active;
		var _continueBtn = document.createElement("div");
		
		//public vars
		this.charMode = mode;
		this.div;
		this.photo = document.createElement("div");
		this.scenario = document.createElement("div");
		//this.points = 0;
		
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
			
			if (document.removeEventListener) 
				_this.div.removeEventListener(type, _this[type + 'function'], false);
  			else if(_listeners[type])   
				_this.div.detachEvent('on' + type, _this[type + 'function']);
				
		};
		// Public Functions
		//-----------------------------------------------------------------------------------------------------
		
		this.switchToSpinner = function(opLabel){
			
			//console.log("SWITCH TO SPINNER:", opLabel);
			
			//change to fade out
			_optionsMenu.div.style.display = "none";
			
			//Chagne question text
			var qText = document.getElementById("question");
			qText.innerHTML = "<span>Spin to find out</span>";
			
			//Pass in users choice to get appropriate spinner
			if (opLabel == "A")
				_spinner = new Spinner(obj.options.option[0].spinner, 0);
			else 
				_spinner = new Spinner(obj.options.option[1].spinner, 0);
			
			this.scenario.appendChild(_spinner.div);
			
			//Animate in
			TweenMax.from(_spinner.div, 0.3, {y:600,  ease:Power2.easeOut});
			
		}
		
		//Getters and Setters
		this.init = function(){
			
			//PLayer Art		
			_playerArt.id = "player-art";
			_playerArt.innerHTML = '<img width="210" height="360" alt="" src="https://games-digital-classroom.nma.gov.au/goldrush/images/players-'+this.charMode+'_zoom.png">';
			
			//Special functionality
			var specialFunc = obj.specialFunc;
			
			
			if(_active) {
			
				//Question
				var blurb = obj.blurb;
				var question = obj.question;
				
				blurb = blurb.replace(/---/g, "</p><p>"); 
				
				if (specialFunc == 'hasStockade') {
					blurb += '</p><p><strong>You decided to stay in the stockade in the previous situation.</strong>';
				} else if (specialFunc == 'noStockade') {
					blurb += '</p><p><strong>You decided to stay away from the stockade in the previous situation.</strong>';
				}
			
				this.scenario.id = "scenario";
				this.scenario.innerHTML = ' <div id="blurb"><p>'+blurb+'</p></div>';
				
				
				if (specialFunc == 'noSellGrog') {
					
					//Not selling grog, so show a continue button instead.
					this.scenario.innerHTML += ' <div id="question"><span>You are not selling sly grog.</span></div>';
					this.scenario.innerHTML += '<p>You have nothing to worry about.</p>';
					
				} else if (specialFunc == 'noStockade') {
					
					//No spinner, message instead
					this.scenario.innerHTML += '<div id="question"><span>No points lost or gained.</span></div>';
				
					
				} else {
					
					if (question != "") {
						this.scenario.innerHTML += ' <div id="question"><span>'+question+'</span></div>';
					}
					
				}
				
				
				
				//checkLicence
				//Options or special situation
				//If has A/B options
				if  (obj.options != null) {
					
					//Setup options
					var optionAObj = obj.options.option[0];
					var optionBObj = obj.options.option[1];
		
					_optionsMenu = new OptionsMenu(optionAObj, optionBObj);
					_optionsMenu.id = "options";
		
					this.scenario.appendChild(_optionsMenu.div);
					
					if (specialFunc == 'noLicence') {
						//disable option
						_optionsMenu.disableOptionA();
					} else if (specialFunc == 'hasLicence') {
						//disable option
						_optionsMenu.disableOptionB();
					}
				}
	
				
				//If spinner
				if  (obj.spinner != null && specialFunc != 'noSellGrog' && specialFunc != 'noStockade' ) {
					
					var forcedResult = 0;
					
					if (specialFunc == 'dishonestySpinner')
						forcedResult = 2;
					else if (specialFunc == 'honestySpinner')
						forcedResult = 7;
			
					//console.log("new spinner with forced: ",forcedResult);
						
					_spinner = new Spinner(obj.spinner, forcedResult);
					this.scenario.appendChild(_spinner.div);
				}
				
				//PHOTO
				_filename = obj.image;
				
				this.photo.id = "photo-"+_filename;
				this.photo.className = "photo";
				this.photo.innerHTML = '<div class="image"><img width="220" height="200" alt="" src="https://games-digital-classroom.nma.gov.au/goldrush/images/photos/'+_filename+'.png"/></div>';
				
				_colorstrip.id = "colorstrip";
			} else {
				//Player out of game	
				this.scenario.id = "scenario";
				this.scenario.innerHTML = '<div id="blurb"><p><em>You are out of the game message. Use next button in footer to continue.</em></p></div>';
			}
			//Add Content
			_this.div.appendChild(_playerArt);
			_this.div.appendChild(this.scenario);
			_this.div.appendChild(this.photo);
			_this.div.appendChild(_colorstrip);
			
			
			
			//resize
			if(_optionsMenu != null) _optionsMenu.resizeOptions();
			
			addEventListner(this.photo, 'click', onPhotoClick);
			
			if (specialFunc == 'noSellGrog' || specialFunc == 'noStockade') {
				//console.log("Add special button");
				_continueBtn.id = "special-continue-btn";
				_continueBtn.innerHTML = "Continue";
				_continueBtn.className =  "btn";
				_this.div.appendChild(_continueBtn);
				addEventListner(_continueBtn, 'click', onContinueClick);
			}
		}
		
		//Loading of lightbox image
		var testLightboxImage = function () {
		  
		   if(_lightboxImage.complete != null && _lightboxImage.complete) {
			   
				clearInterval(_timer);
				_timer = null;
				addLightboxImage();
				
		   }
		}
		
		var addLightboxImage = function() {
			
			//console.log("Loaded image");
			
			//var img = _filename.replace(".","-lrg.");
			/*var overlay = document.getElementById("lightbox");
			var imageArea = document.getElementById("imageSpace"); 
			
			imageArea.innerHTML = '<div class="close-btn">X</div><img alt="" src="images/photos/'+_filename+'.jpg">';
			overlay.style.display = "block";*/
			
			var holder = document.getElementById("lb-image");
			var container = document.getElementById("imageSpace");
			
			var w =_lightboxImage.width;
		  	var h =_lightboxImage.height; // + 30;
			
			holder.innerHTML = '';
			holder.appendChild (_lightboxImage);
			holder.style.opacity = 0;
			
			TweenMax.to(container, 0.3, {width:w, height:h, onComplete: function () {
					TweenMax.to(holder, 0.3, {opacity:1});
				}
			});
			
			
		}
		// Event Handlers			
		//----------------------------------------------------------------------------------------------
		var onPhotoClick = function (e) {
			
			//Load Image
			var img_url = 'images/photos/'+_filename+'.jpg';
			var captionTxt = "";
			
			//console.log("Load image: ",img_url);
			
			var lightbox 	= document.getElementById('lightbox');
			var container 	= document.getElementById('imageSpace');
			
			//Add image timer
			_lightboxImage = document.createElement("img");
			_lightboxImage.src = img_url;
			clearInterval(_timer);
    		_timer = null;
   			_timer = setInterval(testLightboxImage, 10);
			
			container.innerHTML = '<div class="closeBtn" id="closeLightBoxBtn">X</div><div id="lb-image"><div class="loader"><img src="images/ajax-loader.gif" alt=""/></div></div>'+captionTxt;
			lightbox.style.display = 'block';
			//lightbox.style.height = "px";
			
		};
		
		var onContinueClick = function (e) {
			
			//console.log("Click continue");
			
			var browserName=navigator.appName; 
				//console.log(browserName);
				
				if (browserName=="Microsoft Internet Explorer" || browserName=="Netscape")
				{
					var eventObj = document.createEvent("CustomEvent");
					eventObj.initCustomEvent('_specialContinue_', false, false, {
						'feedback': 'test'
					});
					
				} else {
								
					
					var eventObj = new CustomEvent(
						"_specialContinue_", 
						{
							detail: {
								feedback: 'test',
							},
							bubbles: true,
							cancelable: true
						}
					);
								
				}
								
				
				GamePage.BEACON.dispatchEvent(eventObj);
		}
		// Constructor Implementation
		//----------------------------------------------------------------------------------------------

		//Set Display class
		_this.div = document.createElement("div");
		//_this.div.className = mode + "-mode";
	
		
	
	}
	
})(window));