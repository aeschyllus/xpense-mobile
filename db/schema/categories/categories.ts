import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
  id: int().primaryKey(),
  name: text().notNull(),
  description: text(),
});
