import React from "react";
import { useTailwind } from "tailwind-rn";
import { SafeAreaView, TextInput, TouchableOpacity, View, Text, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../use-auth";

export function CreateGoal() {
  const [goal, setGoal] = React.useState({ title: "", description: "", timeAgo: "today" });
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const authHook = useAuth();
  function onCreateGoal() {
    authHook.createsGoal(goal);
    // navigation.navigate("Home")
    navigation.goBack();
  }

  function onChange(title, value) {
    setGoal((prevState) => ({ ...prevState, [title]: value }));
  }

  return (
    <SafeAreaView style={tailwind(`mx-4 flex-1 ${Platform.OS === "android" ? "mt-9" : ""}`)}>
      <View style={tailwind("mb-3")}>
        <TextInput
          onChangeText={(val) => onChange("title", val)}
          style={tailwind("border-2 border-solid border-indigo-500 rounded-lg p-3")}
        />
      </View>
      <View>
        <TextInput
          multiline={true}
          textAlignVertical={"top"}
          onChangeText={(val) => onChange("description", val)}
          numberOfLines={5}
          style={tailwind("border-2 border-solid border-indigo-500 rounded-lg p-3 h-48")}
        />
      </View>
      <TouchableOpacity onPress={onCreateGoal}>
        <Text>Create Goal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
