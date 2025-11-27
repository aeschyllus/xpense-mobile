import { COLORS } from "@/constants/colors";
import { TRANSACTION_TYPE } from "@/db/schema";
import { useMemo } from "react";
import { Pressable, Text } from "react-native";

interface TransactionTypeTabProps {
  title: string;
  selected: boolean;
}

export const TransactionTypeTab: React.FC<TransactionTypeTabProps> = ({
  title,
  selected,
}) => {
  const tabColor = useMemo(() => {
    switch (title) {
      case TRANSACTION_TYPE.EXPENSE:
        return COLORS.RED;
      case TRANSACTION_TYPE.INCOME:
        return COLORS.GREEN;
      case TRANSACTION_TYPE.TRANSFER:
        return COLORS.BLUE;
      default:
        return COLORS.BLACK;
    }
  }, [selected]);

  return (
    <Pressable
      style={[
        {
          flex: 1,
          paddingVertical: 3,
          borderWidth: 0.8,
          borderRadius: 5,
        },
        selected && { borderColor: tabColor },
      ]}
    >
      <Text
        style={[
          {
            fontFamily: "SpaceMono",
            textAlign: "center",
            textTransform: "capitalize",
          },
          selected && { color: tabColor },
        ]}
      >
        {title.toLowerCase()}
      </Text>
    </Pressable>
  );
};
