import { MainLayout } from '@layouts';
import { Dashboard, ErrorPage } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <MainLayout />,
			errorElement: (
				<MainLayout hideSidebar>
					<ErrorPage errorCode="404" />
				</MainLayout>
			),
			children: [
				{
					path: '/',
					element: <Dashboard />,
				},
			],
		},
	],
	{
		future: {
			v7_relativeSplatPath: false,
			v7_fetcherPersist: false,
			v7_normalizeFormMethod: false,
			v7_partialHydration: false,
			v7_skipActionErrorRevalidation: false,
		},
	},
);
