import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { Suspense, useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { generateDummyData } from "@/db/utils";
import { DATABASE_NAME } from "@/constants/db";
import { SQLiteProvider } from "expo-sqlite";
import { db } from "@/db/client";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, fontError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMono-Italic": require("../assets/fonts/SpaceMono-Italic.ttf"),
    "SpaceMono-Bold": require("../assets/fonts/SpaceMono-Bold.ttf"),
    "SpaceMono-BoldItalic": require("../assets/fonts/SpaceMono-BoldItalic.ttf"),
  });
  const { error: migrationError } = useMigrations(db, migrations);

  // NOTE: For testing purposes only. Comment out before pushing
  useEffect(() => {
    generateDummyData(db);
    // truncateDummyData(db);
  }, []);

  useEffect(() => {
    if (loaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [loaded, fontError]);

  if (!loaded && !fontError) {
    return null;
  }

  if (migrationError) {
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Migration error: {migrationError.message}</Text>
      </View>
    );
  }

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SQLiteProvider>
    </Suspense>
  );
}
