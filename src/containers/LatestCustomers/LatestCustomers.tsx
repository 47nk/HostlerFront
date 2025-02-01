import React from 'react';

import { Divider } from '@mui/material';
import { currencyFormatter } from 'utils';

import { Card, List, ListItem } from '@components';
import latestCustomersData from '@mockData/LatestCustomers.json';

export const LatestCustomers = () => {
	// It formats the value to be displayed in the ListItem
	const valueFormatter = (value: number | string) => {
		if (typeof value === 'string') return value;
		return currencyFormatter(value, '$', 'start');
	};
	return (
		<Card title="Latest Customers" padding={12} minHeight={450}>
			<List>
				{latestCustomersData.map((customer, index) => (
					<React.Fragment key={customer.userId}>
						<ListItem
							avatar={customer.avatarPath}
							heading={customer.name}
							subHeading={customer.email}
							value={customer.amount}
							formatter={valueFormatter}
						/>
						{index < latestCustomersData.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</List>
		</Card>
	);
};
