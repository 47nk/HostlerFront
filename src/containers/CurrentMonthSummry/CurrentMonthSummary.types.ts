export type TransactionRow = {
	BillId: number; // Unique identifier for the bill
	CreatedAt: string; // Date and time when the transaction was created
	Description: string; // Description of the transaction
	ExtraItems: number; // Number of extra items in the transaction
	ExtraPrice: number; // Total price of the extra items
	ID: number; // Unique identifier for the transaction
	Items: number; // Number of items in the transaction
	Price: number; // Total price of the transaction
	TransactionType: string; // Type of transaction (e.g., "Daily Meal")
};

export type DayData = {
	amount: number;
	transactions: TransactionRow[];
};
