import { Typography } from '@mui/material';
import { TooltipProps } from 'recharts';
import {
	NameType,
	ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

import {
	SalesDot,
	SalesInfoContainer,
	StyledToolTip,
} from './ChartToolTip.styles';

export const ChartToolTip = ({
	active,
	payload,
}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		const data = payload[0].payload;
		const date = new Date(data.date);
		const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
		const salesValue = `$${(data.value / 1000).toFixed(0)}k`;

		return (
			<StyledToolTip>
				<Typography
					variant="subtitle2"
					sx={{
						fontWeight: (theme) => theme.typography.fontWeightMedium,
					}}>
					{formattedDate}
				</Typography>
				<SalesInfoContainer>
					<SalesDot />
					<Typography variant="body2">
						Sales:{' '}
						<Typography
							variant="body2"
							sx={{
								display: 'inline',
								fontWeight: (theme) => theme.typography.fontWeightMedium,
							}}>
							{salesValue}
						</Typography>
					</Typography>
				</SalesInfoContainer>
			</StyledToolTip>
		);
	}

	return null;
};
