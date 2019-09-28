$(function(){

	$(document).ready(function(){
		$('.top-background-block :nth-of-type(2)').css('transform', 'rotate(30deg) translateX(350px)' );
		$('.top-background-block :nth-of-type(3)').css('transform', 'rotate(-30deg) translate(-1300px, -650px)');
		$('.top-background-block :nth-of-type(4)').css('transform', 'rotate(15deg) translate(500px, 75px)');
		$('.top-background-block :nth-of-type(5)').css('transform', 'rotate(-25deg) translate(-1050px, -200px)');
		$('.top-background-block :nth-of-type(6)').css('transform', 'rotate(15deg) translate(600px, 150px)');
		$('.description-block div:nth-child(2)').css('transform', 'rotate(30deg) translateX(200px)');
		$('.description-block div:nth-child(3)').css('transform', 'rotate(15deg) translateX(400px)');
		$('.description-block div:nth-child(4)').css('transform', 'rotate(30deg) translateX(-200px)');
		$('.description-block div:nth-child(5)').css('transform', 'rotate(-15deg) translate(-250px,-155px)');
		$('.description-block div:nth-child(6)').css('transform', 'rotate(-30deg) translate(-200px, -280px)');
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

	$('body').on('click', '.button_call', function(){
		disableScroll();
		$('.popup__input_name, .popup__input_tel').removeClass('red');
		$('.popup-container_call').fadeIn();
	});

	$('body').on('click', '.popup-container_call', function(event){
		if(event.target == this) {
			enableScroll();
			$(this).fadeOut();
		}
	});

	$('body').on('click', '.examples-block__button, .top-background-block__button, .what-i-to-do-block__button ', function(){
		disableScroll();
		$('.popup__input_name, .popup__input_tel, .popup__input_email').removeClass('red');
		$('.popup-container_project').fadeIn();
	});

	$('body').on('click', '.popup-container_project', function(event){
		if(event.target == this) {
			enableScroll();
			$(this).fadeOut();
		}
	});

	$('body').on('click', '.popup-container__button_close', function(){
		enableScroll();
		$('.popup-container_call, .popup-container_project').fadeOut();
	});

	$('body').on('click', '.popup-container__button', function(){
		var name = $('.popup__input_name').val(),
			tel = $('.popup__input_tel').val(),
			email = $('.popup__input_email').val();
		if(name.length == 0) {
			$('.popup__input_name').addClass('red');
		}
		if(name.length !== 0) {
			$('.popup__input_name').removeClass('red');
		}
		if(tel.length == 0) {
			$('.popup__input_tel').addClass('red');
		}
		if(tel.length !== 0) {
			$('.popup__input_tel').removeClass('red');
		}
		if(email.length == 0) {
			$('.popup__input_email').addClass('red');
		}
		if(email.length !== 0) {
			$('.popup__input_email').removeClass('red');
		}
	});

	$('body').on('click', '.header_left__button_open-menu', function(){
		$('.header_left__button_close-menu').show();
		$('.header_left__nav').show();
		$('.header_left__button_open-menu').hide();
	});

	$('body').on('click', '.header_left__button_close-menu', function(){
		$('.header_left__button_close-menu').hide();
		$('.header_left__nav').hide();
		$('.header_left__button_open-menu').show();
	});

});