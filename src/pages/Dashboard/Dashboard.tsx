import { Box, Tooltip, Typography } from '@mui/material';

export const Dashboard = () => {
	return (
		<Box>
			<Tooltip title="DashBoard" arrow>
				<Typography sx={{ width: 'fit-content' }} variant="h2">
					DashBoard
				</Typography>
			</Tooltip>
		</Box>
	);
};
