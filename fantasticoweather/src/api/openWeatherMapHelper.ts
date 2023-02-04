import { OPEN_WEATHER_MAP_API_KEY, OPEN_WEATHER_MAP_ENDPOINT } from '../constants/secrets';
import { OPEN_WEATHER_MAP_UNITS } from '../constants/strings';
import { updateUI } from '../Presentation/WeatherWidgetHelper';
import { degToCompass } from '../utils/utils';
import { validateInputValue } from '../validators/openWeatherMapValidator';
import { lookupCity } from './openWeatherMapClient';

export const searchOnCity = async (e: any): Promise<void> => {
	e.preventDefault();

	const inputFieldCity = document.getElementById('city') as HTMLInputElement;
	if (inputFieldCity === null) {
		throw Error('Input field is null');
	}

	if (!inputFieldCity.value) {
		return;
	}

	const inputValue = inputFieldCity.value;

	if (validateInputValue(inputValue)) {
		search(inputFieldCity.value);
	} else {
		alert('Please only input alphabetical input');
	}
};

const search = async (city: string): Promise<void> => {
	const lookupResponse = await lookupCity(city);

	updateUI({
		city: lookupResponse.city,
		temperature: lookupResponse.temperature,
		humidity: lookupResponse.humidity,
		windSpeed: lookupResponse.windSpeed,
		windDegree: lookupResponse.windDegree,
	});
};

export const getDefaultOpenWeatherMapResponse = async (): Promise<void> => {
	const cityParam = new URL(document.URL).searchParams.get('city');
	if (cityParam !== null && validateInputValue(cityParam)) {
		search(cityParam);
	} else {
		search('Copenhagen');
	}
};

export const generateURL = (city: string): string => {
	const params = 'q=' + city + '&appid=' + OPEN_WEATHER_MAP_API_KEY + '&units=' + OPEN_WEATHER_MAP_UNITS;

	return encodeURI(OPEN_WEATHER_MAP_ENDPOINT + '?' + params);
};

export const responseToOpenWeatherMapResponse = (city: string, jsonData: any): OpenWeatherMapResponse => {
	const main = jsonData['main'];
	const wind = jsonData['wind'];
	return {
		city: city,
		temperature: main['temp'],
		humidity: main['humidity'],
		windSpeed: wind['speed'],
		windDegree: wind['deg'],
	};
};

export const openWeatherToWeatherProps = (openWeather: OpenWeatherMapResponse): WeatherWidgetProps => {
	return {
		city: openWeather.city,
		temperature: openWeather.temperature,
		humidity: openWeather.humidity,
		wind: openWeather.windSpeed + ' m/s ' + degToCompass(openWeather.windDegree),
	};
};

export const getEmptyWeatherWidgetProps = (): WeatherWidgetProps => {
	return {
		city: '',
		temperature: '',
		humidity: '',
		wind: '',
	};
};
