import { DATABASE_NAME } from "@/constants/db";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import * as schema from "@/db/schema";

export const client = openDatabaseSync(DATABASE_NAME);
export const db = drizzle(client, { schema: { ...schema } });
