import { transactions } from "./transactions";

export enum TRANSACTION_TYPE {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
  TRANSFER = "TRANSFER",
}

export type Transaction = typeof transactions.$inferSelect;
