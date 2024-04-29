import Swiper from 'swiper/bundle';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
	// Optional parameters

	loop: true,
  
	slidesPerView: 1,
	spaceBetween: 16,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	breakpoints: {
		415: {
			slidesPerView: 2,
			spaceBetween: 24,
		  },
        730: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
		930: {
			slidesPerView: 4,
			spaceBetween: 24,
		  },
      },
  });


// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
