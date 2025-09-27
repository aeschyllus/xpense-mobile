import { Text, View } from "react-native";
import { TransactionListItemProps } from "../Transactions.types";

export const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ width: 70 }}>{transaction.categoryName}</Text>
        <Text>{transaction.accountName}</Text>
      </View>
      <Text>{transaction.amount}</Text>
    </View>
  );
};
