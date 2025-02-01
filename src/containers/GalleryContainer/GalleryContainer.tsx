import { Theme, useMediaQuery } from '@mui/material';

import { GalleryImageItem } from '@components';
import galleryData from '@mockData/gallery.json';

import { StyledImageList } from './GalleryContainer.styles';

export const GalleryContainer = () => {
	/** STATES */
	const isTablet = useMediaQuery(({ breakpoints }: Theme) =>
		breakpoints.up('sm'),
	);
	const columns = isTablet ? 3 : 1;
	const rowHeight = isTablet ? 220 : 115;
	const rowGap = 20;

	return (
		<StyledImageList
			cols={columns}
			gap={rowGap}
			rowHeight={rowHeight}
			isTablet={isTablet}>
			{galleryData.map((item, index) => {
				const { laptop, mobile } = item;
				const { cols, rows, visible, position } = isTablet ? laptop : mobile;
				if (visible)
					return (
						<GalleryImageItem
							position={position}
							rowHeight={rowHeight}
							key={index}
							img={item.img}
							cols={cols}
							rows={rows}
							alt={item.alt}
						/>
					);
			})}
		</StyledImageList>
	);
};
