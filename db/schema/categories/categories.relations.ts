import { relations } from "drizzle-orm";
import { categories } from "./categories";
import { transactions } from "../transactions/transactions";

export const categoriesRelations = relations(categories, ({ many }) => ({
  transactions: many(transactions),
}));
