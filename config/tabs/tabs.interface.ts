import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export interface TabScreen {
  name: string;
  title: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
}
