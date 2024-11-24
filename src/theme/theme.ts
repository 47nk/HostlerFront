import { colors } from '@constants';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 320,
			md: 768,
			lg: 1024,
			xl: 1440,
		},
	},
	palette: {
		background: {
			default: colors.light.background.default,
		},
		text: {
			primary: colors.light.text.primary,
			secondary: colors.light.text.secondary,
		},
		primary: {
			main: colors.light.primary.main,
			dark: colors.light.primary.dark,
			light: colors.light.primary.light,
		},
		warning: {
			main: colors.light.warning.main,
			dark: colors.light.warning.dark,
			light: colors.light.warning.light,
		},
		error: {
			main: colors.light.error.main,
			dark: colors.light.error.dark,
			light: colors.light.error.light,
		},
	},
	typography: {
		htmlFontSize: 10,
		fontFamily: ['Inter', 'sans-serif'].join(','),
	},
	mixins: {
		scrollable: {
			overflowY: 'scroll',
		},
		flex: (
			flexDirection = 'row',
			alignItems = 'flex-start',
			justifyContent = 'flex-start',
			flexWrap = 'wrap',
		) => ({
			display: 'flex',
			flexDirection,
			alignItems,
			justifyContent,
			flexWrap,
		}),
	},
});

theme = createTheme(theme, {
	typography: {
		h2: {
			color: theme.palette.text.primary,
			fontSize: '3rem',
			fontWeight: 700,
			[theme.breakpoints.up('md')]: {
				fontSize: '3.9rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '4.8rem',
			},
		},
		subtitle: {
			fontSize: '1.6rem',
			fontWeight: 400,
			color: theme.palette.text.secondary,
			[theme.breakpoints.up('md')]: {
				fontSize: '1.8rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '2rem',
			},
		},
		h3: {
			fontSize: '2rem',
			color: theme.palette.text.primary,
			fontWeight: 700,
		},
	},
});

export default theme;
