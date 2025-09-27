import { SafeAreaView } from "react-native-safe-area-context";

export const withSafeArea =
  <P extends object>(WrappedComponent: React.FC<P>) =>
  (props: P) =>
    (
      <SafeAreaView style={{ flex: 1 }}>
        <WrappedComponent {...props} />
      </SafeAreaView>
    );
