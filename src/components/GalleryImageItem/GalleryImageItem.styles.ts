import { ImageListItem, styled } from '@mui/material';

export const StyledImageListItem = styled(ImageListItem)(() => ({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
}));

export const StyledImg = styled('img')(() => ({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
}));
