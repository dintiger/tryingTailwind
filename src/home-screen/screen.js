import {useTailwind} from "tailwind-rn";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import ArrowDownIcon from '../../svgs/arrow-down.svg'
import FilterIcon from '../../svgs/filter-alt.svg'
import AddPlusIcon from '../../svgs/add-plus.svg'
import {useNavigation} from "@react-navigation/native";
import {useAuth} from "../use-auth";

export function HomeScreen(){
    const tailwind = useTailwind()
    const navigation = useNavigation()
    const authHook = useAuth()
    return (
        <SafeAreaView style={tailwind('mx-4 flex-1')}>
            <Text style={tailwind('text-3xl font-bold')}>Goals</Text>
            <View style={tailwind('flex-row justify-between my-4')}>
                <View style={tailwind('flex-row items-center')}>
                    <Text style={tailwind('text-base')}>Recent</Text>
                    <ArrowDownIcon width={20} height={20} />
                </View>
                <FilterIcon width={30} height={30} />
            </View>
            <ScrollView>
                {authHook.goalsList.map((goal, i) => (
                    <View key={i} style={tailwind('rounded bg-blue-800 p-3 w-1/2')}>
                    <View style={tailwind('mb-6')}>
                        <Text style={tailwind('text-xl text-white')}>{goal.title}</Text>
                        <Text style={tailwind('text-xs text-white')}>{goal.timeAgo}</Text>
                    </View>
                    <View>
                        <Text style={tailwind('text-xs text-white')}>{goal.description}</Text>
                    </View>
                </View>))}
            </ScrollView>
            <View style={tailwind('relative flex-1 justify-end')}>
                    <AddGoalButton
                        onPress={() => {
                            navigation.navigate("CreateGoal")
                        }}
                        textStyle={tailwind('text-xl')}
                        style={tailwind('bg-red-600 rounded-lg items-center absolute bottom-0 right-0 p-3')} />
            </View>
        </SafeAreaView>
    )
}


function AddGoalButton(props){
    const tailwind = useTailwind()
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[tailwind('flex-row'), props.style]}>
                <AddPlusIcon stroke={"white"} width={20} height={20} />
                <Text style={props.textStyle}>New Goal</Text>
            </View>
        </TouchableOpacity>
    )
}