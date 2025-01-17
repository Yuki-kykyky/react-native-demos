import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountList } from "@/components/project-4-accounts/accountList";

const Tab = createBottomTabNavigator()

export const BibiAccounts = () => {
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false
		}}>
			<Tab.Screen name="RecentBills" component={AccountList}/>
			<Tab.Screen name="AllBills" component={AccountList}/>
		</Tab.Navigator>
	);
}

export default BibiAccounts;