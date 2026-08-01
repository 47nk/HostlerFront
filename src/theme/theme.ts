import { createTheme } from '@mui/material/styles';

import { BREAKPOINTS, COLORS } from '@constants';

import { resetCSS } from './reset';
import { createTypography } from './typography';
let theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				...resetCSS,
				'::-webkit-scrollbar': {
					width: '4px',
					height: '8px',
				},
				'::-webkit-scrollbar-thumb': {
					scrollbarGutter: 'stable both-edges',
					backgroundColor: COLORS.shadows.primary,
					borderRadius: '4px',
				},
				'::-webkit-scrollbar-thumb:hover': {
					backgroundColor: COLORS.shadows.secondary,
				},
				'::-webkit-scrollbar-track': {
					backgroundColor: 'transparent',
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: BREAKPOINTS.xs,
			sm: BREAKPOINTS.sm,
			md: BREAKPOINTS.md,
			lg: BREAKPOINTS.lg,
			xl: BREAKPOINTS.xl,
		},
	},
	palette: {
		background: {
			default: COLORS.background.default,
		},
		text: {
			primary: COLORS.text.primary,
			secondary: COLORS.text.secondary,
			tertiary: COLORS.text.tertiary,
		},
		primary: {
			main: COLORS.primary.main,
			dark: COLORS.primary.dark,
			light: COLORS.primary.light,
		},
		success: {
			main: COLORS.primary.light,
			dark: COLORS.primary.dark,
			light: COLORS.primary.light,
			contrastText: COLORS.primary.dark,
		},
		warning: {
			main: COLORS.warning.light,
			dark: COLORS.warning.dark,
			light: COLORS.warning.light,
			contrastText: COLORS.warning.dark,
		},
		error: {
			main: COLORS.error.light,
			dark: COLORS.error.dark,
			light: COLORS.error.light,
			contrastText: COLORS.error.dark,
		},
	},
	typography: {
		htmlFontSize: 10,
		fontFamily: ['Inter', 'sans-serif'].join(','),
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
	mixins: {
		scrollable: {
			overflowY: 'scroll',
		},
		flex: (
			flexDirection = 'row',
			alignItems = 'flex-start',
			justifyContent = 'flex-start',
			flexWrap = 'nowrap',
		) => ({
			display: 'flex',
			flexDirection,
			alignItems,
			justifyContent,
			flexWrap,
		}),
		ellipsis: {
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
	},
	spacing: (factor: number) => `${0.2 * factor}rem`,
});

theme = createTheme(theme, {
	typography: createTypography(theme),
});

export { theme };
