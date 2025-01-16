import { GameStart } from "@/components/project-2-guess-number/GameStart";
import { InGame } from "@/components/project-2-guess-number/InGame";
import { GameEnd } from "@/components/project-2-guess-number/GameEnd";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "@/constants/Colors";

const Stack = createStackNavigator();

export const GuessNumber = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen
				name="GameStart"
				component={GameStart}
			/>
			<Stack.Screen
				name="InGame"
				component={InGame}
				options={{
					headerShown: true,
					/*
					In React Navigation, headerBackTitle is not displayed by default on Android.
					This is because the design specifications of the Android platform
					usually only show a back arrow, not a title.
					*/
					headerBackTitle: 'Get Back',
					headerBackTitleStyle: {fontWeight: 'bold', fontSize: 16, color: Colors.pink['200']},
				}}
			/>
			<Stack.Screen name="GameEnd" component={GameEnd}/>
		</Stack.Navigator>
	)
};

export default GuessNumber;