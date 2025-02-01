import { Box, Typography } from '@mui/material';

import { CustomTooltip } from '@components';

import {
	ListItemWrapper,
	StyledAvatar,
	StyledHeading,
	StyledListItemText,
	StyledSubHeading,
} from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem = ({
	avatar,
	heading,
	subHeading,
	prefix = '',
	value,
	suffix,
	formatter,
}: ListItemProps) => {
	/** STATES */
	const formattedValue = formatter ? formatter(value) : value;

	const TooltipValue = `${prefix ? prefix : ''}${value} ${suffix ? suffix : ''}`;

	return (
		<ListItemWrapper>
			{avatar && (
				<CustomTooltip title={heading} offset={[0, -10]} disableInteractive>
					<StyledAvatar src={avatar} alt={heading || 'User Avatar'} />
				</CustomTooltip>
			)}

			<StyledListItemText
				primary={
					<CustomTooltip title={heading} disableInteractive followCursor>
						<StyledHeading component="span">{heading}</StyledHeading>
					</CustomTooltip>
				}
				secondary={
					subHeading && (
						<CustomTooltip title={subHeading} followCursor disableInteractive>
							<StyledSubHeading component="span">{subHeading}</StyledSubHeading>
						</CustomTooltip>
					)
				}
			/>

			<CustomTooltip title={TooltipValue} disableInteractive offset={[0, -10]}>
				<Box display="flex" alignItems="center" gap={1}>
					<Typography variant="body2" fontWeight={600}>
						{prefix}
						{formattedValue}
					</Typography>

					{suffix && (
						<Typography variant="body1" color="textSecondary">
							{suffix}
						</Typography>
					)}
				</Box>
			</CustomTooltip>
		</ListItemWrapper>
	);
};
