import { ImageList, styled } from '@mui/material';

export const StyledImageList = styled(ImageList, {
	shouldForwardProp: (prop) => prop !== 'isTablet',
})<{ isTablet: boolean }>(({ isTablet, theme }) => {
	const {
		typography: { pxToRem },
	} = theme;
	return {
		width: '100%',
		minHeight: isTablet ? pxToRem(460) : pxToRem(530),
		maxHeight: isTablet ? pxToRem(460) : pxToRem(530),
		overflowY: 'scroll',
	};
});
