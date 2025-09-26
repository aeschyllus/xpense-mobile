import { Stack } from "expo-router";
import { Suspense, useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { generateDummyData, truncateDummyData } from "@/db/utils";
import { DATABASE_NAME } from "@/constants/db";
import { SQLiteProvider } from "expo-sqlite";
import { db } from "@/db/client";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";

export default function RootLayout() {
  const { error } = useMigrations(db, migrations);

  // NOTE: For testing purposes only. Comment out before pushing
  useEffect(() => {
    generateDummyData(db);
    // truncateDummyData(db);
  }, []);

  if (error) {
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Migration error: {error.message}</Text>
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
