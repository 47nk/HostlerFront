import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled(AppBar)(({ theme }) => {
	const {
		spacing,
		palette,
		mixins: { flex },
		zIndex: { drawer },
	} = theme;
	return {
		width: '100%',
		position: 'relative',
		color: 'black',
		padding: spacing(6, 8),
		zIndex: drawer + 1,
		backgroundColor: palette.background.default,
		boxShadow: 'none',
		borderBottom: `1px solid ${palette.divider}`,
		...flex('row', 'center', 'space-between'),
	};
});

export const LeftContainer = styled(Box)(({ theme }) => {
	const {
		spacing,
		mixins: { flex },
	} = theme;
	return {
		flexGrow: 1,
		gap: spacing(4),
		...flex('row', 'center'),
	};
});

export const RightContainer = styled(Box)(({ theme }) => {
	const {
		spacing,
		mixins: { flex },
	} = theme;
	return {
		gap: spacing(4),
		...flex('row', 'center'),
	};
});

export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => {
	const {
		breakpoints,
		typography: { pxToRem },
		shadows,
	} = theme;
	return {
		fontSize: pxToRem(34),
		padding: 0,
		margin: 0,
		borderRadius: '50%',
		cursor: 'pointer',
		[breakpoints.up('md')]: {
			display: 'none',
		},
		':hover': {
			boxShadow: shadows[3],
		},
	};
});

export const StyledHomeLogo = styled(NavLink)(({ theme }) => {
	const {
		mixins: { flex },
	} = theme;
	return {
		...flex('row', 'center'),
	};
});
