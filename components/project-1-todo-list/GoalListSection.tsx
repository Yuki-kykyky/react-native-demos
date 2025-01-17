import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { ColorGroups } from "@/constants/Colors";

export const GoalListSection = (
	{goalList, handleRemoveGoal}: {
		goalList: { id: string, value: string }[],
		handleRemoveGoal: (id: string) => void
	}
) => {
	return (
		<View style={styles.goalList}>
			<FlatList
				data={goalList}
				renderItem={({item}) => (
					<Pressable onPress={() => handleRemoveGoal(item.id)}>
						<View style={styles.goalListItem}>
							<Text style={{
								color: ColorGroups.white,
								fontSize:14,
								fontWeight:'bold'
							}}>{item.value}</Text>
						</View>
					</Pressable>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	goalList: {
		marginTop:12,
		flex: 9,
	},
	goalListItem: {
		padding: 12,
		backgroundColor: ColorGroups.green['200'],
		borderColor: ColorGroups.green['400'],
		borderWidth: 2,
		borderRadius: 8,
		marginBottom: 8,
		justifyContent: 'flex-start'
	},
});