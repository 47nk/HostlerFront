import { useState } from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';
import { CustomTooltip } from 'components/CustomTooltip';
import { iconMap } from 'containers/SideBar/SideBar.config';

import {
	StyledBadge,
	StyledListItemText,
	StyledNavLink,
} from './SideBarItem.styles';
import { SideBarItemProps } from './SideBarItem.types';

/**
 *
 * @param item
 * @returns renders the sidebarItem entry
 */
export const SidebarItem = ({ item }: SideBarItemProps) => {
	const hasSubLinks = Boolean(item.subLinks?.length);
	const [isOpen, setIsOpen] = useState(false);

	/**
	 * Opens the collapsed side bar menu entry.
	 */
	const handleClick = () => {
		if (hasSubLinks) {
			setIsOpen(!isOpen);
		}
	};

	return (
		<>
			<StyledNavLink
				to={item.url || '#'}
				hasSubLinks={hasSubLinks}
				className={({ isActive }) => (isActive && !hasSubLinks ? 'active' : '')}
				onClick={handleClick}>
				{item?.icon && iconMap[item.icon as keyof typeof iconMap]}
				<CustomTooltip
					title={item.displayLabel}
					disableInteractive
					offset={[0, -16]}>
					<StyledListItemText>{item.displayLabel}</StyledListItemText>
				</CustomTooltip>

				{item.notificationCount && (
					<CustomTooltip title={item.notificationCount} offset={[0, -10]}>
						<StyledBadge
							badgeContent={item.notificationCount}
							color="error"
							max={9}
						/>
					</CustomTooltip>
				)}

				{hasSubLinks && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
			</StyledNavLink>

			{hasSubLinks && (
				<Collapse
					in={isOpen}
					timeout="auto"
					unmountOnExit
					sx={{
						marginLeft: (theme) => theme.typography.pxToRem(35),
					}}>
					{item.subLinks?.map((subItem) => (
						<SidebarItem key={subItem.displayLabel} item={subItem} />
					))}
				</Collapse>
			)}
		</>
	);
};
