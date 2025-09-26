import { relations } from "drizzle-orm";
import { accounts } from "./accounts";
import { transactions } from "../transactions/transactions";

export const accountsRelations = relations(accounts, ({ many }) => ({
  transactions: many(transactions),
}));
