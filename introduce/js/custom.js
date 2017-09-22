(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});
	//导航条离页面顶部距离超过50 去掉透明度
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
		/*
		if($(this).scrollTop()>$("#intro").outerHeight(true)*2){
			$("canvas").hide();
		}else{
			$("canvas").show();
		}
		*/
	});


	//为锚点跳转添加过渡
	$(function() {
		$('.navbar-nav li a,.slogan a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a,.slogan a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	//$(".slogan h3").css({"margin-top":($("#information").offset().top-$(".slogan h2").offset().top-$(".slogan h2").outerHeight(true))/2});
	//console.log($(".slogan h3"));
})(jQuery);
