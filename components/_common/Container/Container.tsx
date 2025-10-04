import { View } from "react-native";
import { ContainerProps } from "./Container.types";

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  style,
  children,
}) => <View style={[{ padding: 12 }, style]}>{children}</View>;
