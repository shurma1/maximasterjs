export const validateNumberInRange = (
	value: string,
	min: number,
	max: number,
	errorMessage: string
): Promise<void> => {
	if (!value) return Promise.resolve();

	const num = Number(value);
	if (isNaN(num)) {
		return Promise.reject(errorMessage);
	}

	if (num <= min || num >= max) {
		return Promise.reject(errorMessage);
	}

	return Promise.resolve();
};
