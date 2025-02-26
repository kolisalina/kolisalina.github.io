document.addEventListener('DOMContentLoaded', function () {
	const accordionTitles = document.querySelectorAll('.accordion_title');

	accordionTitles.forEach(function (title) {
		title.addEventListener('click', function () {
			const accordionContent = document.querySelector('.accordion_content');
			const accordionText = this.nextElementSibling;

			if (accordionContent && accordionContent.classList.contains('odyn')) {
				// Close other accordions if 'odyn' class is present
				accordionTitles.forEach(function (otherTitle) {
					if (otherTitle !== title) {
						otherTitle.classList.remove('_active');
					}
				});

				// Hide other accordion texts
				document.querySelectorAll('.accordion_text').forEach(function (text) {
					if (text !== accordionText) {
						slideUp(text, 600);
					}
				});
			}

			// Toggle current accordion
			this.classList.toggle('_active');

			// Toggle slide for the current accordion text
			if (accordionText.style.display === 'none' ||
				getComputedStyle(accordionText).display === 'none') {
				slideDown(accordionText, 600);
			} else {
				slideUp(accordionText, 600);
			}
		});
	});
});

// Custom slideUp function
function slideUp(element, duration) {
	const height = element.offsetHeight;
	element.style.height = height + 'px';
	element.style.overflow = 'hidden';
	element.style.transition = `height ${duration}ms ease-in-out`;

	setTimeout(() => {
		element.style.height = '0px';
	}, 5);

	setTimeout(() => {
		element.style.display = 'none';
		element.style.height = '';
		element.style.overflow = '';
		element.style.transition = '';
	}, duration);
}

// Custom slideDown function
function slideDown(element, duration) {
	element.style.display = 'block';
	element.style.overflow = 'hidden';
	const height = element.offsetHeight;
	element.style.height = '0px';
	element.style.transition = `height ${duration}ms ease-in-out`;

	setTimeout(() => {
		element.style.height = height + 'px';
	}, 5);

	setTimeout(() => {
		element.style.height = '';
		element.style.overflow = '';
		element.style.transition = '';
	}, duration);


}