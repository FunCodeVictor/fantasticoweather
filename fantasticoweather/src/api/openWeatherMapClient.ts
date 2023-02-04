import { validateResponse } from '../validators/openWeatherMapValidator';
import { generateURL, responseToOpenWeatherMapResponse } from './openWeatherMapHelper';

/*
Example json response:
{
    coord: { lon: 12.5655, lat: 55.6759 },
    weather: [
        {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d'
        }
    ],
    base: 'stations',
    main: {
        temp: 273.18,
        feels_like: 268.49,
        temp_min: 272.49,
        temp_max: 274.24,
        pressure: 1040,
        humidity: 63
    },
    visibility: 10000,
    wind: { speed: 4.63, deg: 360 },
    clouds: { all: 72 },
    dt: 1675515450,
    sys: {
    type: 2,
    id: 2035645,
    country: 'DK',
    sunrise: 1675493908,
    sunset: 1675525724
    },
    timezone: 3600,
    id: 2618425,
    name: 'Copenhagen',
    cod: 200
}
*/

export const lookupCity = async (city: string): Promise<OpenWeatherMapResponse> => {
	const url = generateURL(city);

	const response = await fetch(url);

	const jsonData = await response.json();

	if (response.ok) {
		validateResponse(jsonData);
		return responseToOpenWeatherMapResponse(city, jsonData);
	} else if (response.status === 404) {
		alert('Unfortunately we did not find a city with the provided input');
	}

	throw Error('Response failed with status code: ' + response.status);
};
