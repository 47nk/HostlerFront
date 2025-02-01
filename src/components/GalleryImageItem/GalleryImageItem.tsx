import { StyledImageListItem, StyledImg } from './GalleryImageItem.styles';
import { GalleryImageItemProps } from './GalleryImageItem.types';

export const GalleryImageItem = ({
	img,
	cols,
	rows,
	rowHeight,
	alt,
	position,
}: GalleryImageItemProps) => {
	/**
	 * It is used to set the src of an image
	 * @param image the url to image we want to display
	 * @param size the height of a image in a row
	 * @param rows no of rows a image will span
	 * @param cols no of columns a image will sp
	 * @returns return a object with src and srcSet property
	 */
	const srcset = (image: string, size: number, rows: number, cols: number) => ({
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=contain&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=contain&auto=format&dpr=2 2x`,
	});

	return (
		<StyledImageListItem
			cols={cols}
			rows={rows}
			sx={{
				gridRow: position.row,
				gridColumn: position.col,
			}}>
			<StyledImg
				{...srcset(img, rowHeight, rows, cols)}
				alt={alt}
				loading="lazy"
			/>
		</StyledImageListItem>
	);
};
