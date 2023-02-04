import { lookupCity } from './openWeatherMapClient';

describe('OpenWeatherMapClient tests', () => {
	test('test lookup returns results', async () => {
		const copenhagen = 'Copenhagen';
		const result = await lookupCity(copenhagen);

		expect(result).not.toBeNull();
		expect(result).not.toBeUndefined();
	});
});
