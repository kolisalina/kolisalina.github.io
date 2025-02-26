const swiper = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	simulateTouch: true,

	slidesPerView: 1,
	breakpoints: {
		800: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		650: {
			slidesPerView: 2,
			spaceBetween: 20
		}
	}
});
const swiper2 = new Swiper('.cardSwiper', {
	effect: "cards",
	grabCursor: true,
	touchRatio: 1,
	obserever: true,
	observeSlideChildren: true,
	navigation: {
		nextEl: '._right',
		prevEl: '._left',
	},
	centeredSlides: true,
});