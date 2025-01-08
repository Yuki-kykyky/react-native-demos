import { View,Text,StyleSheet } from "react-native";

export const GuessNumber = () => {
	return (
		<View style={styles.componentLayout}>
			<Text style={{color:'#fff'}}>Guess Number</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	componentLayout: {
		padding: 20,
		backgroundColor: '#30a275',
		flex: 1,
	}
});