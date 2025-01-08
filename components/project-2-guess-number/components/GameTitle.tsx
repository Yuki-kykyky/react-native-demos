import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export const GameTitle = ({title}: { title: string }) => {
	return (
		<View style={styles.titleComponent}>
			<Text style={styles.titleText}>{title}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	titleComponent: {
		backgroundColor: '#ffffffdd',
		borderColor: Colors.white,
		padding: 8,
		marginVertical: 20,
		borderWidth: 4,
		borderRadius: 24
	},
	titleText: {
		color: Colors.blue['400'],
		textAlign: 'center',
		fontSize: 21,
		fontWeight: 'bold'
	}
});