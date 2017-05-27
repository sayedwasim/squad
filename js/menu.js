jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
		
	//open/close lateral navigation
	$('.nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			$('body').toggleClass('navigation-is-open');
			$('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
		
		if($('body').hasClass("navigation-is-open")){
			$('.nav-icon-text').text("Close");
			$(".back-top").hide();
		}
		else {
			$('.nav-icon-text').text("Menu");
			if($(window).width() > 1044){
				$(".back-top").show();
			}
		}
		
	});
	
	/*--- Back to top ---*/
	var offset = 300,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.back-top');

	//hide or show the "back to top" link
	$("#main_wrapper").scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible');
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('#main_wrapper').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
});

$(window).load(function() {
	
	// Links
	$('a').on('click', function(){
		var object = $(this);

		if(object.attr('target')!= '_blank' && object.attr('href') != '' && object.attr('href') != 'javascript:void(0)' && object.attr('href').indexOf('mailto') == -1){
			// If Hashtag
			if(object.attr('href').indexOf('#') > -1){
				var url_parts = object.attr('href').split('#');
				if(window.location.href.indexOf(url_parts[0]) == -1){
					var pageLoc = object.attr('href');
					$('#loading-mask').fadeIn(750, function(){
						window.location.href = pageLoc;
					});

					return false;
				}
			}
			// If No Hashtag
			else {
				var pageLoc = object.attr('href');
				$('#loading-mask').fadeIn(750, function(){
					window.location.href = pageLoc;
				});

				return false;
			}
		}	
	});
	
	$("#loader-wrapper").fadeOut();
});