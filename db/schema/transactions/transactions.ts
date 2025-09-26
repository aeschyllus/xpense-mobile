import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { TRANSACTION_TYPE } from "./transactions.types";
import { accounts } from "../accounts/accounts";
import { categories } from "../categories/categories";

export const transactions = sqliteTable("transactions", {
  id: int().primaryKey(),
  accountId: int("account_id")
    .notNull()
    .references(() => accounts.id),
  type: text()
    .$type<keyof typeof TRANSACTION_TYPE>()
    .default(TRANSACTION_TYPE.EXPENSE),
  amount: int().notNull(),
  transactionDate: text("transaction_date").notNull(),
  categoryId: int("category_id").references(() => categories.id),
  toAccountId: int("to_account_id").references(() => accounts.id),
  description: text(),
});
