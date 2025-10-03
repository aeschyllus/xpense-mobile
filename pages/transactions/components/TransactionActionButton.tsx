import { COLORS } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

export const TransactionActionButton = () => {
  return (
    <TouchableOpacity
      // TODO: Navigate to add transaction screen
      onPress={() => alert("button pressed")}
      style={{
        backgroundColor: COLORS.BLACK,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        right: 20,
        elevation: 5,
      }}
    >
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
};
