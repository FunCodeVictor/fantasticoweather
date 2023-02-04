import { startAnimate } from '../fun/fireworks';

//https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words
export const degToCompass = (num: string): string => {
	const number: number = +num;
	const directions = [
		'↑ north',
		'↗ north east',
		'→ east',
		'↘ south east',
		'↓ south',
		'↙ south west',
		'← West',
		'↖ north west',
	];

	return directions[Math.round(number / 45) % 8];
};

export const alertCurrentUrl = () => {
	navigator.clipboard.writeText(document.URL);
	const shareButton = document.querySelector('#share-button');
	if (shareButton) {
		shareButton.textContent = 'Link is saved in clipboard!';
	}
	startAnimate();
};
