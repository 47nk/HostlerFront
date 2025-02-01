import { useEffect, useRef, useState } from 'react';

import { Box, Theme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary, Header, SideBar } from '@containers';
import { ErrorPage } from '@pages';

import {
	ContentContainer,
	LayoutContainer,
	MainContentContainer,
	StyledDrawer,
} from './MainLayout.styles';
import { MainLayoutProps } from './MainLayout.types';

export const MainLayout = ({ hideSidebar = false }: MainLayoutProps) => {
	/** STATES */
	const [isSideBarPresent, setIsSideBarPresent] = useState<boolean>();
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const sidebarContainerRef = useRef<HTMLDivElement>(null);
	const isLargeScreen = useMediaQuery(({ breakpoints }: Theme) =>
		breakpoints.up('md'),
	);

	/** METHODS */
	/**
	 * Used to control the state of the sidebar when rendering an error boundary
	 */
	useEffect(() => {
		setIsSideBarPresent(hideSidebar);
	}, [hideSidebar]);

	/**
	 * Used to automatically close the sidebar when going to large screen and coming back to tablet or mobile is screen
	 *
	 */
	useEffect(() => {
		if (isSidebarOpen && isLargeScreen) {
			setSidebarOpen(false);
		}
	}, [isLargeScreen, isSidebarOpen]);

	/**
	 * It toggles the state of sidebar on mobile and tablet screen
	 */
	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<LayoutContainer>
			<ErrorBoundary>
				<Box>
					<Header hideSideBar={isSideBarPresent} onMenuClick={toggleSidebar} />
				</Box>
			</ErrorBoundary>
			<ErrorBoundary
				fallback={<ErrorPage errorCode="500" />}
				setSideBarHidden={setIsSideBarPresent}>
				<MainContentContainer ref={sidebarContainerRef}>
					{!hideSidebar && (
						<ErrorBoundary>
							<StyledDrawer
								variant={isLargeScreen ? 'permanent' : 'temporary'}
								isLargeScreen={isLargeScreen}
								anchor="left"
								open={isLargeScreen || isSidebarOpen}
								container={sidebarContainerRef.current}
								onClose={toggleSidebar}>
								<SideBar />
							</StyledDrawer>
						</ErrorBoundary>
					)}
					<ContentContainer>
						<Outlet />
					</ContentContainer>
				</MainContentContainer>
			</ErrorBoundary>
		</LayoutContainer>
	);
};
