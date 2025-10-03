export interface TransactionListProps {
  date: string;
}

export interface TransactionListItemProps {
  transaction: {
    id: number;
    amount: number;
    accountName: string | null;
    categoryName: string | null;
    type: "INCOME" | "EXPENSE" | "TRANSFER" | null;
    localTransactionDate: string;
  };
}
