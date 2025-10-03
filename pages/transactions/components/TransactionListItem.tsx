import { Text, View } from "react-native";
import { TransactionListItemProps } from "../Transactions.types";
import { formatPrice } from "@/utils/currency";
import { getTransactionTypeColor } from "@/utils/transactions";

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
        <Text style={{ width: 70 }}>{transaction.categoryName}</Text>
        <Text>{transaction.accountName}</Text>
      </View>
      <Text style={{ color: getTransactionTypeColor(transaction.type) }}>
        {formatPrice(transaction.amount)}
      </Text>
    </View>
  );
};
