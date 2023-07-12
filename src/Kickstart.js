import { useTailwind } from "tailwind-rn";
import { SafeAreaView, Text, View } from "react-native";

export function KickStart() {
  const tailwind = useTailwind();
  return (
    <SafeAreaView>
      <View>
        <Text style={[tailwind("text-lg text-red-300 uppercase"), tailwind(`${!true ? "text-2xl" : "text-3xl"}`)]}>
          Hello hello Tailwind!
        </Text>
      </View>
    </SafeAreaView>
  );
}
