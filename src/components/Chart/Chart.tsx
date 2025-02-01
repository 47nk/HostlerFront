import { useMediaQuery, useTheme } from '@mui/material';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import { ChartProps } from './Chart.types';
import { ChartToolTip } from './ChartToolTip';

export const Chart = ({
	data,
	yAxisFormatter,
	yAxisUnit,
	xAxisFormatter,
	xAxisLabel,
	yAxisLabel,
}: ChartProps) => {
	const {
		palette: { primary },
		breakpoints,
	} = useTheme();
	const isLargeScreen = useMediaQuery(breakpoints.up('md'));

	return (
		<ResponsiveContainer height={'100%'} minHeight={570}>
			<LineChart
				data={data}
				margin={{
					top: 10,
					right: 20,
					left: isLargeScreen ? 0 : 15,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray="0" vertical={false} />
				<XAxis
					dataKey={xAxisLabel}
					tickFormatter={xAxisFormatter}
					tickLine={false}
					axisLine={false}
					angle={isLargeScreen ? 0 : 300}
					minTickGap={isLargeScreen ? 5 : 1}
					tickMargin={30}
					height={isLargeScreen ? 50 : 70}
					allowDataOverflow
				/>
				<YAxis
					tickMargin={60}
					width={110}
					tickFormatter={yAxisFormatter}
					tickCount={7}
					unit={yAxisUnit && yAxisUnit}
					tickLine={false}
					axisLine={false}
					hide={!isLargeScreen}
				/>
				<Tooltip content={ChartToolTip} animationDuration={100} />
				<Line
					type="monotone"
					dataKey={yAxisLabel}
					stroke={primary.main}
					activeDot={{ r: 6 }}
					strokeWidth={4}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};
