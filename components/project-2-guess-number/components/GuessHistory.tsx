import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export const GuessHistory = ({guessHistory}: { guessHistory: string[] }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Guess History</Text>
			<ScrollView style={{width: '100%', maxHeight: 360}}>
				{guessHistory.map((guess, index) => (
					<View key={index} style={styles.guessHistoryItem}>
						<View style={{...styles.guessHistoryIndex, justifyContent: 'flex-start'}}>
							<Text style={{color: Colors.pink['800'], fontWeight: 'bold', flex: 1}}>Round </Text>
							<Text style={styles.guessItemNumber}>{guessHistory.length - index}</Text>
						</View>
						<View style={styles.guessHistoryContent}>
							<Text style={{color: Colors.pink['800']}}>Guess Number: </Text>
							<Text style={styles.guessItemNumber}>{guess}</Text>
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	)
};
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
		marginTop: 20,
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 12,
		paddingVertical: 8,
		paddingHorizontal: 36,
		borderBottomColor: Colors.pink['400'],
		color: Colors.pink['800'],
		borderBottomWidth: 2
	},
	guessHistoryItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: Colors.pink['50'],
		borderColor: Colors.pink['400'],
		borderWidth: 2,
		borderRadius: 12,
		marginBottom: 12,
		padding: 12
	},
	guessHistoryIndex: {
		flex: 3,
		borderRightWidth: 2,
		borderRightColor: Colors.pink['400'],
		paddingRight: 8,
		flexDirection: 'row',
	},
	guessHistoryContent: {
		flex: 9,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	guessItemNumber: {
		width: 20,
		color: Colors.pink['800'],
		fontWeight: 'bold',
		textAlign: 'right',
	}
});