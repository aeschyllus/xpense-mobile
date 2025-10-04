import { useQuery } from "@/hooks/useQuery";
import _ from "lodash";
import { useMemo } from "react";
import { View } from "react-native";
import { getTransactions } from "./Transactions.queries";
import { TransactionActionButton } from "./_components/TransactionActionButton";
import { TransactionList } from "./_components/TransactionList";
import { TransactionListItem } from "./_components/TransactionListItem";
import { Typography } from "@/components/_common/Typography";

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
      <View style={{ borderBottomWidth: 0.8, padding: 10 }}>
        <Typography>Transactions</Typography>
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
