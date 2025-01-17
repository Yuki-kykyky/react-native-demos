import { createStackNavigator } from "@react-navigation/stack";
import BibiAccountsPage from "@/components/project-4-accounts/BibiAccounts";

const Stack = createStackNavigator();
export const BibiAccounts = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="BibiAccount" component={BibiAccountsPage}/>
		</Stack.Navigator>
	)
}

export default BibiAccounts;