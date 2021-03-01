const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const before = document.querySelector('.img__container--before');
const after = document.querySelector('.img__container--after');

const glide = e => {
	const posX = e.layerX;
	const containerWidth = container.offsetWidth;

	before.style.width = `${posX}px`;
	slider.style.left = `${posX}px`;

	if (posX < 50) {
		before.style.width = 0;
		slider.style.left = 0;
	}

	if (posX + 50 > containerWidth) {
		before.style.width = `${containerWidth}px`;
		slider.style.left = `${containerWidth}px`;
	}
};

container.addEventListener('mousemove', glide);
