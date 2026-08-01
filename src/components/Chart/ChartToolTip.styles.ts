import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledToolTip = styled(Box)(({ theme }) => {
	const {
		palette: { common },
		shadows,
		typography: { pxToRem },
		spacing,
	} = theme;

	return {
		padding: spacing(8),
		backgroundColor: common.white,
		borderRadius: pxToRem(10),
		boxShadow: shadows[2],
		fontSize: pxToRem(14),
		paddingBottom: spacing(16),
		'&::before': {
			content: '""',
			position: 'absolute',
			width: pxToRem(20),
			height: pxToRem(20),
			backgroundColor: common.white,
			bottom: pxToRem(-8),
			left: '50%',
			borderBottomRightRadius: pxToRem(6),
			transform: 'translateX(-50%) rotate(45deg)',
			boxShadow: `2px 2px 2px rgba(0,0,0,0.3)`,
		},
	};
});

export const SalesInfoContainer = styled(Box)(({ theme }) => {
	const {
		mixins: { flex },
	} = theme;
	return {
		...flex('row', 'center'),
	};
});

export const SalesDot = styled(Box)(({ theme }) => {
	const {
		palette: { primary },
		typography: { pxToRem },
		spacing,
	} = theme;

	return {
		width: pxToRem(10),
		height: pxToRem(10),
		backgroundColor: primary.main,
		borderRadius: '50%',
		marginRight: spacing(8),
	};
});

export const SalesTypography = styled(Typography)(({ theme }) => {
	const {
		typography: { fontWeightMedium },
	} = theme;
	return {
		display: 'inline',
		fontWeight: fontWeightMedium,
	};
});
