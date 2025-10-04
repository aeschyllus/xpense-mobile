import { View } from "react-native";
import { TransactionListItemProps } from "../Transactions.types";
import { formatPrice } from "@/utils/currency";
import { getTransactionTypeColor } from "@/utils/transactions";
import { Typography } from "@/components/_common/Typography";

export const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Typography style={{ width: 70 }}>
          {transaction.categoryName}
        </Typography>
        <Typography>{transaction.accountName}</Typography>
      </View>
      <Typography style={{ color: getTransactionTypeColor(transaction.type) }}>
        {formatPrice(transaction.amount)}
      </Typography>
    </View>
  );
};
