import party from 'party-js';

export const startAnimate = () => {
	const itemShare = document.querySelector('.list-group-item-share') as HTMLElement;
	if (itemShare === null) {
		return;
	}
	party.resolvableShapes['tv2logo'] = `<img src="tv2logo.png"/>`;
	party.confetti(itemShare);
	party.sparkles(itemShare);
	party.confetti(itemShare, {
		shapes: ['square', 'circle', 'roundedRectangle', 'tv2logo'],
	});
};
