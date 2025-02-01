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
				variant="h3"
				fontWeight={600}
				component={
					'span'
				}>{`${isNegative}${currency}${formattedValue}`}</Typography>
		</CustomTooltip>
	);
};
