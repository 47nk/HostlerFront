import { Typography, useTheme } from '@mui/material';
import { CustomTooltip } from 'components';

import { TransactionCellProps } from './Component.types';

export const TransactionCell: React.FC<TransactionCellProps> = ({
	data,
	formatter,
}) => {
	const theme = useTheme();
	const {
		mixins: { ellipsis },
	} = theme;
	const { description, user } = formatter(data);
	return (
		<CustomTooltip title={`${description} ${user}`}>
			<Typography
				sx={{
					...ellipsis,
				}}>
				{description}{' '}
				<Typography fontWeight={600} component="span">
					{user}
				</Typography>
			</Typography>
		</CustomTooltip>
	);
};
