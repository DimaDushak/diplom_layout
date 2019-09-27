$(function(){

	$(document).ready(function(){
		$('.top-background-block :nth-of-type(2)').css('transform', 'rotate(30deg) translateX(350px)' );
		$('.top-background-block :nth-of-type(3)').css('transform', 'rotate(-30deg) scale(0.6) translate(-1300px, -650px)');
		$('.top-background-block :nth-of-type(4)').css('transform', 'rotate(15deg) scale(0.8) translate(500px, 75px)');
		$('.top-background-block :nth-of-type(5)').css('transform', 'rotate(-25deg) scale(0.88) translate(-1050px, -200px)');
		$('.top-background-block :nth-of-type(6)').css('transform', 'rotate(15deg) scale(0.7) translate(600px, 150px)');
		$('.description-block div:nth-child(2)').css('transform', 'rotate(30deg) scale(0.9) translateX(200px)');
		$('.description-block div:nth-child(3)').css('transform', 'rotate(15deg) scale(0.8) translateX(400px)');
		$('.description-block div:nth-child(4)').css('transform', 'rotate(30deg) scale(0.8) translateX(-200px)');
		$('.description-block div:nth-child(5)').css('transform', 'rotate(-15deg) translate(-250px,-155px)');
		$('.description-block div:nth-child(6)').css('transform', 'rotate(-30deg) scale(0.7) translate(-200px, -280px)');
		var backButton = '<span class="slick-prev"></span>';
 		var nextButton = '<span class="slick-next"></span>';
		$('.responsive').slick({
			  dots: true,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  prevArrow: backButton,
   			  nextArrow: nextButton,
			  responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			        dots: true,
			        arrows: false
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			  ]
			});
	});

	function disableScroll(){
		$('html, body').addClass('hidden');
		$('body').addClass('fixed');
	};

	function enableScroll(){
		$('html, body').removeClass('hidden');
		$('body').removeClass('fixed');
	};

	$('body').on('click', '.button_call, .header_right__button_call-icon', function(){
		disableScroll();
		$('.popup-container-call').fadeIn();
		$('.popup-order-call').animate({
			'width': '285px',
			'height': '355px'
		});
	});

	$('body').on('click', '.popup-container-call', function(event){
		if(event.target == this) {
			enableScroll();
			$(this).fadeOut();
			$('.popup-order-call').animate({
				'width': '0',
				'height': '0'
			});	
		}
	});

	$('body').on('click', '.examples-block__button, .top-background-block__button, .what-i-to-do-block__button ', function(){
		disableScroll();
		$('.popup-container-project').fadeIn();
		$('.popup-order-project').animate({
			'width': '285px',
			'height': '435px'
		});
	});

	$('body').on('click', '.popup-container-project', function(event){
		if(event.target == this) {
			enableScroll();
			$(this).fadeOut();
			$('.popup-order-project').animate({
				'width': '0',
				'height': '0'
			});	
		}
	});

	$('body').on('click', '.header_left__button_open-menu', function(){
		$('.header_left__nav_mobile').show();
		$('.header_left__button_open-menu').hide();
	});

	$('body').on('click', '.header_left__button_close-menu', function(){
		$('.header_left__nav_mobile').hide();
		$('.header_left__button_open-menu').show();
	});

});