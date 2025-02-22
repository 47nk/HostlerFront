import { Box, Chip, Skeleton, Typography } from '@mui/material';
import { ContentTooltip } from 'components/ContentTooltip';
import { valueFormatter } from 'utils';

import { currentMonthCard } from './CurrentMonthCard.types';

const AdditionalContentCard = ({
	data,
}: {
	data: {
		due_type: string;
		due_value: string;
	}[];
}) => {
	return (
		<Box sx={{ width: '25rem', padding: '1rem' }}>
			<Typography
				variant="h5"
				sx={{ color: '#333', alignSelf: 'stretch', textAlign: 'center' }}>
				Total Breakdown
			</Typography>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'max-content auto',
					gap: '1rem',
				}}>
				{data.map((item) => {
					return (
						<>
							<Typography
								variant="h6"
								key={item.due_type}
								sx={{ color: '#333' }}>
								{item.due_type}:{' '}
							</Typography>
							<Typography
								variant="h6"
								key={item.due_type}
								sx={{ color: '#333', fontWeight: 'normal' }}>
								{item.due_value}
							</Typography>
						</>
					);
				})}
			</Box>
		</Box>
	);
};

function CurrentMonthCard({
	title,
	amount,
	chipColor,
	loading,
	additionalContent,
}: currentMonthCard) {
	const { formattedValue, unit } = valueFormatter(Number(amount));

	// Format additionalContent for tooltip
	const tooltipContent = additionalContent ? (
		<AdditionalContentCard data={additionalContent} />
	) : (
		amount
	);

	return (
		<Box
			sx={{
				flex: '1',
				display: 'flex',
				flexDirection: 'column',
				gap: 12,
				alignItems: 'center',
				padding: '1.6rem',
				border: '1px solid #ddd',
				borderRadius: '1.5rem',
				boxShadow: '0 0 10px rgba(0,0,0,0.1)',
			}}>
			<Chip
				label={title}
				color={chipColor}
				sx={{
					fontSize: '1.6rem',
					padding: '1rem',
					textTransform: 'capitalize',
					borderRadius: 2,
				}}
			/>
			{loading ? (
				<Skeleton variant="text" width={100} height={40} />
			) : (
				<ContentTooltip title={tooltipContent} arrow disableInteractive>
					<Typography variant="h4" sx={{ color: '#71717A', cursor: 'pointer' }}>
						₹ {`${formattedValue}${unit}`}
					</Typography>
				</ContentTooltip>
			)}
		</Box>
	);
}

export default CurrentMonthCard;
