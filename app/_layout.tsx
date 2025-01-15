import 'react-native-reanimated';
import { ProjectList } from "@/app/ProjectList";
import { createStackNavigator } from "@react-navigation/stack";
import { TodoList } from "@/components/project-1-todo-list/TodoList";
import { GuessNumber } from "@/components/project-2-guess-number/GuessNumber";

const myStack = createStackNavigator({
  screens: {
    Home: ProjectList,
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
      <myStack.Screen name="Home" component={ProjectList}/>
      <myStack.Screen name="ProjectOne" component={TodoList}/>
      <myStack.Screen name="ProjectTwo" component={GuessNumber}/>
    </myStack.Navigator>
  );
}
