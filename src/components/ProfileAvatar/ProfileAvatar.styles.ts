import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const StyledAvatar = styled(Avatar)(({ theme }) => {
	const {
		typography: { pxToRem },
	} = theme;
	return {
		cursor: 'pointer',
		width: pxToRem(32),
		height: pxToRem(32),
	};
});

export const StyledNavLink = styled(NavLink)({
	textDecoration: 'none',
	color: 'inherit',
});
