import { TouchableOpacity, View } from "react-native";
import { TransactionListItemProps } from "../Transactions.types";
import { formatPrice } from "@/utils/currency";
import { getTransactionTypeColor } from "@/utils/transactions";
import { Typography } from "@/components/_common/Typography";
import { useRouter } from "expo-router";

export const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
      }}
      onPress={() => router.navigate(`/edit-transaction/${transaction.id}`)}
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
    </TouchableOpacity>
  );
};
