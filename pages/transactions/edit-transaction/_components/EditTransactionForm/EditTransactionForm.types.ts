export interface EditTransactionFormProps {
  transaction: {
    id: number;
    amount: number;
    accountName: string | null;
    categoryName: string | null;
    type: "INCOME" | "EXPENSE" | "TRANSFER" | null;
    transactionDate: string;
    description: string | null;
  };
}

export interface EditTransactionInputs {
  amount: number;
  accountName: string;
  categoryName: string;
  type: string;
  transactionDate: string;
  description: string;
}
