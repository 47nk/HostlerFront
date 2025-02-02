import { useEffect, useState } from 'react';

import { Box, Grid, Skeleton } from '@mui/material';
import axios from 'axios';
import { Heatmap } from 'components';
import CurrentMonthCard from 'components/CurrentMonthCard/CurrentMonthCard';
import { useSelector } from 'react-redux';

import { apiEndpoints } from '@constants';

import { DayData, TransactionRow } from './CurrentMonthSummary.types';

export const CurrentMonthSummary = () => {
	const [heatMapData, setHeatMapData] = useState<DayData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isDuesLoading, setIsDuesLoading] = useState<boolean>(true);
	const userState = useSelector((state) => {
		return state.auth.user;
	});
	const [dues, setDues] = useState({});
	const [hasError, setHasError] = useState(false);
	function segregateAndSumByDay(rows: TransactionRow[]) {
		const dayTotals: DayData[] = Array.from({ length: 31 }, () => ({
			amount: 0,
			transactions: [],
		}));

		rows.forEach((row) => {
			const date = new Date(row.CreatedAt);
			const day = date.getDate();
			dayTotals[day - 1].amount += row.Price;
			dayTotals[day - 1].transactions.push(row);
		});

		return dayTotals;
	}

	useEffect(() => {
		getCurrentMonthDetailsHeatmap();
		getCurrentDues();
	}, []);

	const getCurrentMonthDetailsHeatmap = async () => {
		try {
			const currentMonth = new Date()
				.toISOString()
				.slice(0, 7)
				.replace('-', '');
			const formattedMonth = currentMonth.replace('-', '');
			const response = await axios.get(
				`${apiEndpoints.remoteAPI}/dashboard/get-transactions`,
				{
					params: {
						user_id: userState.ID,
						billing_month:
							formattedMonth != '202411' ? formattedMonth : '202411',
					},
				},
			);

			const heatmapData = segregateAndSumByDay(response.data);
			setHeatMapData(heatmapData);
			setIsLoading(false); // Set loading to false when data is fetched
		} catch (error) {
			console.error('Error fetching transactions:', error);
			setHasError(true);
			setIsLoading(false); // Set loading to false even if there's an error
		}
	};

	const getCurrentDues = async () => {
		try {
			const response = await axios.get(
				`${apiEndpoints.localAPI}/dashboard/get-dues`,
				{
					params: {
						user_id: userState.ID,
					},
				},
			);

			const duesData = response.data;

			const totalDue = duesData.TotalDueSplit.reduce(
				(acc: number, due) => acc + Number(due.due_value),
				0,
			);
			setDues({ ...duesData, totalDue: totalDue });
			setIsDuesLoading(false);
		} catch (error) {
			console.error('Error fetching Dues:', error);
			setIsDuesLoading(false);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: 10,
				height: '100%', // Ensure the parent box takes full height
			}}>
			{/* Show Skeleton Loader while loading */}
			<Box
				sx={{
					maxWidth: '28%',
					display: hasError ? 'none' : 'inline-block',
					padding: '1.6rem',
					border: '1px solid #ddd',
					borderRadius: '1.5rem',
					boxShadow: '0 0 10px rgba(0,0,0,0.1)',
				}}>
				{isLoading ? (
					<Grid container gap={3}>
						{Array.from({ length: 30 }).map((_, index) => (
							<Skeleton
								key={index}
								sx={{
									width: 'clamp(1rem, 2vw, 3rem)',
									height: 'clamp(1rem, 2vw, 3rem)', // Sa
									backgroundColor: '#f0f0f0',
									borderRadius: 1,
									boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
									boxSizing: 'border-box', // Ensures padding/border are included in dimensions
									transition: 'transform 0.2s ease-in-out',
								}}></Skeleton>
						))}
					</Grid>
				) : (
					// Show the Heatmap once data is loaded
					<Heatmap transactions={heatMapData} />
				)}
			</Box>

			<CurrentMonthCard
				title={'Meal Due'}
				amount={dues.meal_due}
				chipColor={'primary'}
				loading={isDuesLoading}
			/>
			<CurrentMonthCard
				title={'Misc.'}
				amount={dues.misc_due}
				chipColor={'warning'}
				loading={isDuesLoading}
			/>
			<CurrentMonthCard
				title={'Total Due'}
				amount={dues.totalDue}
				chipColor={'error'}
				loading={isDuesLoading}
				additionalContent={dues.TotalDueSplit}
			/>
		</Box>
	);
};
