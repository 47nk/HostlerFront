import { Grid } from '@mui/material';
import { CurrentMonthSummary } from 'containers/CurrentMonthSummry/CurrentMonthSummary';

import { TransactionTable } from '@containers';

export const Dashboard = () => {
	return (
		<Grid container rowSpacing={10} columnSpacing={10} padding={10}>
			<Grid item xs={12}>
				<CurrentMonthSummary />
			</Grid>
			<Grid item xs={12}>
				<TransactionTable />
			</Grid>
		</Grid>
	);
};

export default Dashboard;
