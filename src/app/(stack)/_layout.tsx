import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

import { Loading } from "@/components/Loading";
import { AppProvider } from "@/contexts/AppProvider";

export default function StackLayout() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <AppProvider>
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      {isFontsLoaded ? (
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      ) : (
        <Loading />
      )}
    </AppProvider>
  );
}
