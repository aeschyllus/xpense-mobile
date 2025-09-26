import { relations } from "drizzle-orm";
import { transactions } from "./transactions";
import { categories } from "../categories/categories";
import { accounts } from "../accounts/accounts";

export const transactionsRelations = relations(transactions, ({ one }) => ({
  category: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id],
  }),
}));
