import {
  ACCOUNT_TYPE,
  accounts,
  categories,
  TRANSACTION_TYPE,
  transactions,
} from "@/db/schema";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import AsyncStorage from "expo-sqlite/kv-store";
import * as schema from "@/db/schema";

export const generateDummyData = async (
  db: ExpoSQLiteDatabase<typeof schema>,
) => {
  const initialized = AsyncStorage.getItemSync("dbInitialized");

  if (initialized === "true") return;

  console.log("[DB] Inserting dummy data...");

  await db
    .insert(categories)
    .values([{ name: "Food" }, { name: "Bills" }, { name: "Fuel" }]);

  await db.insert(accounts).values([
    { name: "Savings", type: ACCOUNT_TYPE.DEBIT },
    { name: "Emergency Funds", type: ACCOUNT_TYPE.DEBIT },
    { name: "BPI Gold", type: ACCOUNT_TYPE.CREDIT },
  ]);

  await db.insert(transactions).values([
    {
      accountId: 1,
      type: TRANSACTION_TYPE.EXPENSE,
      amount: 420,
      transactionDate: new Date(2025, 8, 23).toISOString(),
      categoryId: 1,
    },
    {
      accountId: 2,
      type: TRANSACTION_TYPE.EXPENSE,
      amount: 15000,
      transactionDate: new Date(2025, 8, 24, 7).toISOString(),
      categoryId: 2,
    },
    {
      accountId: 1,
      type: TRANSACTION_TYPE.EXPENSE,
      amount: 69,
      transactionDate: new Date(2025, 8, 24, 12).toISOString(),
      categoryId: 1,
    },
  ]);

  AsyncStorage.setItemSync("dbInitialized", "true");
};
