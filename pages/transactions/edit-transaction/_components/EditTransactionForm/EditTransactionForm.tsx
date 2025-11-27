import { View } from "react-native";
import { TransactionTypeTabs } from "../TransactionTypeTabs";
import { Typography } from "@/components/_common/Typography";
import { Input } from "@/components/_common/Input";
import { useForm } from "react-hook-form";
import {
  EditTransactionFormProps,
  EditTransactionInputs,
} from "./EditTransactionForm.types";

export const EditTransactionForm: React.FC<EditTransactionFormProps> = ({
  transaction,
}) => {
  const { register } = useForm<EditTransactionInputs>();

  return (
    <>
      <TransactionTypeTabs transactionType={transaction.type!} />

      <View style={{ flexDirection: "row", gap: 24 }}>
        <View style={{ gap: 12 }}>
          <Typography>Date</Typography>
          <Typography>Amount</Typography>
          <Typography>Category</Typography>
          <Typography>Account</Typography>
          <Typography>Desc.</Typography>
        </View>
        <View style={{ gap: 12 }}>
          <Input
            defaultValue={transaction.transactionDate!}
            {...register("transactionDate")}
          />
          <Input
            type="numeric"
            defaultValue={String(transaction.amount)}
            {...register("amount")}
          />
          <Input
            defaultValue={transaction.categoryName!}
            {...register("categoryName")}
          />
          <Input
            defaultValue={transaction.accountName!}
            {...register("accountName")}
          />
          <Input
            defaultValue={transaction.description!}
            {...register("description")}
          />
        </View>
      </View>
    </>
  );
};
