import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledLinkIconWrapper = styled(NavLink)(({ theme }) => {
	const {
		shadows,
		spacing,
		palette: { common },
	} = theme;

	return {
		color: common.black,
		borderRadius: '50%',
		padding: spacing(2),
		lineHeight: 0,
		':hover': {
			boxShadow: shadows[3],
		},
	};
});
