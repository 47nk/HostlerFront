export type OptionType = {
	/**
	 * The text option that will be displayed in the dropdown
	 */
	label: string;
	/**
	 * The unique id given to each option
	 */
	id: number;
	/**
	 * Url Path to which user will be redirected after selecting the option
	 */
	path: string;
};

export type StyledAutocompleteProps = {
	/**
	 * State that represents if the dropdown if open or closed
	 */
	isDropdownOpen?: boolean;
};

export type AutoCompleteSearchProps = {
	/**
	 * Optional placeholder that will be displayed in the input field if no text is entered
	 * by default the value is search
	 */
	placeholder?: string;
	/**
	 * Array of options that will be displayed in the dropdown
	 */
	options: OptionType[];
	/**
	 * Function that can be passed from parent component to handle the change of the input field
	 * @param value option object that contains all the info about select options
	 * @returns
	 */
	onChange?: (value: OptionType | null) => void;
};
