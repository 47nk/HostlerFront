import { Typography, useTheme } from '@mui/material';
import { CustomTooltip } from 'components';

export const BillTypeCell = ({ billType }) => {
	const theme = useTheme();

	const {
		mixins: { ellipsis },
	} = theme;
	return (
		<CustomTooltip title={billType}>
			<Typography
				component="span"
				variant="h3"
				sx={{
					...ellipsis,
				}}>
				{billType}
			</Typography>
		</CustomTooltip>
	);
};
