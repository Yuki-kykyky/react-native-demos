import 'react-native-reanimated';
import { ProjectList } from "./ProjectList";
import { GuessNumber } from "./GuessNumber";
import { HomePage } from "@/app/HomePage";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ImageBackground } from "react-native";
import { useScreenSize } from "@/hooks/useScreenSize";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import TodoList from "@/app/TodoList";
import MealsGallery from "@/app/MealsGallery";
import { BibiAccounts } from "@/app/BibiAcounts";

const Drawer = createDrawerNavigator()
const CustomDrawer = (props: any) => {
  return (
    <ImageBackground
      source={require('@/assets/images/background/drawer.jpg')}
      style={{flex: 1}}
    >
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </ImageBackground>
  )
}

export default function RootLayout() {
  const {isLandscape, isSmall} = useScreenSize();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: '#00000080',
        drawerActiveBackgroundColor: '#3c4e9f',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 16,
          fontStyle: 'italic',
        },
        drawerStyle: {
          width: isSmall ? '70%' : 240,
        },
        drawerType: isLandscape ? 'permanent' : 'slide',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Welcome',
          drawerLabel: 'Welcome',
          drawerIcon: (props) => (<Ionicons name="home" size={props.size} color={props.color}/>),
        }}
      />
      <Drawer.Screen
        name="ProjectList"
        component={ProjectList}
        options={{
          title: 'All Projects\' infos',
          drawerLabel: 'All Projects\' infos',
          drawerIcon: (props) => (<Ionicons name="list" size={props.size} color={props.color}/>),
        }}
      />
      <Drawer.Screen
        name="ProjectOne"
        component={TodoList}
        options={{
          title: 'Todo List',
          drawerLabel: 'Todo List',
          drawerIcon: (props) => (<Ionicons name="code" size={props.size} color={props.color}/>),
        }}
      />
      <Drawer.Screen
        name="ProjectTwo"
        component={GuessNumber}
        options={{
          title: 'Guess Number',
          drawerLabel: 'Guess Number',
          drawerIcon: (props) => (<Ionicons name="repeat" size={props.size} color={props.color}/>),
        }}
      />
      <Drawer.Screen
        name="ProjectThree"
        component={MealsGallery}
        options={{
          title: 'Meals Gallery',
          drawerLabel: 'Meals Gallery',
          drawerIcon: (props) => (<Ionicons name="fast-food" size={props.size} color={props.color}/>),
        }}
      />
      <Drawer.Screen
        name="ProjectFour"
        component={BibiAccounts}
        options={{
          headerShown: false,
          drawerLabel: 'Bibi Accounts',
          drawerIcon: (props) => (<FontAwesome5 name="money-bill" size={props.size} color={props.color}/>),
        }}
      />
    </Drawer.Navigator>
  );
}
