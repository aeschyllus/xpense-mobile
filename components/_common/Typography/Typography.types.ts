import { StyleProp, TextStyle } from "react-native";

export interface TypographyProps {
  fontStyle?: "regular" | "italic" | "bold" | "bolditalic";
  style?: StyleProp<TextStyle>;
}
