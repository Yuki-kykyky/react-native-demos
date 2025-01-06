import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const GoalListSection = (
	{goalList}: { goalList: string[] }
) => {
	return (
		<View style={styles.goalList}>
			{goalList.map((goal, index) => {
				return (
					<View key={index} style={styles.goalListItem}>
						<Text style={{color: '#081e79'}}>{goal}</Text>
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	goalListItem: {
		padding: 12,
		backgroundColor: '#a7aaec',
		borderRadius: 8,
		marginBottom: 8,
		justifyContent: 'flex-start'
	},
	goalList: {
		flex: 9,
	},
});