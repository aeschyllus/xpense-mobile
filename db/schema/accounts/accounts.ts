import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { ACCOUNT_TYPE } from "./accounts.types";

export const accounts = sqliteTable("accounts", {
  id: int().primaryKey(),
  name: text().notNull(),
  type: text().$type<keyof typeof ACCOUNT_TYPE>().default(ACCOUNT_TYPE.DEBIT),
  amount: int().default(0),
  outstandingBalance: int("outstanding_balance"),
  description: text(),
});
