		var scrollY = 0;
		var distance = 40;
		var speed = 24;

		function autoScrollTo(element){
			//window.pageYOffset returns exact number of pixels user has scrolled counting from the top of a page
			var currentY = window.pageYOffset;
			//.offsetTop returns exact number of pixels from the top of a page to  location of targeted element
			var targetY = document.getElementById(element).offsetTop;
			//if scroll hits the bottom of a page, we want to stop scrolling
			var bodyHeight = document.body.offsetHeight;
			var yPos = currentY + window.innerHeight;

			//animation function - that's how animation is done in JS (mainly)
			var animator = setTimeout('autoScrollTo(\''+element+'\')', speed);
			//check if scroller hit the bottom of a page
			if(yPos > bodyHeight) {
				clearTimeout(animator);
			}
			//if it didn't yet hit, it means we are still have a distance to scroll to desired location
			 else {
			 	//if there is still some distance to target, increment scrolling a little bit each loop of a an animation
			 	//target - distance not to override and pass the target in the last loop
				if(currentY < targetY - distance){
					//calculate the increment that needs to be added
					scrollY = currentY + distance;
					window.scroll(0, scrollY);
					//once you hit target, stop the animation
				} else {
					clearTimeout(animator);
				}
			}

		}

		function resetScroller(element){
				var targetY = document.getElementById('header').offsetTop;
				var currentY = window.pageYOffset;
				var bodyTopPosition = 0;
				var yPos = currentY + window.innerHeight;


				var increment = 40;
				//speed of animation in ms
				var speed = 25;
				//start the animation
				var animation = setTimeout('resetScroller(\' '+element+'  \')', speed);

				//conditions 

				if(yPos < bodyTopPosition + increment/2 ){
					clearTimeout(animation);
				}else{

					if(currentY > targetY){
						var scrollY = currentY - increment;
						window.scroll(0, scrollY);
					} else{
						clearTimeout(animation);
					}
				}

		}
