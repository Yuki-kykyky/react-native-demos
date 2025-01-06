import { Pressable, StyleSheet, Text, View } from "react-native";

export const OperationSection = (
	{handleOpen}: { handleOpen: () => void }) => {
	return (<View
		style={styles.operationSection}>
		<Pressable
			style={styles.addButton}
			onPress={handleOpen}>
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
