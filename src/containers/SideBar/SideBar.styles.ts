import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SidebarContainer = styled(Box)(({ theme }) => {
	const {
		palette,
		typography: { pxToRem },
		mixins: { flex },
	} = theme;

	return {
		height: '100%',
		width: pxToRem(250),
		backgroundColor: palette.background.default,

		...flex('column', 'stretch', 'flex-start', 'nowrap'),
	};
});

export const SideBarNavLinkContainer = styled(Box)(() => {
	return {
		flexGrow: 1,
		overflowY: 'scroll',
	};
});

export const ButtonContainer = styled(Box)(({ theme }) => {
	const {
		typography: { pxToRem },
		mixins: { flex },
		spacing,
	} = theme;

	return {
		padding: `${spacing(4)} 0`,
		fontSize: pxToRem(24),
		gap: pxToRem(12),
		color: theme.palette.common.black,
		...flex('row', 'center', 'center'),
	};
});
