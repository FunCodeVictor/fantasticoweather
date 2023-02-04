export const validateInputValue = (inputValue: string): boolean => {
	var reg = /^[a-z\s]+$/i;

	if (reg.test(inputValue)) {
		return true;
	}

	return false;
};

export const validateResponse = (jsonData: any): boolean => {
	const objectKeys = Object.keys(jsonData);
	if (!objectKeys.includes('main')) {
		throw new Error('response does not contain main');
	}

	const mainKeys = Object.keys(jsonData['main']);

	if (!mainKeys.includes('humidity')) {
		throw new Error('main does not contain humidity');
	}

	if (!mainKeys.includes('temp')) {
		throw new Error('main does not contain temperature');
	}

	if (!objectKeys.includes('wind')) {
		throw new Error('response does not contain wind');
	}

	const windKeys = Object.keys(jsonData['wind']);

	if (!windKeys.includes('speed')) {
		throw new Error('response does not contain wind speed');
	}

	if (!windKeys.includes('deg')) {
		throw new Error('response does not contain wind deg');
	}

	return true;
};
