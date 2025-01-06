import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export const GoalListSection = (
	{goalList, handleRemoveGoal}: { goalList: { id: string, value: string }[], handleRemoveGoal: (id: string) => void }
) => {
	return (
		<View style={styles.goalList}>
			<ScrollView>
			{goalList.map((goal, index) => {
				return (
					<Pressable key={index} onPress={() => {
							handleRemoveGoal(goal.id);
						}}>
						<View style={styles.goalListItem}>
							<Text style={{color: '#081e79'}}>{goal.value}</Text>
						</View>
						</Pressable>
				);
			})}
			</ScrollView>
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