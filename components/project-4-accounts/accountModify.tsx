import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const AccountModify = ({route}: { route: any }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={{flexDirection: 'row', gap: 10}}>
				<Pressable
					style={{
						height: 40,
						backgroundColor: '#fff',
						width: '40%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={() => navigation.goBack()}>
					<Text>cancel</Text>
				</Pressable>
				<Pressable
					style={{
						height: 40,
						backgroundColor: '#fff',
						width: '40%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={() => navigation.goBack()}>
					<Text>{route.params?.action}</Text>
				</Pressable>
			</View>
		</View>
	)
}
export default AccountModify;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2057a9',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
