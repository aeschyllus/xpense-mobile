import _ from "lodash";
import { Text, View } from "react-native";
import { getTransactions } from "./transactions.queries";
import { useQuery } from "@/hooks/useQuery";

export const TransactionsScreen = () => {
  const { rows } = useQuery(getTransactions);

  return (
    <View>
      <View style={{ borderBottomWidth: 0.5, padding: 10 }}>
        <Text>Transactions</Text>
      </View>

      <View style={{ padding: 12 }}>
        {_.map(rows, (row) => (
          <View
            key={row.id}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 70 }}>{row.categoryName}</Text>
              <Text>{row.accountName}</Text>
            </View>
            <Text>{row.amount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
