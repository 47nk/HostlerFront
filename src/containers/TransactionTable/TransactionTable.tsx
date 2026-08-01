import React, { useState } from 'react';

import {
	Skeleton,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { Card } from 'components';
import { useSelector } from 'react-redux';
import { valueFormatter } from 'utils';

import { useTransactions } from '@hooks';

import { AmountCell, BillTypeCell, CustomChip, DateCell } from './components';
import {
	StyledTable,
	StyledTableCell,
	StyledTableRow,
} from './TransactionTable.styles';

const renderSkeletonRow = () => (
	<StyledTableRow>
		<StyledTableCell>
			<Skeleton variant="text" width="80px" />
		</StyledTableCell>
		<StyledTableCell>
			<Skeleton variant="text" width="100px" />
		</StyledTableCell>
		<StyledTableCell>
			<Skeleton variant="text" width="60px" />
		</StyledTableCell>
		<StyledTableCell>
			<Skeleton variant="rectangular" width="80px" height="30px" />
		</StyledTableCell>
	</StyledTableRow>
);

export const TransactionTable = () => {
	const [sortConfig, setSortConfig] = useState({
		key: 'BillingMonth',
		direction: 'dsc',
	});
	const userState = useSelector((state) => state.auth.user);
	const { transactions, loading, error, setTransactions } = useTransactions(
		userState.ID,
	);

	const sortTransactions = (key: string) => {
		let direction = 'asc';
		if (sortConfig.key === key && sortConfig.direction === 'asc') {
			direction = 'desc';
		}
		setSortConfig({ key, direction });
		const sortedData = [...transactions].sort((a, b) => {
			if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
			if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
			return 0;
		});
		setTransactions(sortedData);
	};

	const dateFormatter = (date: string) => {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const year = date.slice(0, 4);
		const month = months[parseInt(date.slice(4, 6), 10) - 1];
		return `${month} ${year}`;
	};

	const amountFormatter = (value: number) => {
		const formattedAmount = valueFormatter(value);
		return `${formattedAmount.formattedValue}${formattedAmount.unit}`;
	};
	if (error) {
		console.log(error);
	}

	return (
		<Card
			minHeight={670}
			padding={10}
			title="Bills"
			subHeading="This is a list of latest transactions.">
			<TableContainer>
				<StyledTable stickyHeader={true}>
					<TableHead>
						<TableRow>
							<StyledTableCell onClick={() => sortTransactions('BillType')}>
								Bill Type{' '}
								{sortConfig.key === 'BillType' &&
									(sortConfig.direction === 'asc' ? '↑' : '↓')}
							</StyledTableCell>
							<StyledTableCell onClick={() => sortTransactions('BillingMonth')}>
								Billing Month{' '}
								{sortConfig.key === 'BillingMonth' &&
									(sortConfig.direction === 'asc' ? '↑' : '↓')}
							</StyledTableCell>
							<StyledTableCell onClick={() => sortTransactions('Amount')}>
								Amount (₹){' '}
								{sortConfig.key === 'Amount' &&
									(sortConfig.direction === 'asc' ? '↑' : '↓')}
							</StyledTableCell>
							<StyledTableCell
								sx={{ textAlign: 'center' }}
								onClick={() => sortTransactions('PaymentStatus')}>
								Payment Status{' '}
								{sortConfig.key === 'PaymentStatus' &&
									(sortConfig.direction === 'asc' ? '↑' : '↓')}
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loading
							? Array.from({ length: 5 }).map((_, index) => (
									<React.Fragment key={index}>
										{renderSkeletonRow()}
									</React.Fragment>
								))
							: transactions.map((row, index) => (
									<StyledTableRow key={index}>
										<StyledTableCell>
											<BillTypeCell billType={row.BillType} />
										</StyledTableCell>
										<StyledTableCell>
											<DateCell
												date={row.BillingMonth}
												formatter={dateFormatter}
											/>
										</StyledTableCell>
										<StyledTableCell>
											<AmountCell
												value={row.Amount}
												currency={''}
												formatter={amountFormatter}
											/>
										</StyledTableCell>
										<StyledTableCell
											sx={{
												textAlign: 'center',
											}}>
											<CustomChip label={row.PaymentStatus} />
										</StyledTableCell>
									</StyledTableRow>
								))}
					</TableBody>
				</StyledTable>
			</TableContainer>
		</Card>
	);
};
