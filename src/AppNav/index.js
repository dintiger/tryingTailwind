import { View, Text, Button, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTailwind } from "tailwind-rn";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Zombie from "../../zombie.svg";

const AppStack = createNativeStackNavigator();
export function AppNav() {
  return (
    <AppStack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={"About"} component={About} />
      <AppStack.Screen name={"Home"} component={Home} />
    </AppStack.Navigator>
  );
}
function Home() {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[tailwind("flex-1"), { marginTop: insets.top, marginBottom: insets.bottom }]}>
      <Text>Home component</Text>
      <Button
        title={"Go to About"}
        onPress={() => {
          navigation.navigate("About", { person: "Pravin" });
          //   if (navigation.canGoBack()) {
          //     navigation.goBack();
          //   }
        }}
      />
      <Zombie width={250} />
    </View>
  );
}

function About() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView>
      <View>
        <Text>About component {route.params.person}</Text>
        <Button
          title={"Go to Home"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
