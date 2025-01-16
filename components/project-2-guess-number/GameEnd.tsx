import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";
import { useGuessNumber } from "@/hooks/useGuessNumber";
import { useNavigation } from "@react-navigation/native";

export const GameEnd = () => {
	const {goalNumber, guessRound} = useGuessNumber() as { goalNumber: string; guessRound: number };
const navigation = useNavigation();
	return (
		<View>
			<GameTitle title={'Bingo :)'}/>
			<View style={styles.container}>
				<Image style={styles.congratsImage} source={require('@/assets/images/congrats.jpg')}/>
				<View style={styles.summaryContainer}>
					<Text style={styles.summaryTitle}>You Did A Great Job</Text>
					<View style={{}}>
						<Text style={{textAlign: 'center', fontWeight: '500'}}>It takes
							system <Text
								style={{fontSize: 24, fontWeight: 'bold', color: Colors.pink['400']}}>{guessRound}</Text> times
							to guess your number.
						</Text>
						<View style={{flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center'}}>
							<Text style={{textAlign: 'center', fontWeight: '500'}}>you have set a good number:</Text>
							<Text style={styles.summaryEmphasize}>{goalNumber}</Text>
						</View>
					</View>
					<Pressable style={styles.button} onPress={()=>navigation.navigate('GameStart')}>
						<Text style={{fontWeight: 'bold', color: Colors.pink['400'], fontSize: 16}}>start new game</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
};
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 20,
		gap: 16
	},
	congratsImage: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 4,
		borderColor: Colors.pink['200'],
		elevation: 8
	},
	summaryContainer: {
		borderColor: '#fff',
		borderWidth: 4,
		width: 360,
		backgroundColor: '#ffffffdd',
		borderRadius: 10,
		alignItems: 'center',
		padding: 20,
		gap: 12
	},
	summaryTitle: {
		fontWeight: 'bold',
		fontSize: 21,
		textAlign: 'center',
		color: Colors.pink['400'],
		borderBottomWidth: 2,
		paddingHorizontal: 12,
		paddingBottom: 4,
		borderColor: Colors.pink['400'],
	},
	summaryEmphasize: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.pink['400'],
		marginLeft: 8,
		paddingHorizontal: 4,
		borderBottomWidth: 1
	},
	button: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: Colors.pink['100'],
		borderWidth: 3,
		borderColor: Colors.pink['200']
	}
});