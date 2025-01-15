import 'react-native-reanimated';
import { ProjectList } from "./ProjectList";
import { createStackNavigator } from "@react-navigation/stack";
import { TodoList } from "./TodoList";
import { GuessNumber } from "./GuessNumber";
import { HomePage } from "@/app/HomePage";

const myStack = createStackNavigator({
  screens: {
    Home: HomePage,
    ProjectList: ProjectList,
    ProjectOne: TodoList,
    ProjectTwo: GuessNumber
  }
})

export default function RootLayout() {
  return (
    <myStack.Navigator
      screenOptions={({}) => ({
        headerShown: false
      })}
    >
      <myStack.Screen name="Home" component={HomePage}/>
      <myStack.Screen name="ProjectList" component={ProjectList}/>
      <myStack.Screen name="ProjectOne" component={TodoList}/>
      <myStack.Screen name="ProjectTwo" component={GuessNumber}/>
    </myStack.Navigator>
  );
}
