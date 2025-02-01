export type ListItemProps = {
	/**
	 * Optional Avatar to be displayed on the left side of the list item.
	 */
	avatar?: string;
	/**
	 * Main Content title/heading to be displayed
	 */
	heading: string;
	/**
	 * Optional The subheading associated to the main content
	 */
	subHeading?: string;
	/**
	 *Optional Prefix value to be shown before the value
	 */
	prefix?: string | number;
	/**
	 * Value associated with the list item  to be displayed on the right side of the list item.
	 */
	value: string | number;
	/**
	 *Optional suffix value to be shown before the value
	 */
	suffix?: string | number;
	/**
	 * It returns a formatted value based on the type of the value
	 * @param value The value that need to be formatted
	 * @returns formatted string
	 */
	formatter?: (value: string | number) => string;
};
