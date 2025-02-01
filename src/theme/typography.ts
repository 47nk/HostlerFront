import { Theme } from '@mui/material/styles';

export const createTypography = (theme: Theme) => ({
	h2: {
		color: theme.palette.text.primary,
		fontSize: theme.typography.pxToRem(30),
		fontWeight: theme.typography.fontWeightBold,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.typography.pxToRem(39),
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.typography.pxToRem(48),
		},
	},
	h3: {
		fontSize: theme.typography.pxToRem(20),
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightMedium,
	},
	subtitle1: {
		fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightLight,
		color: theme.palette.text.secondary,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.typography.pxToRem(18),
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.typography.pxToRem(20),
		},
	},
	subtitle2: {
		fontSize: theme.typography.pxToRem(12),
		fontWeight: theme.typography.fontWeightLight,
		color: theme.palette.text.secondary,
	},
	body1: {
		fontSize: theme.typography.pxToRem(14),
		fontWeight: theme.typography.fontWeightLight,
		color: theme.palette.text.tertiary,
	},
	body2: {
		fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightLight,
		color: theme.palette.common.black,
		lineHeight: theme.typography.pxToRem(24),
	},
});
