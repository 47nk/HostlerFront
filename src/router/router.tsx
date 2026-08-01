import { ProtectedRoute } from 'components';
import { FileUpload } from 'constants/FileUpload';
import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@layouts';
import { ChatScreen, Dashboard, ErrorPage, Login } from '@pages';

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
			{
				path: '/fileUpload',
				element: <FileUpload />,
			},
			{
				path: '/channel/:id',
				element: (
					<ProtectedRoute>
						<ChatScreen />
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
