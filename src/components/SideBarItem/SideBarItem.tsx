import { useCallback, useState } from 'react';

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

export const SidebarItem = ({ item }: SideBarItemProps) => {
	const hasSubLinks = Boolean(item.subLinks?.length);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = useCallback(() => {
		if (hasSubLinks) {
			setIsOpen((prev) => !prev);
		}
	}, [hasSubLinks]);

	return (
		<>
			<StyledNavLink
				to={item.url || '#'}
				hasSubLinks={hasSubLinks}
				onClick={handleClick}
				className={({ isActive }) => (isActive && !hasSubLinks ? 'active' : '')}
				aria-expanded={hasSubLinks ? isOpen : undefined}>
				{item.icon && iconMap[item.icon as keyof typeof iconMap]}

				<CustomTooltip
					title={item.displayLabel}
					disableInteractive
					offset={[0, -16]}>
					<StyledListItemText>{item.displayLabel}</StyledListItemText>
				</CustomTooltip>

				{item.notificationCount ? (
					<CustomTooltip title={item.notificationCount} offset={[0, -10]}>
						<StyledBadge
							badgeContent={item.notificationCount}
							color="error"
							max={9}
						/>
					</CustomTooltip>
				) : null}

				{hasSubLinks && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
			</StyledNavLink>

			{hasSubLinks && (
				<Collapse
					in={isOpen}
					timeout="auto"
					unmountOnExit
					sx={{ marginLeft: (theme) => theme.typography.pxToRem(35) }}>
					{item.subLinks?.map((subItem) => (
						<SidebarItem
							key={subItem.id || subItem.displayLabel}
							item={subItem}
						/>
					))}
				</Collapse>
			)}
		</>
	);
};
