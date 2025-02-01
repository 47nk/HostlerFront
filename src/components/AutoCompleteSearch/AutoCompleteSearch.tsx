import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

import {
	StyledAutocomplete,
	StyledPopper,
	StyledTextField,
} from './AutoCompleteSearch.styles';
import {
	AutoCompleteSearchProps,
	OptionType,
} from './AutoCompleteSearch.types';

/**
 *
 * @param options: list of options to be displayed in autocomplete search
 * @returns
 */
export const AutoCompleteSearch = ({
	options,
	placeholder = 'Search',
	onChange,
}: AutoCompleteSearchProps) => {
	/** STATES */
	const [inputValue, setInputValue] = useState<string | undefined>('');
	const [value, setValue] = useState<OptionType | null>(null);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	return (
		<StyledAutocomplete
			disablePortal
			forcePopupIcon={false}
			options={options as OptionType[]}
			inputValue={inputValue}
			isDropdownOpen={isDropdownOpen}
			onOpen={() => setDropdownOpen(true)}
			onClose={() => setDropdownOpen(false)}
			onInputChange={(_event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			clearOnEscape
			blurOnSelect
			value={value}
			onChange={(_event, newValue) => {
				// TODO : Will Fix this
				setValue(newValue as OptionType | null);
				onChange?.(newValue as OptionType);
			}}
			PopperComponent={StyledPopper}
			renderInput={(params) => (
				<StyledTextField
					{...params}
					placeholder={placeholder}
					InputProps={{
						...params.InputProps,
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			)}
		/>
	);
};
