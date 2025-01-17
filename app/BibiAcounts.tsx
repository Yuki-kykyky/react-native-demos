import { createStackNavigator } from "@react-navigation/stack";
import BibiAccountsPage from "@/components/project-4-accounts/BibiAccounts";
import { AccountModify } from "@/components/project-4-accounts/accountModify";

const Stack = createStackNavigator();

export const BibiAccounts = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="BibiAccount" component={BibiAccountsPage}/>
			<Stack.Screen
				name="AccountModify"
				component={AccountModify}
				options={({route}) => ({
				headerShown: true,
				title: route.params?.action === 'add' ? 'Add Bill' : 'Edit Bill'
			})}/>
		</Stack.Navigator>
	)
}

export default BibiAccounts;