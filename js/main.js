'use strict';
$(document).ready(function () {
	console.log('sdfsdafsf')
	//IBG================================================
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();
	//BURGER================================================================
	$('.nav__burger').click(function (event) {
		$('.nav__list , .nav__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//FULLSCROLL=======================================================
	let $animate = false;
	const scrollTrackFS = 'html';
	const scrollToFS = '.bike';
	var position = $(scrollTrackFS).scrollTop();
	function fullScroll() {
		var scroll = $(scrollTrackFS).scrollTop();
		if (scroll > position && position == 0 && $animate == false) {
			$(scrollTrackFS).animate({
				scrollTop: $(scrollToFS).offset().top
			}, 500);
		}
		position = scroll;
	}
	$(window).scroll(function () {
		fullScroll();
	});
	//GOTO============================================================
	let itemsGT = $('[goTo]');
	$(itemsGT).click(function () {
		$('.nav__list , .nav__burger').removeClass('active');
		$('body').removeClass('lock');
		$animate = true;
		$('html').animate({
			scrollTop: $($(this).attr('goTo')).offset().top
		}, 500);
		setTimeout(() => $animate = false, 500)
	})
});
