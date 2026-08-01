import { Typography } from '@mui/material';
import { CustomTooltip } from 'components';

import { AmountCellProps } from './Component.types';
export const AmountCell: React.FC<AmountCellProps> = ({
	value,
	currency = '',
	formatter,
}) => {
	const isNegative = value < 0 ? '-' : '';
	const formattedValue = formatter ? formatter(value) : value;

	return (
		<CustomTooltip title={`${isNegative}${currency}${Math.abs(value)}`}>
			<Typography
				sx={{
					fontSize: '1.4rem',
				}}
				component={
					'span'
				}>{`${isNegative}${currency}${formattedValue}`}</Typography>
		</CustomTooltip>
	);
};
