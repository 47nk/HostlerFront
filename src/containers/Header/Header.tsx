import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import websiteLogo from '@assets/images/icons/logo.svg';
import profilePic from '@assets/images/users/profile-pic.png';
import {
	AutoCompleteSearch,
	CustomTooltip,
	StyledLinkIconWrapper,
} from '@components';
import { ProfileAvatar } from '@components';
import profileMenuData from '@mockData/profileMenu.json';
import topProductsData from '@mockData/topProducts.json';

import {
	HeaderContainer,
	LeftContainer,
	RightContainer,
	StyledHomeLogo,
	StyledMenuIcon,
} from './Header.styles';
import { headerProps } from './Header.types';
export const Header = ({ onMenuClick, hideSideBar = false }: headerProps) => {
	/** STATES */
	const {
		breakpoints,
		typography: { pxToRem },
	} = useTheme();
	const isLargeScreen = useMediaQuery(breakpoints.up('md'));
	const navigate = useNavigate();

	/** METHODS */
	/**
	 * It is used to redirect the user
	 * @param path Url to the path where the user will be redirected to
	 */
	const handleNavigate = (path: string) => {
		if (path) {
			navigate(path, { replace: true });
		}
	};
	return (
		<HeaderContainer>
			<LeftContainer>
				{!hideSideBar && <StyledMenuIcon onClick={onMenuClick} />}
				<StyledHomeLogo to="/">
					{(hideSideBar || isLargeScreen) && (
						<Box
							component="img"
							src={websiteLogo}
							alt="Themesberg Logo"
							height={pxToRem(32)}
						/>
					)}
				</StyledHomeLogo>
				{isLargeScreen && (
					<AutoCompleteSearch
						options={topProductsData}
						onChange={(value) => value && handleNavigate(value.path)}
					/>
				)}
			</LeftContainer>
			<RightContainer>
				<CustomTooltip title="Notifications" disableInteractive>
					<StyledLinkIconWrapper to={'/notifications'}>
						<NotificationsIcon />
					</StyledLinkIconWrapper>
				</CustomTooltip>
				<ProfileAvatar profilePic={profilePic} menuOptions={profileMenuData} />
			</RightContainer>
		</HeaderContainer>
	);
};
