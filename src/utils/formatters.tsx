/**
 * It formats the numeric values and returns a formatted value
 * @param value the value that is required to be formatted
 * @param fixedUpto  Upto the number of decimal places to be fixed
 * @returns an object that contains the formatted value and the Unit
 */
export const valueFormatter = (value: number, fixedUpto: number = 2) => {
	if (Math.abs(value) < 10000) {
		return { formattedValue: value.toFixed(fixedUpto), unit: '' };
	}

	const units = ['K', 'M', 'B'];
	let unitIndex = -1;
	let formattedValue = value;

	while (formattedValue >= 1000 && unitIndex < units.length - 1) {
		formattedValue /= 1000;
		unitIndex++;
	}
	const unit = units[unitIndex];
	return { formattedValue: formattedValue.toFixed(fixedUpto), unit };
};

/**
 *
 * @param value the value that is required to be formatted
 * @param currencySymbol the currency symbol to be used
 * @param symbolPosition the position of the currency symbol
 * @param fixedUpto Upto the number of decimal places to be fixed
 * @returns the formatted value
 */
export const currencyFormatter = (
	value: number,
	currencySymbol: string,
	symbolPosition: 'start' | 'end',
	fixedUpto = 0,
): string => {
	const { formattedValue, unit } = valueFormatter(value, fixedUpto);
	const isNegative = value < 0 ? '-' : '';

	switch (symbolPosition) {
		case 'start':
			return `${isNegative}${currencySymbol}${formattedValue}${unit}`;

		case 'end':
			return `${isNegative}${formattedValue}${unit} ${currencySymbol}`;
	}
};

// utils.js

export const dateFormatter = (date) => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const year = date.slice(0, 4);
	const month = months[parseInt(date.slice(4, 6), 10) - 1];
	return `${month} ${year}`;
};

export const sortData = (data, key, direction) => {
	return [...data].sort((a, b) => {
		if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
		if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
		return 0;
	});
};
