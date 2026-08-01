import {
	Autocomplete,
	autocompleteClasses,
	inputBaseClasses,
	outlinedInputClasses,
	Popper,
	TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledAutocompleteProps } from './AutoCompleteSearch.types';

export const StyledAutocomplete = styled(Autocomplete, {
	shouldForwardProp: (prop) => prop !== 'isDropdownOpen',
})<StyledAutocompleteProps>(({ theme, isDropdownOpen }) => {
	const {
		typography: { pxToRem },
		spacing,
		palette: { divider, grey },
	} = theme;

	return {
		maxWidth: pxToRem(350),
		flexGrow: 1,
		[`& .${inputBaseClasses.root}`]: {
			backgroundColor: grey[50],
			padding: spacing(2, 3.5),
			borderRadius: pxToRem(16),
			boxShadow: `0 ${pxToRem(3)} ${pxToRem(2)} -0 rgba(0, 0, 0, 0.5)`,

			...(isDropdownOpen && {
				borderRadius: `${pxToRem(16)} ${pxToRem(16)} 0 0`,
				boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} -${pxToRem(1)} rgba(0, 0, 0, 0.2)`,
			}),
			[`& .${autocompleteClasses.input}`]: {
				padding: spacing(3.5, 0),
			},
		},

		[`& .${autocompleteClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
			{
				border: `1px solid ${divider}`,
				borderBottom: `0`,
			},

		[`.${autocompleteClasses.inputRoot} .${autocompleteClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
			{
				borderColor: `${divider}`,
				borderBottom: `0`,
			},
	};
});
export const StyledTextField = styled(TextField)(() => {
	return {
		padding: 0,
	};
});

export const StyledPopper = styled(Popper)(({ theme }) => {
	const {
		typography: { pxToRem },
		palette: { divider, grey },
	} = theme;
	return {
		border: `1px solid ${divider}`,
		borderTop: '0px',
		borderRadius: `0 0 ${pxToRem(16)} ${pxToRem(16)}`,
		boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} -${pxToRem(1)} rgba(0, 0, 0, 0.2)`,
		[`& .${autocompleteClasses.listbox}`]: {
			backgroundColor: grey[50],
			margin: 0,
			padding: 0,
		},
		[`& .${autocompleteClasses.paper}`]: {
			margin: 0,
			borderRadius: `0 0 ${pxToRem(16)} ${pxToRem(16)}`,
		},
	};
});
