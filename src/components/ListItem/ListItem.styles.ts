import { Avatar, Box, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ListItemWrapper = styled(Box)(({ theme }) => {
	const {
		spacing,
		palette: { common },
		shape: { borderRadius },
		mixins: { flex },
	} = theme;

	return {
		...flex('row', 'center'),
		gap: spacing(4),
		padding: spacing(0, 1),
		borderRadius,
		backgroundColor: common.white,
		overflowX: 'hidden',
	};
});

export const StyledAvatar = styled(Avatar)(({ theme }) => {
	const {
		shadows,
		typography: { pxToRem },
	} = theme;

	return {
		width: pxToRem(32),
		height: pxToRem(32),
		':hover': {
			boxShadow: shadows[3],
		},
	};
});

export const StyledListItemText = styled(ListItemText)(({ theme }) => {
	const {
		mixins: { ellipsis },
		typography: { pxToRem },
	} = theme;
	return {
		'.MuiListItemText-primary': {
			...ellipsis,
			fontWeight: 600,
			fontSize: pxToRem(16),
		},
		'.MuiListItemText-secondary': {
			...ellipsis,
			fontWeight: 400,
			fontSize: pxToRem(12),
		},
	};
});

export const StyledHeading = styled(Typography)(({ theme }) => {
	const {
		palette: { text },
		typography: { pxToRem },
	} = theme;

	return {
		fontSize: pxToRem(16),
		fontWeight: 600,
		color: text.primary,
	};
}) as typeof Typography;

export const StyledSubHeading = styled(Typography)(({ theme }) => {
	const {
		typography: { pxToRem },
		palette: { text },
	} = theme;

	return {
		fontSize: pxToRem(12),
		color: text.secondary,
	};
}) as typeof Typography;
