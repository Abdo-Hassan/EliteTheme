$(function(){

//navbar scroll to sections
	$('.navbar .collapse .nav-link').click(function(e) {

		e.preventDefault();

		var navLink = $(this);

		$('html, body').animate({

			scrollTop : $(navLink.attr('href')).offset().top

		},1000);

	});

//trigger the nicescroll
	$("body").niceScroll({
	cursorcolor:"#ec1c23",
	cursorwidth:"8px",
	cursorborder:"#ec1c23"
	});

//make the scroll to top button
	var scroll_top = $('#scroll_top');

	$(window).scroll(function(){

		if($(this).scrollTop() >= 900){
			scroll_top.show();
		}else {
			scroll_top.hide();
		}
	}); 

	//click the button to scroll top
		scroll_top.click(function(){
			$('html,body').animate({scrollTop:0},800);
		})

//adjust slider height
	var windowH = $(window).height(),
			upperH = $('.upper-bar').innerHeight(),
			navH = $('.navbar').innerHeight();

	$('.slider, .carousel-item').height(windowH - (upperH + navH));

//featured-work shuffle images
	$('.featured-work ul li').on('click',function(){

		$(this).addClass('active').siblings().removeClass('active');

		if($(this).data('class') === 'all'){

			$('.shuffle-images .col-md').css('opacity', 1);
			
		}else{

			$('.shuffle-images .col-md').css('opacity', 0.2);

			$($(this).data('class')).parent().css('opacity', 1);
		}

	});

});