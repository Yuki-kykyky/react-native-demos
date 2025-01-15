import { GameStart } from "@/components/project-2-guess-number/GameStart";
import { InGame } from "@/components/project-2-guess-number/InGame";
import { GameEnd } from "@/components/project-2-guess-number/GameEnd";
import { createStackNavigator } from "@react-navigation/stack";

const projectTwoStack = createStackNavigator({
	screens: {
		GameStart: GameStart,
		InGame: InGame,
		GameEnd: GameEnd
	}
});

export const GuessNumber = () => {
	return (
		<projectTwoStack.Navigator>
			<projectTwoStack.Screen name="GameStart" component={GameStart}/>
			<projectTwoStack.Screen name="InGame" component={InGame}/>
			<projectTwoStack.Screen name="GameEnd" component={GameEnd}/>
		</projectTwoStack.Navigator>
	)
};

export default GuessNumber;