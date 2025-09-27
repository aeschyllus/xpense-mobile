import { Text, View } from "react-native";
import { TransactionListProps } from "../Transactions.types";

export const TransactionList: React.FC<
  React.PropsWithChildren<TransactionListProps>
> = ({ date, children }) => {
  return (
    <View style={{ gap: 6 }}>
      <Text>{date}</Text>
      {children}
    </View>
  );
};
