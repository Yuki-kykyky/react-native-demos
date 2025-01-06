import { Pressable, StyleSheet, Text, View } from "react-native";

export const OperationSection = (
	{handleAddGoal}: { handleAddGoal: () => void }) => {
	return (<View
		style={styles.operationSection}>
		<Pressable
			style={styles.addButton}
			onPress={handleAddGoal}>
			<Text style={{color: '#fff'}}>Add Goal</Text>
		</Pressable>
	</View>)
};
const styles = StyleSheet.create({
	operationSection: {
		flex: 1,
		justifyContent: 'center',
	},
	addButton: {
		borderRadius: 8,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6d6fe5',
	},
});
