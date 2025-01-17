import { StyleSheet, Text, View } from "react-native";

export const AccountList = ({route}: { route: any }) => {
	return (
		<View style={styles.container}>
			<Text>{route.params.type}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#638ed5',
	}
});