import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardWrapper = styled(Box)(({ theme }) => {
	const {
		typography: { pxToRem },
		palette: {
			common: { white },
		},
		shadows,
	} = theme;
	return {
		borderRadius: pxToRem(8),
		boxShadow: shadows[2],
		backgroundColor: white,
		overflowY: 'scroll',
	};
});

export const Header = styled(Box)(({ theme }) => {
	const {
		mixins: { flex },
		typography: { pxToRem },
	} = theme;
	return {
		...flex('row', 'center', 'flex-start'),
		gap: pxToRem(10),
	};
});

export const IconWrapper = styled(Box)(({ theme }) => {
	const {
		mixins: { flex },
		palette: { grey },
	} = theme;
	return {
		...flex('row', 'center', 'center'),
		color: grey[500],
		cursor: 'pointer',
	};
});

export const ContentWrapper = styled(Box)(({ theme }) => {
	const { spacing } = theme;
	return {
		marginTop: spacing(8),
	};
});
