import each from 'jest-each';
import { validateInputValue, validateResponse } from './openWeatherMapValidator';

describe('Validator tests', () => {
	each([
		['Copenhagen', true],
		['Barcelona', true],
		['Barc3lona', false],
		['', false],
		['1243124', false],
		['Sierra Leone', true],
	]).it(
		'validateInputValue should only contain characters and space is allowed, input %s, expected result %s',
		(inputValue: string, expectedValue: boolean) => {
			expect(validateInputValue(inputValue)).toBe(expectedValue);
		}
	);

	each([
		[
			{
				main: {
					humidity: '1',
					temp: '2',
				},
				wind: {
					speed: '2',
					deg: '5',
				},
			},
			true,
		],
		[
			{
				wind: {
					speed: '2',
					deg: '5',
				},
			},
			false,
		],
		[
			{
				main: {
					temp: '2',
				},
				wind: {
					speed: '2',
					deg: '5',
				},
			},
			false,
		],
		[
			{
				main: {
					humidity: '1',
				},
				wind: {
					speed: '2',
					deg: '5',
				},
			},
			false,
		],
		[
			{
				main: {
					humidity: '1',
					temp: '2',
				},
			},
			false,
		],
		[
			{
				main: {
					humidity: '1',
					temp: '2',
				},
				wind: {
					deg: '5',
				},
			},
			false,
		],
		[
			{
				main: {
					humidity: '1',
					temp: '2',
				},
				wind: {
					speed: '5',
				},
			},
			false,
		],
	]).it(
		'validateResponse should contain all expected response values, otherwise throw error, input %s, expected result %s',
		(inputValue: string, expectedValue: boolean) => {
			if (expectedValue === true) {
				expect(validateResponse(inputValue)).toBe(true);
			} else {
				expect(() => {
					validateResponse(inputValue);
				}).toThrow(Error);
			}
		}
	);
});
