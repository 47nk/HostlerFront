import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import websiteLogo from '@assets/images/icons/logo.svg';
import profilePic from '@assets/images/users/profile-pic.png';
import { CustomTooltip, StyledLinkIconWrapper } from '@components';
import { ProfileAvatar } from '@components';
import profileMenuData from '@mockData/profileMenu.json';

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
