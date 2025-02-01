import { Badge, badgeClasses, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import { StyledNavLinkProps } from './SideBarItem.types';

export const StyledNavLink = styled(NavLink, {
	shouldForwardProp: (prop) => prop !== 'hasSubLinks',
})<StyledNavLinkProps>(({ theme, hasSubLinks }) => {
	const { spacing } = theme;
	return {
		display: 'flex',
		alignItems: 'center',
		padding: spacing(2, 6),
		margin: spacing(0, 4),
		gap: theme.spacing(8),
		flexGrow: 1,
		textDecoration: 'none',
		color: 'inherit',
		borderRadius: theme.typography.pxToRem(12),
		':hover': {
			backgroundColor: theme.palette.divider,
		},
		'&.active': {
			color: !hasSubLinks ? theme.palette.primary.main : 'inherit',
		},
	};
});
export const StyledListItemText = styled(ListItemText)(({ theme }) => {
	const {
		mixins: { ellipsis },
	} = theme;
	return {
		...ellipsis,
	};
});

export const StyledBadge = styled(Badge)({
	display: 'inline',
	position: 'relative',
	[`.${badgeClasses.badge}`]: {
		display: 'block',
		position: 'relative',
		transform: 'unset',
	},
});
