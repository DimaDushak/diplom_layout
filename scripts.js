$(function(){

	$(document).ready(function(){
		$('.top-background-block :nth-of-type(2)').css('transform', 'rotate(30deg) translate(200px, -12px)');
		$('.top-background-block :nth-of-type(3)').css('transform', 'rotate(-15deg) translate(-1050px, -100px)');
		$('.top-background-block :nth-of-type(4)').css('transform', 'rotate(15deg) translate(300px, -25px)');
		$('.top-background-block :nth-of-type(5)').css('transform', 'rotate(20deg) translate(-885px, 350px)');
		$('.top-background-block :nth-of-type(6)').css('transform', 'rotate(-20deg) translate(420px, 120px)');
		$('.description-block div:nth-child(2)').css('transform', 'rotate(27deg) translate(175px, -110px)');
		$('.description-block div:nth-child(3)').css('transform', 'rotate(15deg) translate(295px, 20px)');
		$('.description-block div:nth-child(4)').css('transform', 'rotate(20deg) translate(-520px, -30px)');
		$('.description-block div:nth-child(5)').css('transform', 'rotate(-20deg) translate(-170px, -50px)');
		$('.description-block div:nth-child(6)').css('transform', 'rotate(-20deg) translate(-270px, -95px)');
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
	};

	function enableScroll(){
		$('html, body').removeClass('hidden');
	};

	$('body').on('click', '.button_call', function(){
		disableScroll();
		$('.popup__input_name_call, .popup__input_tel_call').removeClass('red');
		$('.popup-container_call').fadeIn();
	});

	$('body').on('click', '.popup-container_call', function(event){
		if(event.target == this) {
			enableScroll();
			$(this).fadeOut();
			$('.popup__input_name_call, .popup__input_tel_call').val('');
		}
	});

	$('body').on('click', '.examples-block__button, .top-background-block__button, .what-i-to-do-block__button ', function(){
		disableScroll();
		$('.popup__input_name_project, .popup__input_tel_project, .popup__input_email').removeClass('red');
		$('.popup-container_project').fadeIn();
	});

	$('body').on('click', '.popup-container_project', function(event){
		if(event.target == this) {
			enableScroll();
			$(this).fadeOut();
			$('.popup__input_name_project, .popup__input_tel_project, .popup__input_email').val('');
		}
	});

	$('body').on('click', '.popup-container__button_close', function(){
		enableScroll();
		$('.popup-container_call, .popup-container_project').fadeOut();
		$('.popup__input_name_call, .popup__input_name_project, .popup__input_tel_call, .popup__input_tel_project, .popup__input_email').val('');
	});

	$('body').on('click', '.popup-container__button', function(){
		var nameCall = $('.popup__input_name_call').val(),
			nameProject = $('.popup__input_name_project').val(),
			telCall = $('.popup__input_tel_call').val(),
			telProject = $('.popup__input_tel_project').val(),
			email = $('.popup__input_email').val();
		if(nameCall.length == 0) {
			$('.popup__input_name_call').addClass('red');
		}
		if(nameCall.length !== 0) {
			$('.popup__input_name_call').removeClass('red');
		}
		if(nameProject.length == 0) {
			$('.popup__input_name_project').addClass('red');
		}
		if(nameProject.length !== 0) {
			$('.popup__input_name_call_project').removeClass('red');
		}
		if(telCall.length < 10) {
			$('.popup__input_tel_call').addClass('red');
		}
		if(telCall.length > 10) {
			$('.popup__input_tel_call').addClass('red');
		}
		if(telCall.length == 10) {
			$('.popup__input_tel_call').removeClass('red');
		}
		if(telProject.length < 10) {
			$('.popup__input_tel_project').addClass('red');
		}
		if(telProject.length > 10) {
			$('.popup__input_tel_project').addClass('red');
		}
		if(telProject.length == 10) {
			$('.popup__input_tel_project').removeClass('red');
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
		$('.header_right').addClass('flex-start');
	});

	$('body').on('click', '.header_left__button_close-menu', function(){
		$('.header_left__button_close-menu').hide();
		$('.header_left__nav').hide();
		$('.header_left__button_open-menu').show();
		$('.header_right').removeClass('flex-start');
	});

});