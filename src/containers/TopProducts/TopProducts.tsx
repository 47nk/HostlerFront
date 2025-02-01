import React from 'react';

import { Divider } from '@mui/material';
import { valueFormatter } from 'utils';

import { Card, List, ListItem } from '@components';
import topProductsData from '@mockData/topProducts.json';

export const TopProducts = () => {
	/**
	 * A formatter that formats the value of a number
	 * @param value value that need to be formatted
	 * @returns formatted value
	 */
	const salesFormatter = (value: string | number) => {
		if (typeof value === 'string') return value;
		return valueFormatter(value, 0).formattedValue.toString();
	};
	return (
		<Card title="Top products" padding={12} minHeight={450}>
			<List>
				{topProductsData.map((product, index) => {
					const sales = String(product.sales);
					const technologyStack = product.technologyStack.join(', ');
					return (
						<React.Fragment key={product.id}>
							<ListItem
								heading={product.label}
								subHeading={technologyStack}
								value={sales}
								formatter={salesFormatter}
								suffix="sales"
							/>
							{index < topProductsData.length - 1 && <Divider />}
						</React.Fragment>
					);
				})}
			</List>
		</Card>
	);
};
