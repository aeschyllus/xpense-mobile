import { accounts, categories, transactions } from "@/db/schema";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import AsyncStorage from "expo-sqlite/kv-store";
import * as schema from "@/db/schema";

export const truncateDummyData = async (
  db: ExpoSQLiteDatabase<typeof schema>,
) => {
  console.log("[DB] Truncating tables...");

  await db.delete(accounts);
  await db.delete(categories);
  await db.delete(transactions);

  AsyncStorage.setItemSync("dbInitialized", "false");
};
