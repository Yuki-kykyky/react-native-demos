import { Pressable, StyleSheet, Text, View } from "react-native";
import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { OperationButtonGroup } from "@/components/project-2-guess-number/components/OperationButtonGroup";
import { GuessHistory } from "@/components/project-2-guess-number/components/GuessHistory";
import { useGuessNumber } from "@/hooks/useGuessNumber";
import { FontAwesome } from "@expo/vector-icons";
import { useScreenSize } from "@/hooks/useScreenSize";

export const InGame = () => {
	const { goalNumber, setGuessRound } = useGuessNumber() as { goalNumber: string; setGuessRound: (round: number) => void };
	const getRandomNumber = ({min, max}: { min: string, max: string }) =>
		String(Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min));
	const {isLandscape} = useScreenSize();
	const [min, setMin] = useState('0');
	const [max, setMax] = useState('100');
	const [guessHistory, setGuessHistory] = useState<string[]>([getRandomNumber({min, max})]);
	const bingo = guessHistory[0] === goalNumber;
	const handleGuess = (shouldGoHigh: boolean) => {
		const currentGuess = Number(guessHistory[0]);
		const handleLow = () => {
			// currentGuess < goalNumber
			const newMin = String(currentGuess + 1);
			setMin(newMin);
			setGuessHistory([getRandomNumber({min: newMin, max}), ...guessHistory]);
		}

		const handleHigh = () => {
			// currentGuess > goalNumber
			const newMax = String(currentGuess - 1);
			setMax(newMax);
			setGuessHistory([getRandomNumber({min, max: newMax}), ...guessHistory]);
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
			<View style={{flexDirection: isLandscape ? 'row' : 'column', gap: 8}}>
				<View style={[styles.container, {width: isLandscape ? '50%' : '100%', height: isLandscape ? 104 : 'auto'}]}>
					<Text style={{fontWeight: 'bold', fontSize: 18, marginBottom:8}}>Is this your number ?</Text>
					{!isLandscape && <Text style={{fontSize: 24}}>{guessHistory[0]}</Text>}
					<OperationButtonGroup
						disabled={bingo}
						handleLeft={() => handleGuess(true)}
						textLeft={'too low'}
						textRight={'too high'}
						handleRight={() => handleGuess(false)}
						themeColor={Colors.blue['400']}
						slot={isLandscape && <Text style={{fontSize: 24}}>{guessHistory[0]}</Text>}
					/>
					{bingo && (
						<View style={styles.bingoHint}>
							<Pressable onPress={() => {setGuessRound(guessHistory.length)}}>
								<FontAwesome name="check-circle" size={32} color={Colors.green['400']}/>
							</Pressable>
						</View>)}
				</View>
				<View style={{width: isLandscape ? '50%' : '100%'}}>
					<GuessHistory guessHistory={guessHistory}/>
				</View>
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
	bingoHint: {
		fontSize: 18,
		position: 'absolute',
		right: 20,
		bottom: 14
	}
});