$(function(){

	$(document).ready(function(){

		$('.top-background-block :nth-of-type(2)').css('transform', 'rotate(30deg) translate(193px, -12px)');
		$('.top-background-block :nth-of-type(3)').css('transform', 'rotate(-15deg) translate(-1132px, -154px)');
		$('.top-background-block :nth-of-type(4)').css('transform', 'rotate(15deg) translate(290px, -35px)');
		$('.top-background-block :nth-of-type(5)').css('transform', 'rotate(20deg) translate(-908px, 300px)');
		$('.top-background-block :nth-of-type(6)').css('transform', 'rotate(-21deg) translate(404px, 121px)');
		$('.top-background-block :nth-of-type(7)').css('transform', 'rotate(15deg) translate(478px, -87px)')
		$('.description-block__tag').css('transform', 'rotate(27deg) translate(165px, -57px)');
		$('.description-block div:nth-child(3)').css('transform', 'rotate(15deg) translate(290px, -28px)');
		$('.description-block div:nth-child(4)').css('transform', 'rotate(20deg) translate(-525px, -30px)');
		$('.description-block div:nth-child(5)').css('transform', 'rotate(-20deg) translate(-170px, -55px)');
		$('.description-block div:nth-child(6)').css('transform', 'rotate(-21deg) translate(-280px, -48px)');

		$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});

		$('form').each(function(){
			$(this).validate({
				errorPlacement(error, element) {
					return true;
				},
				focusInvalid: false,
				rules: {
					Имя: {
						required: true
					},
					Телефон: {
						required: true,
					},
					Почта: {
						required: true,
						email: true
					}
				},
				submitHandler(form) {
					let th = $(form);

					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: th.serialize(),
					}).done(() => {

						th.trigger('reset');
					});

					return false;
				}
			});
		});

		var mySwiper = new Swiper ('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			  },
			breakpoints: {
				599: {
					slidesPerView: 2
				},
				1042: {
					slidesPerView: 3
				}
			}
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