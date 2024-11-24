import React from 'react';

import { Header, SideBar } from '@components';
import { Outlet } from 'react-router-dom';

import {
	ContentContainer,
	LayoutContainer,
	MainContentContainer,
	SidebarContainer,
} from './MainLayout.styles';
import { MainLayoutProps } from './MainLayout.types';

export const MainLayout: React.FC<MainLayoutProps> = ({
	hideSidebar = false,
	children,
}) => {
	return (
		<LayoutContainer>
			<Header />

			<MainContentContainer>
				{!hideSidebar && (
					<SidebarContainer>
						<SideBar />
					</SidebarContainer>
				)}
				<ContentContainer>
					<Outlet />
					{children}
				</ContentContainer>
			</MainContentContainer>
		</LayoutContainer>
	);
};
