import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)(({ theme }) => {
	const {
		spacing,
		mixins: { flex },
		palette: { grey },
	} = theme;
	return {
		...flex('column', 'center'),
		backgroundColor: grey[50],
		padding: spacing(1),
		height: '100%',
		width: '100%',
		overflowY: 'scroll',
	};
});

export const ContentContainer = styled(Box)(({ theme }) => {
	const {
		mixins: { flex },
		typography: { pxToRem },
	} = theme;
	return {
		...flex('column', 'center', 'center', 'nowrap'),
		rowGap: pxToRem(20),
		flexGrow: 1,
	};
});

export const ErrorImage = styled(Box)(({ theme }) => {
	const {
		breakpoints,
		typography: { pxToRem },
	} = theme;
	return {
		height: pxToRem(200),
		[breakpoints.up('md')]: {
			height: pxToRem(300),
		},
		[breakpoints.up('lg')]: {
			height: pxToRem(400),
		},

		img: {
			objectCover: 'contain',
			height: '100%',
		},
	};
});
