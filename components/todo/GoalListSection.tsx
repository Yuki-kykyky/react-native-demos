import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const GoalListSection = (
	{goalList, handleRemoveGoal}: { goalList: { id: string, value: string }[], handleRemoveGoal: (id: string) => void }
) => {
	return (
		<View style={styles.goalList}>
			{goalList.map((goal, index) => {
				return (
					<View key={index} style={styles.goalListItem}>
						<Pressable onPress={() => {
							console.log('GoalListSection: Delete', goal.id);
							handleRemoveGoal(goal.id);
						}}>
							<Text style={{color: '#081e79'}}>{goal.value}</Text>
						</Pressable>
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