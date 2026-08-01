import { transactionType } from '../TransactionTable.types';

export type AmountCellProps = {
	value: number;
	currency?: string;
	formatter?: (arg0: number) => string;
};

export type CustomChipProps = {
	label: string;
};

export type DateCellProps = {
	date: number | string;
	formatter?: (arg0: string) => string;
};

export type TransactionCellProps = {
	data: transactionType;
	formatter: (arg0: transactionType) => {
		description: string;
		user: string;
	};
};
