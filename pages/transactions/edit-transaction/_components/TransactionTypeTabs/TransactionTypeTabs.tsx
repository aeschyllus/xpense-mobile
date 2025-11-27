import _ from "lodash";
import { View } from "react-native";
import { TransactionTypeTab } from "./TransactionTypeTab";
import { TRANSACTION_TYPE } from "@/db/schema";

interface TransactionTypeTabsProps {
  transactionType: string;
}

export const TransactionTypeTabs: React.FC<TransactionTypeTabsProps> = ({
  transactionType,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      {_.map(_.keys(TRANSACTION_TYPE), (value) => (
        <TransactionTypeTab
          key={value}
          title={value}
          selected={transactionType === value}
        />
      ))}
    </View>
  );
};
