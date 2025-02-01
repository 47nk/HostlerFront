import { ReactNode } from 'react';

export type CardProps = {
	/**
	 * The title to display on top of a card
	 */
	title: string;
	/**
	 * Optional The icon to render beside the title if provided else will not render
	 */
	icon?: ReactNode;
	/**
	 * Optional Text to be displayed inside the tooltip for the icon
	 */
	iconTooltip?: string;
	/**
	 * The Subheading to be displayed below the title
	 */
	subHeading?: string;
	/**
	 * The children element of the card
	 */
	children: ReactNode;
	/**
	 * Padding for the card it will be wrapped inside a pxToRem
	 */
	padding: number;
	minHeight: number;
};
