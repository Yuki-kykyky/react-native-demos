import { StyleSheet, Text, View } from "react-native";
import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";
import { OperationButtonGroup } from "@/components/project-2-guess-number/components/OperationButtonGroup";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

export const InGame = ({setPage}: { setPage: (page: string) => void }) => {
	const goalNumber = '53';
	const getRandomNumber = ({min, max}: { min: string, max: string }) =>
		String(Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min));

	const [min, setMin] = useState('0');
	const [max, setMax] = useState('100');
	const [guessHistory, setGuessHistory] = useState<string[]>([getRandomNumber({min, max})]);

	const handleGuess = (shouldGoHigh: boolean) => {
		const currentGuess = Number(guessHistory[0]);
		const handleLow = () => {
			// currentGuess < goalNumber
			setMin(String(currentGuess) + 1);
			setGuessHistory([getRandomNumber({min: guessHistory[0], max}), ...guessHistory]);
		}

		const handleHigh = () => {
			// currentGuess > goalNumber
			setMax(String(currentGuess - 1));
			setGuessHistory([getRandomNumber({min, max: guessHistory[0]}), ...guessHistory]);
		}

		if ((shouldGoHigh && currentGuess >= Number(goalNumber)) || (!shouldGoHigh && currentGuess <= Number(goalNumber))) {
			alert('Don\'t lie to me :)');
		} else {
			shouldGoHigh ? handleLow() : handleHigh();
		}
	};

	return (
		<View>
			<GameTitle title={'Let\'s Guess !'}/>
			<View style={styles.container}>
				<Text style={{fontWeight: 'bold', fontSize: 18}}>Is this your number ?</Text>
				<Text style={{fontSize: 24}}>{guessHistory[0]}</Text>
				<OperationButtonGroup
					handleLeft={() => handleGuess(true)}
					textLeft={'too low'}
					textRight={'too high'}
					handleRight={() => handleGuess(false)}
					themeColor={Colors.blue['400']}
				/>
				{guessHistory[0] === goalNumber && (<Text
					style={{color: Colors.green['400'], fontSize: 18, position: 'absolute', right: 20, bottom: 20}}>✅</Text>)}
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		borderColor: '#fff',
		borderWidth: 2,
		backgroundColor: '#ffffffdd',
		borderRadius: 10,
		alignItems: 'center',
		padding: 12,
		gap: 8,
		position: 'relative',
	},
});