/**************************************************
==================== JS START HERE ================
***************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	// ===== PRELOADER CONTROL =====
	windowOn.on("load", function () {
		setTimeout(() => {
			gsapHandeller();

			$(".preloader").fadeOut(500);
		}, 1500);
	});

	//  scroll-to-target
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 500) {
			$('.scroll-to-target').removeClass('open');
		} else {
			$('.scroll-to-target').addClass('open');
		}
	});

	//  Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);
		});
	}


	// ===== offcanvas js =====
	$(function () {
		let $offcanvas = $('.oit-offcanvas-area');
		let $overlay = $('.body-overlay');

		$('.oit-menu-bar').on('click', function () {
			$offcanvas.addClass('opened');
			$overlay.addClass('apply');
		});

		$('.close-btn, .body-overlay').on('click', function () {
			$offcanvas.removeClass('opened');
			$overlay.removeClass('apply');
			$('.search__popup').removeClass('search-opened');
		});
	});


	// mobile menu
	(() => {
		if (!$('.oit-menu-content').length || !$('.oit-menu-mobile').length) return;
		const $mobileMenuContainer = $('.oit-menu-mobile');
		const $desktopMenuContent = $('.oit-menu-content');
		$mobileMenuContainer.html($desktopMenuContent.html());
		$mobileMenuContainer.find('.has-dropdown > a').append(`
			<button class="dropdown-toggle-btn">
				<i class="fal fa-angle-right"></i>
			</button>
		`);
		$mobileMenuContainer.on('click', '.dropdown-toggle-btn', function (event) {
			event.preventDefault();
			const $toggleButton = $(this);
			const $menuItem = $toggleButton.closest('.has-dropdown');
			const $submenu = $menuItem.children('.oit-submenu');
			$menuItem
				.toggleClass('expanded')
				.siblings('.has-dropdown')
				.removeClass('expanded')
				.children('.oit-submenu')
				.slideUp();
			$submenu.stop(true, true).slideToggle();
		});
	})();


	// Common Js
	function applyDataStyle(attribute, cssProperty, isUrl = false) {
		$(`[data-${attribute}]`).each(function () {
			const value = $(this).data(attribute);
			$(this).css(
				cssProperty,
				isUrl ? `url(${value})` : value
			);
		});
	}

	// Usage
	applyDataStyle('background', 'background-image', true);
	applyDataStyle('width', 'width');
	applyDataStyle('bg-color', 'background-color');
	applyDataStyle('text-color', 'color');


	// Nice Select Js
	$('select').niceSelect();


	// Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});


	//  isotope
	$('.grid').imagesLoaded(function () {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			},
		});

		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 100,
					easing: "linear",
					queue: true
				}
			});
		});

		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});


	//  MagnificPopup video view Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	//  magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Cart Quantity
	$('.cart-minus, .cart-plus').on('click', function (e) {
		e.preventDefault();

		const $input = $(this).siblings('input');
		let value = Number($input.val()) || 1;

		value = $(this).hasClass('cart-plus')
			? value + 1
			: Math.max(1, value - 1);

		$input.val(value).trigger('change');
	});


	// Checkout Toggle
	$('#showlogin, #cbox, #showcoupon').on('click', function (e) {

		if (this.id !== 'cbox') {
			e.preventDefault();
		}

		const targetMap = {
			showlogin: '#checkout-login',
			cbox: '#cbox_info',
			showcoupon: '#checkout_coupon',
		};

		$(targetMap[this.id]).stop(true, true).slideToggle(300);
	});

	// ScrollSmoother
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, CustomEase);

	if ($('#smooth-wrapper, #smooth-content').length === 2) {
		gsap.config({ nullTargetWarn: false });

		ScrollSmoother.create({
			smooth: 1.35,
			effects: true,
			smoothTouch: 1,
			normalizeScroll: false
		});
	}


	function gsapHandeller() {

		// gsap common variable
		let tl = gsap.timeline();
		let mm = gsap.matchMedia();

		/* ========= rotate ANIMATION ========= */
		document.querySelectorAll('.rotate-on-scroll').forEach(el => {
			const section = el.closest('.rotate-section');
			if (!section) return;
			ScrollTrigger.create({
				trigger: section,
				start: "top bottom",
				end: "bottom top",
				onUpdate: self => {
					const rotation = 360 * self.progress;
					el.style.transform = `rotate(${rotation}deg)`;
				}
			});
		});

		/* ========== FADE ANIMATION ========== */
		gsap.utils.toArray(".fade-anim").forEach(item => {
			const offset    = item.getAttribute("data-fade-offset") || 40,
				duration    = item.getAttribute("data-duration") || 0.75,
				direction   = item.getAttribute("data-fade-from") || "bottom",
				onScroll    = item.getAttribute("data-on-scroll") || "1",
				delay       = item.getAttribute("data-delay") || 0.15,
				ease        = item.getAttribute("data-ease") || "power2.out";

			const animSettings = {
				opacity: 0,
				ease,
				duration,
				delay,
				x: direction === "left" ? -offset : direction === "right" ? offset : 0,
				y: direction === "top" ? -offset : direction === "bottom" ? offset : 0,
			};

			if (onScroll === "1") {
				animSettings.scrollTrigger = {
					trigger: item,
					start: "top 85%"
				};
			}
			gsap.from(item, animSettings);
		});

		//  handle data-speed attr
		let speedXTriggers = [];

		function initSpeedX() {
			speedXTriggers.forEach(st => st.kill());
			speedXTriggers = [];
			if (window.innerWidth < 1200) return;
			gsap.utils.toArray("[data-speed-x]").forEach(el => {
				const speedX = parseFloat(el.dataset.speedX) || 0;
				const st = ScrollTrigger.create({
					trigger: el,
					scrub: true,
					onUpdate: (self) => {
						const progress = self.progress;
						const move = progress * speedX * 300;
						gsap.set(el, { x: -move });
					}
				});
				speedXTriggers.push(st);
			});
		}

		function handleDataSpeedAttr() {
			const elements = document.querySelectorAll("[data-speed], [data-speed-original]");
			elements.forEach(el => {
				if (!el.dataset.speedOriginal && el.dataset.speed) {
					el.dataset.speedOriginal = el.dataset.speed;
				}
				if (window.innerWidth < 1200) {
					el.removeAttribute("data-speed");
				} else {
					if (el.dataset.speedOriginal) {
						el.setAttribute("data-speed", el.dataset.speedOriginal);
					}
				}
			});
			initSpeedX();
		}

		handleDataSpeedAttr();

		windowOn.on("resize", function () {
			handleDataSpeedAttr();
			ScrollTrigger.refresh();
		});


		/* ========== custom pin section ========== */
		let panels = document.querySelectorAll('.oit-panel-pin');
		panels.forEach((section) => {
			let defaultStart    = "top 10%";
			let defaultEnd      = "bottom 100%";
			let defaultMinWidth = "1199px";

			let startVal  = section.dataset.start    || defaultStart;
			let endVal    = section.dataset.end      || defaultEnd;
			let minWidth  = section.dataset.minWidth || defaultMinWidth;

			if (!window.matchMedia(`(min-width: ${minWidth})`).matches) return;

			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: startVal,
					end: endVal,
					endTrigger: '.oit-panel-pin-area',
					pinSpacing: false,
					markers: false,
				}
			});
		});

		/* ========== simple panel pin ========== */
		mm.add("(min-width: 1199px)", () => {
			let otherSections = document.querySelectorAll('.simple-panel-pin')
			otherSections.forEach((section, index) => {
				tl.to(section, {
					scrollTrigger: {
						trigger: section,
						pin: section,
						scrub: 1,
						start: 'top 10%',
						end: "bottom 100%",
						endTrigger: '.panel-pin-area',
						pinSpacing: false,
						markers: false,
					},
				})
			})
		});


		document.querySelectorAll(".words-rotate").forEach((el) => {

			// Split words
			new SplitType(el, {
				types: "words",
				tagName: "span"
			});

			// Wrap every word
			el.querySelectorAll(".word").forEach((word) => {
				const wrap = document.createElement("span");
				wrap.className = "word-wrap";
				word.parentNode.insertBefore(wrap, word);
				wrap.appendChild(word);
			});

			// Get custom delay
			const delay = parseFloat(el.getAttribute("data-delay")) || 0;

			// Animate
			gsap.to(el.querySelectorAll(".word"), {
				scrollTrigger: {
					trigger: el,
					start: "top 85%"
				},
				opacity: 1,
				rotationX: 0,
				duration: 0.7,
				delay: delay,
				ease: "cubic-bezier(.26,-0.14,0,1.01)",
				stagger: 0.06
			});
		});

		document.querySelectorAll(".scale-up-img").forEach((section) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top bottom",
					end: "bottom center",
					scrub: 1,
					markers: false,
				},
			});
			tl.to(section.querySelector(".scale-up"), {
				scale: 1.15,
				duration: 1,
			});
		});

		/* ========== REFRESH ========= */
		ScrollTrigger.refresh();
	}


	// ===== Progress Wrapper =====
	if ($('.progress-wrapper').length) {
		$(function () {
			const accordionButtons = document.querySelectorAll(
				"#accordionExample3 .accordion-button"
			);
			const progressBar   = document.querySelector(".progress-bar");
			const progressText  = document.getElementById("progressText");
			const radius        = 260;
			const circumference = 2 * Math.PI * radius;

			progressBar.style.strokeDasharray = circumference;

			function setProgress(percent) {
				const offset = circumference - (percent / 100) * circumference;
				progressBar.style.strokeDashoffset = offset;
				progressText.innerText = percent + "%";
			}

			setProgress(33);

			$(accordionButtons).each(function (index) {
				$(this).on('click', function () {
					let percent = 0;
					if (index === 0)      percent = 33;
					else if (index === 1) percent = 66;
					else if (index === 2) percent = 100;
					setProgress(percent);
				});
			});
		});
	}


	// ===== CASE STUDY NAV PROGRESS (ScrollSmoother compatible) =====
	const navItems = document.querySelectorAll('.nav-item');
	const sections = [];

	// vanilla addEventListener('click') → jQuery .on('click')
	navItems.forEach(item => {
		const id = item.dataset.target;
		const el = document.getElementById(id);
		if (el) sections.push({ id, el, navItem: item });

		$(item).on('click', function () {
			if (!el) return;
			const smoother = ScrollSmoother.get();
			if (smoother) {
				smoother.scrollTo(el, true, "top 100px");
			} else {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	function updateProgress() {
		const smoother = ScrollSmoother.get();
		const scrollY  = smoother ? smoother.scrollTop() : window.scrollY;

		let activeIdx = 0;
		sections.forEach((s, i) => {
			if (scrollY + 150 >= s.el.offsetTop) activeIdx = i;
		});

		sections.forEach((s, i) => {
			s.navItem.classList.remove('active', 'done');
			if (i < activeIdx)      s.navItem.classList.add('done');
			else if (i === activeIdx) s.navItem.classList.add('active');
		});
	}

	ScrollTrigger.create({
		trigger: document.body,
		start: "top top",
		end: "bottom bottom",
		onUpdate: updateProgress
	});

	// vanilla addEventListener('scroll') → jQuery .on('scroll')
	windowOn.on('scroll', updateProgress);

	updateProgress();


	// data mask
	if ($('[data-mask-src]').length > 0) {
		$('[data-mask-src]').each(function () {
			var mask = $(this).attr('data-mask-src');
			$(this).css({
				'mask-image': 'url(' + mask + ')',
				'-webkit-mask-image': 'url(' + mask + ')'
			});
			$(this).removeAttr('data-mask-src');
		});
	}


})(jQuery);