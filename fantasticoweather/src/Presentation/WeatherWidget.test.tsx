import { render } from '@testing-library/react';
import WeatherWidget from './WeatherWidget';
import each from 'jest-each';
import {
	WEATHER_WIDGET_HUMIDITY,
	WEATHER_WIDGET_TEMPERATURE,
	WEATHER_WIDGET_TEMPERATURE2,
	WEATHER_WIDGET_WIND,
} from '../constants/strings';

describe('Weather widget tests', () => {
	each([
		['Copenhagen', '5', '65', '11 east'],
		['Barcelona', '23', '20', '4 vest'],
	]).it(
		'Weather widget renders with provided values city %s, temp %s, humidity %s, wind %s',
		async (city: string, temp: string, humid: string, wind: string) => {
			await render(<WeatherWidget city={city} temperature={temp} humidity={humid} wind={wind} />);

			const panelHeading = document.querySelector('.panel-heading');
			expect(panelHeading).not.toBeNull();
			expect(panelHeading?.textContent).toBe('Weather in ' + city);

			const groupItems = document.querySelectorAll('.list-group-item');
			expect(groupItems).not.toBeNull();
			expect(groupItems.length).toBe(5);
			expect(groupItems[0].textContent).toBe(
				WEATHER_WIDGET_TEMPERATURE + ' ' + temp + WEATHER_WIDGET_TEMPERATURE2
			);
			expect(groupItems[1].textContent).toBe(WEATHER_WIDGET_HUMIDITY + ' ' + humid);
			expect(groupItems[2].textContent).toBe(WEATHER_WIDGET_WIND + ' ' + wind);
		}
	);
});
