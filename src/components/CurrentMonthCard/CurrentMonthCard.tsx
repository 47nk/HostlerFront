import { Box, Chip, Typography } from '@mui/material';
import { valueFormatter } from 'utils';

function CurrentMonthCard({ title, amount, chipColor }) {
	console.log(amount);

	const { formattedValue, unit } = valueFormatter(Number(amount));
	return (
		<Box
			sx={{
				flex: '1',
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
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
					fontSize: '2.4rem',
					padding: '2rem',
				}}
			/>
			<Typography variant="h4" sx={{ color: '#242731' }}>
				₹{`${formattedValue}${unit}`}
			</Typography>
		</Box>
	);
}

export default CurrentMonthCard;
