import { styled } from '@mui/material/styles';

export const LayoutContainer = styled('div')(({ theme }) => ({
	height: '100vh',
	overflow: 'hidden',

	...theme.mixins.flex('column', 'normal', 'normal', 'nowrap'),
}));

export const HeaderContainer = styled('header')({
	flexShrink: 0,
});

export const MainContentContainer = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'hidden',

	...theme.mixins.flex('row', 'normal', 'normal', 'nowrap'),
}));

export const SidebarContainer = styled('nav')({
	flexShrink: 0,
	height: '100%',
	overflowY: 'auto',
});

export const ContentContainer = styled('main')(({ theme }) => ({
	flexGrow: 1,

	...theme.mixins.scrollable,
}));
