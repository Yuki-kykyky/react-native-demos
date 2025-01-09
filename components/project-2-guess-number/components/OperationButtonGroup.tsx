import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

interface IOperationButtonGroupProps {
	handleLeft: () => void,
	handleRight: () => void,
	textLeft: string,
	textRight: string,
	themeColor: string,
	disabled?: boolean
}

export const OperationButtonGroup = (
	{
		handleLeft,
		textLeft,
		handleRight,
		textRight,
		themeColor,
		disabled
	}: IOperationButtonGroupProps) => {
	let buttonColor = themeColor;
	if (disabled) {
		buttonColor = Colors.grey['400'];
	}
	return (
		<View style={{flexDirection: 'row', gap: 12}}>
			<Pressable
				disabled={disabled}
				style={{
					...styles.operationLeftButton,
					borderColor: buttonColor,
					backgroundColor: buttonColor,
				}}
				onPress={handleLeft}>
				<Text style={styles.operationLeftText}>{textLeft}</Text>
			</Pressable>
			<Pressable
				disabled={disabled}
				style={{...styles.operationRightButton, borderColor: buttonColor}}
				onPress={handleRight}>
				<Text style={{...styles.operationRightText, color: buttonColor}}>{textRight}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	operationLeftButton: {
		borderWidth: 2,
		padding: 8,
		borderRadius: 8,
		width: 100
	},
	operationLeftText: {
		textAlign: 'center',
		color: Colors.white,
		fontWeight: 'bold'
	},
	operationRightButton: {
		backgroundColor: Colors.white,
		borderWidth: 2,
		padding: 8,
		borderRadius: 8,
		width: 100
	},
	operationRightText: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
})