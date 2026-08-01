import { Typography, useTheme } from '@mui/material';

import { CustomTooltip } from '@components';

import {
	CardWrapper,
	ContentWrapper,
	Header,
	IconWrapper,
} from './Card.styles';
import { CardProps } from './Card.types';

export const Card = ({
	title,
	icon,
	iconTooltip,
	subHeading,
	children,
	padding,
	minHeight,
}: CardProps) => {
	const {
		spacing,
		typography: { pxToRem },
	} = useTheme();
	return (
		<CardWrapper padding={spacing(padding)} minHeight={pxToRem(minHeight)}>
			<Header>
				<Typography variant="h3">{title}</Typography>
				{icon && (
					<CustomTooltip title={iconTooltip || ''}>
						<IconWrapper>{icon}</IconWrapper>
					</CustomTooltip>
				)}
			</Header>
			{subHeading && <Typography variant="body1">{subHeading}</Typography>}
			<ContentWrapper>{children}</ContentWrapper>
		</CardWrapper>
	);
};
