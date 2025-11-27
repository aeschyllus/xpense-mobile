import _ from "lodash";
import { useQuery } from "@/hooks/useQuery";
import { useLocalSearchParams } from "expo-router";
import { Container } from "@/components/_common/Container";
import { useMemo } from "react";
import { getTransaction } from "@/utils/queries/transactions";
import { COLORS } from "@/constants/colors";
import { EditTransactionForm } from "./_components/EditTransactionForm/EditTransactionForm";

export const EditTransactionScreen = () => {
  const { transactionId } = useLocalSearchParams();
  const { rows } = useQuery(() => getTransaction(Number(transactionId)));
  const transaction = useMemo(() => {
    return rows?.[0]!;
  }, [rows]);

  if (!transaction) return null;

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: COLORS.WHITE,
        gap: 24,
      }}
    >
      <EditTransactionForm transaction={transaction} />
    </Container>
  );
};
