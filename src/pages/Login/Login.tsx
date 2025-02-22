import React, { useEffect, useState } from 'react';

import {
	Alert,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Snackbar,
	TextField,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from 'redux/store/userSlice';

import { apiEndpoints } from '@constants';

export const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	height: '100%',
	backgroundColor: theme.palette.background.default,
}));

export const ImageSection = styled('div')({
	flex: 1,
	position: 'relative',
	background: `url("/assets/images/backgrounds/login.webp") center center / cover no-repeat`,
	borderRadius: '8px 0 0 8px',
	'&::after': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background:
			'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
		borderRadius: '8px 0 0 8px',
	},
});

export const FormSection = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: theme.palette.common.white,
	padding: theme.spacing(4),
	borderRadius: '0 8px 8px 0',
}));

export const Logo = styled('div')(({ theme }) => ({
	marginBottom: theme.spacing(4),
	fontSize: theme.typography.pxToRem(24),
	fontWeight: theme.typography.fontWeightBold,
	color: theme.palette.text.primary,
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(1),
}));

export const LoginForm = styled('form')(({ theme }) => ({
	width: '100%',
	maxWidth: '360px',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
}));

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.isAuthenticated);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	// Redirect if already logged in
	useEffect(() => {
		if (user) {
			navigate('/dashboard', { replace: true });
		}
	}, [user, navigate]);

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		setError('');
		setLoading(true);
		try {
			const response = await axios.post(
				`${apiEndpoints.localAPI}/users/login`,
				{ username, password },
				{ withCredentials: true },
			);

			const user = response.data;
			dispatch(setUser({ user, rememberMe }));
			navigate('/dashboard', { replace: true });
		} catch (err) {
			setError(err.response?.data || 'Login failed. Please try again.');
			console.log(err);

			setSnackbarOpen(true);
		} finally {
			setLoading(false);
		}
	};

	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	return (
		<Root>
			<ImageSection />
			<FormSection>
				<Logo>
					<Box
						component="img"
						src="https://img.freepik.com/free-vector/editable-hotel-logo-vector-business-corporate-identity-hostel_53876-111553.jpg"
						alt="Hosteler Logo"
						style={{ borderRadius: '50%' }}
						sx={{
							width: (theme) => theme.typography.pxToRem(42),
							height: (theme) => theme.typography.pxToRem(42),
						}}
					/>
					Hosteler
				</Logo>
				<Typography variant="h4" gutterBottom>
					Welcome Back!
				</Typography>
				<Typography variant="body1" color="textSecondary" gutterBottom>
					Sign in to your account to continue
				</Typography>
				<LoginForm onSubmit={handleLogin}>
					<TextField
						label="Email or phone number"
						variant="outlined"
						fullWidth
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						fullWidth
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center">
						<FormControlLabel
							control={
								<Checkbox
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
								/>
							}
							label="Remember me"
						/>
						<Typography variant="body2" color="primary">
							Forgot password?
						</Typography>
					</Box>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						size="large"
						fullWidth
						disabled={loading}>
						{loading ? 'Signing in...' : 'Sign in'}
					</Button>
				</LoginForm>
				<Snackbar
					open={snackbarOpen}
					autoHideDuration={6000}
					onClose={handleCloseSnackbar}>
					<Alert
						onClose={handleCloseSnackbar}
						severity="error"
						sx={{ width: '100%' }}>
						{error}
					</Alert>
				</Snackbar>
			</FormSection>
		</Root>
	);
};
