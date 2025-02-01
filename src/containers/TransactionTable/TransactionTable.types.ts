export type transactionType = {
	user: string;
	date: string | number;
	amount: number;
	currency: string;
	status: string;
	transactionId: number | string;
};
