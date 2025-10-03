import { COLORS } from "@/constants/colors";

export const getTransactionTypeColor = (transactionType: string | null) => {
  switch (transactionType) {
    case "INCOME":
      return COLORS.GREEN;
    case "EXPENSE":
      return COLORS.RED;
    case "TRANSFER":
      return COLORS.GRAY;
    default:
      return COLORS.BLUE;
  }
};
