import { db } from "@/db/client";
import { accounts, categories, transactions } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";

// TODO: Figure out a way to use dynamic offset hours instead of hardcoding "+8 hours"
const localTransactionDateExpr = sql<string>`
  date(datetime(
    replace(replace(${transactions.transactionDate}, 'T', ' '), 'Z', ' '),
    '+8 hours'
  ))
`;

export const getTransactions = () =>
  db
    .select({
      id: transactions.id,
      amount: transactions.amount,
      accountName: accounts.name,
      categoryName: categories.name,
      type: transactions.type,
      localTransactionDate: localTransactionDateExpr,
    })
    .from(transactions)
    .leftJoin(categories, eq(transactions.categoryId, categories.id))
    .leftJoin(accounts, eq(transactions.accountId, accounts.id))
    .orderBy(desc(transactions.transactionDate), desc(transactions.id))
    .execute();

export const getTransaction = (transactionId: number) =>
  db
    .select({
      id: transactions.id,
      amount: transactions.amount,
      accountName: accounts.name,
      categoryName: categories.name,
      type: transactions.type,
      transactionDate: transactions.transactionDate,
      description: transactions.description,
    })
    .from(transactions)
    .leftJoin(categories, eq(transactions.categoryId, categories.id))
    .leftJoin(accounts, eq(transactions.accountId, accounts.id))
    .where(eq(transactions.id, transactionId))
    .execute();
