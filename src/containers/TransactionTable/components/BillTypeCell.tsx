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
				sx={{
					...ellipsis,
					fontSize: '1.4rem',
				}}>
				{billType}
			</Typography>
		</CustomTooltip>
	);
};
