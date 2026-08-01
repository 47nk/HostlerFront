import { Typography, useTheme } from '@mui/material';
import { CustomTooltip } from 'components';

import { DateCellProps } from './Component.types';

export const DateCell: React.FC<DateCellProps> = ({ date, formatter }) => {
	const dateValue = formatter ? formatter(date) : date;
	const theme = useTheme();
	const {
		mixins: { ellipsis },
	} = theme;
	return (
		<CustomTooltip title={dateValue}>
			<Typography
				component="span"
				sx={{
					...ellipsis,
				}}>
				{dateValue}
			</Typography>
		</CustomTooltip>
	);
};
