export type monthDue = {
	due_type: string;
	due_value: string;
};

export type currentMonthCard = {
	title: string;
	amount: string;
	chipColor: string;
	loading: boolean;
	additionalContent?: monthDue[];
};
