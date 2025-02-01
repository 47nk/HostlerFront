type chartData = {
	date: string | number;
	value: number;
};

export type ChartProps = {
	data: chartData[];
	yAxisFormatter: (arg0: number | string) => string;
	xAxisFormatter: (arg0: number | string) => string;
	yAxisLabel: string;
	xAxisLabel: string;
	yAxisUnit?: string;
};
