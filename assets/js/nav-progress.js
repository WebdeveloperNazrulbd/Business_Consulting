
	
	const navItems = document.querySelectorAll('.nav-item');
	const sections = [];

	navItems.forEach(item => {
		const id = item.dataset.target;
		const el = document.getElementById(id);
		if (el) sections.push({ id, el, navItem: item });

		
		item.addEventListener('click', () => {
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
		const scrollY = smoother ? smoother.scrollTop() : window.scrollY;

		let activeIdx = 0;
		sections.forEach((s, i) => {
			if (scrollY + 150 >= s.el.offsetTop) activeIdx = i;
		});

		sections.forEach((s, i) => {
			s.navItem.classList.remove('active', 'done');
			if (i < activeIdx) s.navItem.classList.add('done');
			else if (i === activeIdx) s.navItem.classList.add('active');
		});
	}

	
	ScrollTrigger.create({
		trigger: document.body,
		start: "top top",
		end: "bottom bottom",
		onUpdate: updateProgress
	});

	
	window.addEventListener('scroll', updateProgress);

	updateProgress();