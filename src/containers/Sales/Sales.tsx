import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Theme, useMediaQuery } from '@mui/material';
import { valueFormatter } from 'utils';

import { Card, Chart } from '@components';
import salesData from '@mockData/salesChart.json';

export const Sales = () => {
	/**STATES */
	const isLargeScreen = useMediaQuery(({ breakpoints }: Theme) => {
		return breakpoints.up('md');
	});

	/** METHODS */
	/**
	 * yAxis formatter for our chart to display the values in a more readable format
	 * @param data The data it needs to format in this case it can be a timestamp:number or string
	 * @returns it will return a formatted string for our data
	 */
	const yAxisFormatter = (data: number | string) => {
		if (typeof data === 'string') return data;
		const { formattedValue, unit } = valueFormatter(data, 0);
		return `${formattedValue}${unit}`;
	};
	/**
	 * xAxis formatter for our chart to display the values in a more readable format
	 * if the data is provided in string format that it will return it as it is
	 * @param data The data it needs to format in this case it can be a amount:string or string
	 * @returns it will return a formatted string for our data
	 */
	const xAxisFormatter = (data: number | string) => {
		if (typeof data === 'string') return data;
		const date = new Date(data);
		const day = date.getDate().toString().padStart(2, '0');
		const month = date.toLocaleString('default', { month: 'short' });
		return `${day} ${month}`;
	};

	return (
		<Card
			title="Sales"
			icon={<InfoOutlinedIcon />}
			iconTooltip="Info"
			padding={isLargeScreen ? 20 : 7}
			minHeight={300}>
			<Chart
				data={salesData}
				yAxisFormatter={yAxisFormatter}
				xAxisFormatter={xAxisFormatter}
				xAxisLabel="date"
				yAxisLabel="value"
			/>
		</Card>
	);
};
