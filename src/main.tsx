import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

import { store } from '@reduxStore';

import { theme } from './theme';
if (document.getElementById('root')) {
	const rootElement = document.getElementById('root') as HTMLElement;
	createRoot(rootElement).render(
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>,
	);
}
