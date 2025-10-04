import { Text } from "react-native";
import { TypographyProps } from "./Typography.types";
import { useMemo } from "react";

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  fontStyle = "regular",
  children,
}) => {
  const fontFamily = useMemo(() => {
    switch (fontStyle) {
      case "regular":
        return "SpaceMono";
      case "italic":
        return "SpaceMono-Italic";
      case "bold":
        return "SpaceMono-Bold";
      case "bolditalic":
        return "SpaceMono-BoldItalic";
      default:
        return "SpaceMono";
    }
  }, [fontStyle]);

  return <Text style={{ fontFamily }}>{children}</Text>;
};
