import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(1),
	rowGap: '2rem',
	textAlign: 'center',
}));

export const ErrorIcon = styled('img')(() => ({
	objectFit: 'cover',
}));
