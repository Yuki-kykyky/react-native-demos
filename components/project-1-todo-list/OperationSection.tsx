import { Pressable, StyleSheet, Text } from "react-native";
import { ColorGroups } from "@/constants/Colors";

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
		marginTop: 40,
		borderRadius: 8,
		borderColor: ColorGroups.green['400'],
		borderWidth: 2,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: ColorGroups.green['100'],
	},
	addText:{
		color: ColorGroups.green['400'],
		fontWeight: 'bold',
		fontSize: 18
	}
});
