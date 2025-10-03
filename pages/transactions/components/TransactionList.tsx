import { Text, View } from "react-native";
import { TransactionListProps } from "../Transactions.types";
import {
  getDayOfMonth,
  getDayOfWeekShort,
  getMonthNameShort,
} from "@/utils/date";
import { COLORS } from "@/constants/colors";

export const TransactionList: React.FC<
  React.PropsWithChildren<TransactionListProps>
> = ({ date, children }) => {
  return (
    <View style={{ gap: 6, marginBottom: 12 }}>
      <View
        style={{
          borderWidth: 0.8,
          borderRadius: 10,
          padding: 6,
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        <View
          style={{ backgroundColor: COLORS.BLUE, padding: 4, borderRadius: 8 }}
        >
          <Text style={{ color: COLORS.WHITE }}>{getDayOfWeekShort(date)}</Text>
        </View>
        <Text style={{ fontWeight: "bold" }}>
          {getDayOfMonth(date)} {getMonthNameShort(date)}
        </Text>
      </View>
      {children}
    </View>
  );
};
