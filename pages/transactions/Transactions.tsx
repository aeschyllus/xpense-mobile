import { useQuery } from "@/hooks/useQuery";
import _ from "lodash";
import { useMemo } from "react";
import { View } from "react-native";
import { getTransactions } from "./Transactions.queries";
import { TransactionActionButton } from "./_components/TransactionActionButton";
import { TransactionList } from "./_components/TransactionList";
import { TransactionListItem } from "./_components/TransactionListItem";
import { Typography } from "@/components/_common/Typography";
import { Container } from "@/components/_common/Container";

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
      <Container style={{ borderBottomWidth: 0.8 }}>
        <Typography>Transactions</Typography>
      </Container>

      <Container>
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
      </Container>

      <TransactionActionButton />
    </View>
  );
};
