import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Button = styled(MUIButton)(({ theme }) => {
	const {
		palette: { primary },
		typography: { pxToRem, fontWeightMedium },
		spacing,
	} = theme;
	return {
		padding: spacing(2, 4),
		borderRadius: pxToRem(16),
		backgroundColor: primary.main,
		color: primary.contrastText,
		textTransform: 'none',
		fontWeight: fontWeightMedium,
		'&:hover': {
			backgroundColor: primary.dark,
		},
	};
});
