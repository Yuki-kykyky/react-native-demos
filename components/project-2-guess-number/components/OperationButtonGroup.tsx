import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

interface IOperationButtonGroupProps {
	handleLeft: () => void,
	handleRight: () => void,
	textLeft: string,
	textRight: string,
	themeColor: string
}

export const OperationButtonGroup = (
	{
		handleLeft,
		textLeft,
		handleRight,
		textRight,
		themeColor
	}: IOperationButtonGroupProps) => {
	return (
		<View style={{flexDirection: 'row', gap: 12}}>
			<Pressable
				style={{
					...styles.operationLeftButton,
					borderColor: themeColor,
					backgroundColor: themeColor,
				}}
				onPress={handleLeft}>
				<Text style={styles.operationLeftText}>{textLeft}</Text>
			</Pressable>
			<Pressable
				style={{...styles.operationRightButton, borderColor: themeColor}}
				onPress={handleRight}>
				<Text style={{...styles.operationRightText, color: themeColor}}>{textRight}</Text>
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