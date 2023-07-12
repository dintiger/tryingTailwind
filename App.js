import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import { AppNav } from "./src/AppNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/use-auth";
import { HomeScreen } from "./src/home-screen/screen";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaProvider>
          <TailwindProvider utilities={utilities}>
            <HomeScreen />
            <StatusBar style="auto" />
          </TailwindProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
