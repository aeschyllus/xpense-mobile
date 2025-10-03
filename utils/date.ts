// NOTE: Use the format 'YYYY-mm-dd' for all `date` string parameter

import { DAY_OF_WEEK_SHORT, MONTH_SHORT } from "@/constants/date";

export const getDayOfMonth = (
  /** Format: YYYY-mm-dd */
  date: string,
) => new Date(date).getDate();

export const getDayOfWeekShort = (
  /** Format: YYYY-mm-dd */
  date: string,
) => DAY_OF_WEEK_SHORT[new Date(date).getDay()];

export const getMonthNameShort = (
  /** Format: YYYY-mm-dd */
  date: string,
) => MONTH_SHORT[new Date(date).getMonth() - 1];
