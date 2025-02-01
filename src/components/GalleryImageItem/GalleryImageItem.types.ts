import { ImageListItemProps } from '@mui/material';

export type GalleryImageItemProps = {
	/**
	 * image to be displayed
	 */
	img: string;
	/**
	 * How many cols will the image span in the gallery
	 */
	cols: number;
	/**
	 * How many rows will the  image in the gallery
	 */
	rows: number;
	/**
	 * The alt description of the image
	 */
	alt: string;
	/**
	 *
	 */
	position: {
		row: number;
		col: number;
	};
	/**
	 * It is used to determine the size of the image based on the row height
	 */
	rowHeight: number;
} & ImageListItemProps;
