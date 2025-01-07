import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { GoalModal } from "./GoalModal";
import { OperationSection } from "./OperationSection";
import { GoalListSection } from "./GoalListSection";

export const TodoList = () => {
	const [isVisible, setIsVisible] = useState(false);
	const mockGoalList = [
		{id: '1', value: 'Learn React Native'},
		{id: '2', value: 'Learn TypeScript'},
		{id: '3', value: 'Learn Expo'},
	];
	const [goalList, setGoalList] = useState<
		{ id: string; value: string }[]>(mockGoalList);
	const handleAddGoal = (goal: string) => {
		setGoalList([...goalList, {id: Math.random().toString(), value: goal}]);
	};
	const handleOpen = () => setIsVisible(true);
	const handleRemoveGoal = (id: string) => {
		setGoalList(goalList.filter((goal) => goal.id !== id));
	};
	return (
		<View style={styles.componentLayout}>
			<GoalModal
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				handleAddGoal={handleAddGoal}/>
			<OperationSection handleOpen={handleOpen}/>
			<GoalListSection goalList={goalList} handleRemoveGoal={handleRemoveGoal}/>
		</View>
	)
}
const styles = StyleSheet.create({
	componentLayout: {
		padding: 20,
		backgroundColor: '#081e79',
		flex: 1,
	}
});