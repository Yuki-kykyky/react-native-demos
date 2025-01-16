import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "@/app/HomePage";
import TodoListPage from "@/components/project-1-todo-list/TodoList";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Tab = createBottomTabNavigator()

export const TodoList = () => {
	return (
		<Tab.Navigator initialRouteName={'Todo'} screenOptions={{
			tabBarActiveTintColor: Colors.purple['400'],
			tabBarInactiveTintColor: Colors.grey['400'],
			tabBarStyle: {
				backgroundColor: '#f0f0f0',
				height: 60,
				paddingTop: 5,
				alignItems: 'center',
				justifyContent: 'center',
			},
			tabBarLabelStyle: {fontSize: 12},
			headerShown: false
		}}>
			<Tab.Screen
				name="Todo"
				component={TodoListPage}
				options={{
					tabBarLabel: 'Todo List',
					tabBarIcon: ({color, size}) => (
						<Ionicons name="list" size={size} color={color}/>
					)
				}}/>
			<Tab.Screen
				name="Home"
				component={HomePage}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({color, size}) => (
						<Ionicons name="home" size={size} color={color}/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}
export default TodoList;