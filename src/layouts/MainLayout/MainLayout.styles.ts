import { Box, Drawer, drawerClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled('div')({
	height: '100dvh',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
});

export const MainContentContainer = styled(Box)(({ theme }) => {
	const {
		mixins: { flex },
	} = theme;
	return {
		flexGrow: 1,
		overflow: 'hidden',
		position: 'relative',

		...flex('row', 'flex-start', 'flex-start', 'nowrap'),
	};
});

export const ContentContainer = styled(Box)(({ theme }) => {
	const {
		palette: { grey },
	} = theme;
	return {
		flexGrow: 1,
		height: '100%',
		backgroundColor: grey[50],
		overflowY: 'scroll',
	};
});

export const StyledDrawer = styled(Drawer, {
	shouldForwardProp: (prop) =>
		prop !== 'headerHeight' && prop !== 'isLargeScreen',
})<{ isLargeScreen: boolean }>(({ isLargeScreen }) => ({
	position: isLargeScreen ? 'relative' : 'absolute',
	overflowY: 'hidden',
	overflowX: 'hidden',
	height: '100%',

	[`& .${drawerClasses.paper}`]: {
		overflowX: 'hidden',
		position: 'relative',
		width: 'max-content',
		overflowY: 'hidden',
		height: '100%',
	},
}));
