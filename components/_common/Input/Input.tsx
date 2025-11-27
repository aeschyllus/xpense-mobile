import { COLORS } from "@/constants/colors";
import { KeyboardTypeOptions, TextInput } from "react-native";

interface InputProps {
  defaultValue?: string;
  type?: KeyboardTypeOptions;
}

export const Input: React.FC<InputProps> = ({
  defaultValue,
  type = "default",
}) => {
  return (
    <TextInput
      style={{
        fontFamily: "SpaceMono",
        padding: 0,
        borderBottomColor: COLORS.BLACK,
        borderBottomWidth: 0.8,
      }}
      keyboardType={type}
      defaultValue={defaultValue}
    />
  );
};
