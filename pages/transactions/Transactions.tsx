import { useQuery } from "@/hooks/useQuery";
import _ from "lodash";
import { useMemo } from "react";
import { Text, View } from "react-native";
import { getTransactions } from "./Transactions.queries";
import { TransactionActionButton } from "./components/TransactionActionButton";
import { TransactionList } from "./components/TransactionList";
import { TransactionListItem } from "./components/TransactionListItem";

// TODO: Add Styles for transactions screen
// TODO: Clickable transaction item to view details

export const TransactionsScreen = () => {
  const { rows } = useQuery(getTransactions);
  const groupedRows = useMemo(() => {
    return _.chain(rows)
      .groupBy("localTransactionDate")
      .map((value, key) => ({ date: key, transactions: value }))
      .value();
  }, [rows]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ borderBottomWidth: 0.5, padding: 10 }}>
        <Text>Transactions</Text>
      </View>

      <View style={{ padding: 12 }}>
        {_.map(groupedRows, (row) => (
          <TransactionList key={row.date} date={row.date}>
            {_.map(row.transactions, (transaction) => (
              <TransactionListItem
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </TransactionList>
        ))}
      </View>

      <TransactionActionButton />
    </View>
  );
};
