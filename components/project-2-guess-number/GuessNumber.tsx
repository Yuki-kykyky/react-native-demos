import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { GameStart } from "@/components/project-2-guess-number/GameStart";
import { useEffect, useState } from "react";
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