export type ProfileAvatarProps = {
	/**
	 * optional it is a url to for the picture of the user if not provided default MUI Avatar UI will be displayed
	 */
	profilePic?: string;
	/**
	 * Optional it is a array of options to be displayed in profile menu drop down menu
	 * if no options are provided then no dropdown will be displayed
	 */
	menuOptions?: string[];
};
