import { Colors } from "@/constants/Colors";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";

export const GameEnd = ({setPage}: { setPage: (page: string) => void }) => {
	return (
		<View>
			<GameTitle title={'Bingo !'}/>
			<View style={styles.container}>
				<Text style={{fontWeight: 'bold', fontSize: 18}}>You got it !</Text>
				<Pressable onPress={() => {
					setPage('game-start');
				}}>
					<FontAwesome name="undo" size={32} color={Colors.red['400']}/>
				</Pressable>
			</View>
		</View>
	)
};
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 20
	}
});