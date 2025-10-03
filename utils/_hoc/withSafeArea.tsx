import { SafeAreaView } from "react-native-safe-area-context";

// NOTE: You can add a `backgroundColor` inside the `SafeAreaView` component.
// This may be useful if you will implement a light/dark theme
export const withSafeArea =
  <P extends object>(WrappedComponent: React.FC<P>) =>
  (props: P) => (
    <SafeAreaView style={{ flex: 1 }}>
      <WrappedComponent {...props} />
    </SafeAreaView>
  );
