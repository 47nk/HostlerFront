import { Box, Divider, List } from '@mui/material';

import { SidebarItem, StyledLinkIconWrapper } from '@components';
import sideBarData from '@mockData/sideBar.json';
import sideBarBtnsData from '@mockData/sideBarBtns.json';

import { iconMap } from './SideBar.config';
import {
	ButtonContainer,
	SidebarContainer,
	SideBarNavLinkContainer,
} from './SideBar.styles';

export const SideBar = () => {
	return (
		<SidebarContainer>
			<SideBarNavLinkContainer>
				{sideBarData.map((group, index) => (
					<Box key={index} sx={{ width: '100%' }}>
						<List sx={{ width: '100%' }}>
							{group.map((item) => (
								<SidebarItem key={item.displayLabel} item={item} />
							))}
						</List>
						{index < sideBarData.length - 1 && <Divider />}
					</Box>
				))}
			</SideBarNavLinkContainer>
			<ButtonContainer>
				{sideBarBtnsData.map((btn) => {
					return (
						<StyledLinkIconWrapper to={btn?.path || '#'} key={btn.buttonLabel}>
							{iconMap[btn.buttonIcon as keyof typeof iconMap]}
						</StyledLinkIconWrapper>
					);
				})}
			</ButtonContainer>
		</SidebarContainer>
	);
};
