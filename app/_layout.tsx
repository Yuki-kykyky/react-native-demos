import 'react-native-reanimated';
import { ProjectList } from "./ProjectList";
import { TodoList } from "./TodoList";
import { GuessNumber } from "./GuessNumber";
import { HomePage } from "@/app/HomePage";
import { createDrawerNavigator } from "@react-navigation/drawer";

const myDrawer = createDrawerNavigator()

export default function RootLayout() {
  return (
    <myDrawer.Navigator>
      <myDrawer.Screen name="Home" component={HomePage}/>
      <myDrawer.Screen name="ProjectList" component={ProjectList}/>
      <myDrawer.Screen name="ProjectOne" component={TodoList}/>
      <myDrawer.Screen name="ProjectTwo" component={GuessNumber}/>
    </myDrawer.Navigator>
  );
}
