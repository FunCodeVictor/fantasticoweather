import { openWeatherToWeatherProps } from '../api/openWeatherMapHelper';
import {
	WEATHER_WIDGET_HEADER,
	WEATHER_WIDGET_TEMPERATURE,
	WEATHER_WIDGET_HUMIDITY,
	WEATHER_WIDGET_WIND,
	WEATHER_WIDGET_TEMPERATURE2,
} from '../constants/strings';
import { startAnimate } from '../fun/fireworks';

export const updateUI = (openWeatherMapResponse: OpenWeatherMapResponse): void => {
	const weatherWidgetProps = openWeatherToWeatherProps(openWeatherMapResponse);

	const panelHeading = document.querySelector('.panel-heading');
	if (panelHeading) {
		panelHeading.innerHTML = WEATHER_WIDGET_HEADER + ' <b>' + weatherWidgetProps.city + '</b>';
	}

	const groupItems = document.querySelectorAll('.list-group-item');

	if (groupItems && groupItems.length === 5) {
		groupItems[0].innerHTML =
			WEATHER_WIDGET_TEMPERATURE + ' <b>' + weatherWidgetProps.temperature + WEATHER_WIDGET_TEMPERATURE2 + '</b>';
		groupItems[1].innerHTML = WEATHER_WIDGET_HUMIDITY + ' <b>' + weatherWidgetProps.humidity + '</b>';
		groupItems[2].innerHTML = WEATHER_WIDGET_WIND + ' <b>' + weatherWidgetProps.wind + '</b>';
	}

	window.history.replaceState(null, openWeatherMapResponse.city, '/?city=' + openWeatherMapResponse.city);
	const shareButton = document.querySelector('#share-button');
	if (shareButton) {
		shareButton.textContent = 'Share displayed weather';
	}
	startAnimate();
};
