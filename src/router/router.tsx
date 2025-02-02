import { ProtectedRoute } from 'components';
import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@layouts';
import { Dashboard, ErrorPage, Login } from '@pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage errorCode="500" />,
		children: [
			{
				index: true, // Default route
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
			},
			{
				path: '/dashboard',
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
			},
		],
	},
	{
		path: '/',
		element: <MainLayout hideSidebar hideHeader />,
		errorElement: <ErrorPage errorCode="500" />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	{
		path: '*',
		element: <MainLayout hideSidebar />,
		children: [
			{
				path: '*',
				element: <ErrorPage errorCode="404" />,
			},
		],
	},
]);
