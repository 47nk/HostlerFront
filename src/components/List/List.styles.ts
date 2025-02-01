import { List, styled } from '@mui/material';

export const StyledList = styled(List)(({ theme }) => {
	const {
		typography: { pxToRem },
	} = theme;
	return {
		maxHeight: pxToRem(380),
		overflowY: 'scroll',
		padding: 0,
	};
});
