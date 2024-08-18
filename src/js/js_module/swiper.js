/** @format */

import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

export function swiperEnable() {
	const mainCatalogCarusel = new Swiper('.additionally-slider', {
		// direction: 'horizontal',
		slidesPerView: '1',
		spaceBetween: 30,
		navigation: {
			prevEl: document.querySelector('.arrows__left'),
			nextEl: document.querySelector('.arrows__right'),
		},
		loop: true,
		preloadImages: false,
		lazy: {
			loadOnTransitionStart: true,
			loadPrevNext: true,
		},
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
	});

	// var swiper = new Swiper('.additionally-slider', {
	//     slidesPerView: 2,
	//     spaceBetween: 20,
	//     pagination: {
	//       el: '.swiper-pagination',
	//       clickable: true,
	//     },
	//     navigation: {
	//       nextEl: '.swiper-button-next',
	//       prevEl: '.swiper-button-prev',
	//     },
	//     on: {
	//       init: function () {
	//         for (let i = 0; i < this.slidesPerView; i++) {
	//           const slide = swiper.slides[swiper.activeIndex + i];
	//           const iframe = slide.querySelector('iframe');
	//           loadIframe(iframe);
	//         }
	//       },
	//       slideChange: function () {
	//         const totalSlides = swiper.slides.length;
	//         swiper.slides.forEach((slide, index) => {
	//           const iframe = slide.querySelector('iframe');
	//           if (index >= swiper.activeIndex && index < swiper.activeIndex + swiper.slidesPerView) {
	//             loadIframe(iframe);
	//           } else {
	//             unloadIframe(iframe);
	//           }
	//         });
	//       },
	//     },
	//   });
}

// function loadIframe(iframe) {
//     if (iframe.dataset.src) {
//       iframe.src = iframe.dataset.src;
//     }
//   }

//   function unloadIframe(iframe) {
//     iframe.src = '';
//   }
