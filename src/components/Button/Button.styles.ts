import { Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled Button
export const StyledButton = styled(Button)(({ theme }) => ({
	padding: theme.spacing(1, 2),
	borderRadius: 15,
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	textTransform: 'none',
	fontWeight: 600,
	'&:hover': {
		backgroundColor: theme.palette.primary.dark,
	},
}));
