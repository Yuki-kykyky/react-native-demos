import { StyleSheet, Text, View } from "react-native";
import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";
import { OperationButtonGroup } from "@/components/project-2-guess-number/components/OperationButtonGroup";
import { Colors } from "@/constants/Colors";

export const InGame = ({setPage}: { setPage: (page: string) => void }) => {
	const guessNumber = 50;
	return (
		<View>
			<GameTitle title={'Let\'s Guess !'}/>
			<View style={styles.container}>
				<Text style={{fontWeight: 'bold', fontSize: 18}}>Is this your number ?</Text>
				<Text style={{fontSize: 24}}>50</Text>
				<OperationButtonGroup
					handleLeft={() => {
					}}
					textLeft={'- lower -'}
					textRight={'+ higher +'}
					handleRight={() => {
					}}
					themeColor={Colors.blue['400']}
				/>
				{guessNumber === 50 && <Text style={{color: Colors.green['400'], fontSize: 18, position:'absolute', right:20, bottom:20}}>✅</Text>}
			</View>

		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		borderColor: '#fff',
		borderWidth: 2,
		backgroundColor: '#ffffffdd',
		borderRadius: 10,
		alignItems: 'center',
		padding: 12,
		gap: 8,
		position: 'relative',
	},
});