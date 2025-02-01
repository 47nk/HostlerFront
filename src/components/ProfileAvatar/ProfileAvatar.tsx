import React, { useState } from 'react';

import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { CustomTooltip } from 'components/CustomTooltip';
import { useDispatch } from 'react-redux';
import { clearUser } from 'redux/store/userSlice';

import { StyledAvatar } from './ProfileAvatar.styles';
import { ProfileAvatarProps } from './ProfileAvatar.types';

/**
 *
 * @param profilePic the picture to be renders in the avatar if not provided then dummy avatar image will me shown
 * @param menuOptions the list of options to be displayed when the user clicks on the profile avatar if not list provided then menu will not be displayed
 *
 * @returns
 */
export const ProfileAvatar = ({
	profilePic,
	menuOptions,
}: ProfileAvatarProps) => {
	/** STATES */
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const dispatch = useDispatch();

	/** METHODS */
	/**
	 * It open the profile menu options if options are available
	 * @param event The react element on which user clicked to open it
	 */
	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		if (menuOptions) setAnchorEl(event.currentTarget);
	};

	/**
	 * closes the profile options menu
	 */
	const handleClose = () => {
		setAnchorEl(null);
	};
	//TODO move to container
	const handleLogOut = () => {
		dispatch(clearUser());
	};

	return (
		<>
			<CustomTooltip disableInteractive title="Profile">
				<IconButton
					sx={{ padding: 0 }}
					onClick={handleOpen}
					disableRipple={!menuOptions?.length}>
					<StyledAvatar
						src={profilePic ? profilePic : undefined}
						alt="User Profile"
					/>
				</IconButton>
			</CustomTooltip>
			{menuOptions?.length && (
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}>
					<MenuItem onClick={handleClose}>
						<Button onClick={handleLogOut}>Log Out</Button>
					</MenuItem>
				</Menu>
			)}
		</>
	);
};
