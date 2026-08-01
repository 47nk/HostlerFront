export type SideBarItemProps = {
	/**
	 * Object of data that will be used to display side bar options
	 */
	item: {
		/**
		 * The option name that will be displayed on sidebar option
		 */
		displayLabel: string;
		/**
		 * Optional Icon associated with side bar option
		 */
		icon?: string;
		/**
		 * Optional url that will redirect the user to that page
		 */
		url?: string;
		/**
		 * optional an array of item's of current item
		 *
		 */
		subLinks?: SideBarItemProps['item'][];
		/**
		 * Optional no of notification that are coming from that page
		 */
		notificationCount?: number;
	};
};

export type StyledNavLinkProps = {
	/**
	 * Boolean value that represents the state weather an link has more sub links or not
	 */
	hasSubLinks: boolean;
};
