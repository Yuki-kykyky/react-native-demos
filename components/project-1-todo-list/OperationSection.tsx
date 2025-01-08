import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";

export const OperationSection = (
	{handleOpen}: { handleOpen: () => void }) => {
	return (
		<Pressable
			style={styles.addButton}
			onPress={handleOpen}>
			<Text style={styles.addText}>Add Goal</Text>
		</Pressable>
	)
};
const styles = StyleSheet.create({
	addButton: {
		borderRadius: 8,
		borderColor: Colors.green['400'],
		borderWidth: 2,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.green['100'],
	},
	addText:{
		color: Colors.green['400'],
		fontWeight: 'bold',
		fontSize: 18
	}
});
