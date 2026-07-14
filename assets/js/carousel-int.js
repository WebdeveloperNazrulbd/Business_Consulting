(function ($) {
	"use strict";



     //* ========== testimonial Swiper ========= */
	const team1swiper = new Swiper('.inner-team-active-1', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },		
	});

     //* ========== testimonial Swiper ========= */
	const team3swiper = new Swiper('.inner-team-active-2', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
       autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },		
	});


     //* ========== testimonial Swiper ========= */
	const testimonial1swiper = new Swiper('.bc-testimonial-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        autoplay: true,
        breakpoints: {
            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },	
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},	
	});


     //* ========== testimonial Swiper ========= */
	const testimonial2swiper = new Swiper('.bm-testimonial-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
		
	});


     //* ========== testimonial Swiper ========= */
	const testimonial3swiper = new Swiper('.ic-team-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},
        pagination: {
			el: ".oit-slider-dots",
			clickable: true,
		},
		
	});


     //* ========== slider Swiper ========= */
	const biHero = new Swiper('.bi-hero-slider-active', {
        speed: 1000,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        pagination: {
			el: ".bi-hero-slider-dots",
			clickable: true,
		},
		
	});

     //* ========== slider Swiper ========= */
	const testimonial = new Swiper('.bi-testimonial-active', {
        speed: 1000,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 1,
            },
            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},
		
	});

     //* ========== testimonial Swiper ========= */
	const teamswiper = new Swiper('.bs-team-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 6,
        spaceBetween: 25,
       autoplay: true,
        direction: 'horizontal',
        breakpoints: {
            '1600': {
                slidesPerView: 6,
            },
            '1400': {
                slidesPerView: 6,
            },
            '1200': {
                slidesPerView: 5,
            },
            '992': {
                slidesPerView: 4,
            },
            '768': {
                slidesPerView: 3,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},
        pagination: {
			el: ".oit-slider-dots",
			clickable: true,
		},
		
	});

     //* ========== testimonial Swiper ========= */
	const team2swiper = new Swiper('.bs-team-active-2', {
        speed: 1500,
        loop: true,
        slidesPerView: 6,
        spaceBetween: 25,
        autoplay: true,
        direction: 'horizontal',
        breakpoints: {
            '1600': {
                slidesPerView: 6,
            },
            '1400': {
                slidesPerView: 6,
            },
            '1200': {
                slidesPerView: 5,
            },
            '992': {
                slidesPerView: 4,
            },
            '768': {
                slidesPerView: 3,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
		
	});


     //* ========== testimonial Swiper ========= */
	const caseswiper = new Swiper('.ic-case-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        autoplay: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},
        pagination: {
			el: ".oit-slider-dots",
			clickable: true,
		},
		
	});


     //* ========== testimonial Swiper ========= */
	const case2swiper = new Swiper('.mc-case-study-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
        autoplay: true,
        breakpoints: {

            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},
        pagination: {
			el: ".oit-slider-dots",
			clickable: true,
		},
		
	});

     //* ========== testimonial Swiper ========= */
	const mctestimonialwiper = new Swiper('.mc-testimonial-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,       
        breakpoints: {

            '1600': {
                slidesPerView: 3,
                centeredSlides: true,
            },
            '1400': {
                slidesPerView: 3,
                centeredSlides: true,
            },
            '1200': {
                slidesPerView: 2,
                centeredSlides: false,
            },
            '992': {
                slidesPerView: 2,
                centeredSlides: false,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        pagination: {
			el: ".oit-slider-dots-2",
			clickable: true,
		},
		
	});

     //* ========== testimonial Swiper ========= */
	const instestimonialwiper = new Swiper('.ins-testimonial-active', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        autoplay: true,
        breakpoints: {

            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
			prevEl: '.arrow-prev',
			nextEl: '.arrow-next',
		},
		
	});


    /* ========== postbox Swiper ========= */
    const postBoxswiper = new Swiper('.postbox-img-slide-active', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        navigation: {
            prevEl: '.postbox-arrow-prev',
            nextEl: '.postbox-arrow-next',
        },
        
    })


})(jQuery);