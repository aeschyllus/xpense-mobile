import _ from "lodash";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { TAB_SCREENS } from "@/config/tabs";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      {_.map(TAB_SCREENS, (screen) => (
        <Tabs.Screen
          name={screen.name}
          options={{
            title: screen.title,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name={screen.iconName} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
