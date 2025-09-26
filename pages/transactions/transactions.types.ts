import { getTransactionsWithCategoryAndAccount } from "./transactions.queries";

export type TransactionsWithCategoryAndAccountResult = Awaited<
  ReturnType<typeof getTransactionsWithCategoryAndAccount>
>;
