import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { ColorGroups } from "@/constants/Colors";
import { OperationButtonGroup } from "@/components/project-2-guess-number/components/OperationButtonGroup";
import { useGuessNumber } from "@/hooks/useGuessNumber";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const GameStart = () => {
	const [input, setInput] = useState('');
	const {setGoalNumber} = useGuessNumber() as { setGoalNumber: (goalNumber: string) => void };
const navigation = useNavigation();
	const handleReset = () => {
		setInput('');
	};

	const handleSubmit = () => {
		if (!Number(input)) {
			alert('Please enter a valid number');
			handleReset();
		} else if (Number(input) < 1 || Number(input) > 99) {
			alert('Please enter a number between 1 - 99');
			handleReset();
		} else {
			setGoalNumber(input);
			navigation.navigate('InGame');
		}
	};

	return (
		<View style={{flex: 1}}>
			<ImageBackground
				source={require('@/assets/images/background/guess-number.jpg')}
				style={{paddingHorizontal: 20, flex: 1}}>
			<GameTitle title={'Game Start'}/>
			<View style={styles.container}>
				<Text style={{fontWeight: 'bold', fontSize: 18}}>Let's Play a Game !</Text>
				<Text> Set a number in 1 - 99 and I will guess it.</Text>
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'}>
					<TextInput
						maxLength={2}
						value={input}
						keyboardType={'numeric'}
						style={styles.textInput}
						onChangeText={text => setInput(text)}
					/>
				</KeyboardAvoidingView>
				<OperationButtonGroup
					handleLeft={handleReset}
					textLeft={'Reset'}
					textRight={'Submit'}
					handleRight={handleSubmit}
					themeColor={ColorGroups.blue['400']}
				/>
			</View>
			</ImageBackground>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		borderColor: '#fff',
		borderWidth: 2,
		backgroundColor: '#ffffffdd',
		borderRadius: 10,
		alignItems: 'center',
		padding: 12,
		gap: 4
	},
	textInput: {
		width: 50,
		borderBottomWidth: 2,
		borderBottomColor: ColorGroups.blue['400'],
		color: ColorGroups.blue['400'],
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 12,
		paddingBottom: 4,
	}
});