import { Box, CircularProgress, Divider, List } from '@mui/material';

import { SidebarItem, StyledLinkIconWrapper } from '@components';
import sideBarBtnsData from '@mockData/sideBarBtns.json';

import { iconMap } from './SideBar.config';
import {
	ButtonContainer,
	SidebarContainer,
	SideBarNavLinkContainer,
} from './SideBar.styles';

export const SideBar = ({ loading, sideBarData }: { loading: boolean }) => {
	return (
		<SidebarContainer>
			{loading ? (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100%">
					<CircularProgress />
				</Box>
			) : (
				<>
					<SideBarNavLinkContainer>
						{sideBarData.map((group, groupIndex) => (
							<Box key={`group-${groupIndex}`} sx={{ width: '100%' }}>
								<List sx={{ width: '100%' }}>
									{group.map((item) => (
										<SidebarItem
											key={item.id || item.displayLabel}
											item={item}
										/>
									))}
								</List>
								{groupIndex < sideBarData.length - 1 && <Divider />}
							</Box>
						))}
					</SideBarNavLinkContainer>
					<ButtonContainer>
						{sideBarBtnsData.map((btn) => (
							<StyledLinkIconWrapper
								to={btn?.path || '#'}
								key={btn.id || btn.buttonLabel}>
								{iconMap[btn.buttonIcon as keyof typeof iconMap]}
							</StyledLinkIconWrapper>
						))}
					</ButtonContainer>
				</>
			)}
		</SidebarContainer>
	);
};
