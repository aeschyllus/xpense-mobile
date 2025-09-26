import { accounts } from "./accounts";

export enum ACCOUNT_TYPE {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

export type Account = typeof accounts.$inferSelect;
