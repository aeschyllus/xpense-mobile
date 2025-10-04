import { View } from "react-native";
import { TransactionListProps } from "../Transactions.types";
import {
  getDayOfMonth,
  getDayOfWeekShort,
  getMonthNameShort,
} from "@/utils/date";
import { COLORS } from "@/constants/colors";
import { Typography } from "@/components/_common/Typography";

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
          <Typography style={{ color: COLORS.WHITE }}>
            {getDayOfWeekShort(date)}
          </Typography>
        </View>
        <Typography style={{ fontWeight: "bold" }}>
          {getDayOfMonth(date)} {getMonthNameShort(date)}
        </Typography>
      </View>
      {children}
    </View>
  );
};
