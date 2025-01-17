import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountList } from "@/components/project-4-accounts/accountList";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator()

export const BibiAccounts = () => {
	return (
		<Tab.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: '#1f4d9d',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 24,
			},
			tabBarActiveTintColor: '#fff',
			tabBarInactiveTintColor: '#000000',
			tabBarStyle: {
				height: 60,
				paddingTop: 5,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#2057a9',
			},
			tabBarLabelStyle: {
				fontSize: 12
			},
			headerRight: ({tintColor}) => (
				<Pressable
					onPress={() => {
						console.log('Add new bill')
					}}>
					<MaterialIcons
						style={{paddingRight: 16}}
						name="add-circle-outline" size={24} color={tintColor}/>
				</Pressable>
			)
		}}>
			<Tab.Screen
				name="RecentBills"
				component={AccountList}
				initialParams={{
					type: 'last-seven-days'
				}}
				options={{
					tabBarLabel: 'Recent',
					title: 'Recent Bills',
					tabBarIcon: ({color, size}) => (
						<MaterialCommunityIcons name="timer-sand" size={size} color={color}/>
					),

				}}
			/>
			<Tab.Screen
				name="AllBills"
				component={AccountList}
				initialParams={{
					type: 'all'
			}}
				options={{
					tabBarLabel: 'All Bills',
					title: 'All Bills',
					tabBarIcon: ({color, size}) => (
						<AntDesign name="calendar" size={size} color={color}/>
					)
				}}
			/>
		</Tab.Navigator>
	);
}

export default BibiAccounts;