import { ImageBackground, StyleSheet } from "react-native";
import { useState } from "react";
import { GoalModal } from "./GoalModal";
import { OperationSection } from "./OperationSection";
import { GoalListSection } from "./GoalListSection";

export const TodoList = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [goalList, setGoalList] = useState<
		{ id: string; value: string }[]>([]);
	const handleAddGoal = (goal: string) => {
		setGoalList([...goalList, {id: Math.random().toString(), value: goal}]);
	};
	const handleOpen = () => setIsVisible(true);
	const handleRemoveGoal = (id: string) => {
		setGoalList(goalList.filter((goal) => goal.id !== id));
	};
	return (
		<ImageBackground
			imageStyle={{opacity: 0.8}}
			source={require('@/assets/images/background/todo-list.jpg')}
			style={styles.componentLayout}
		>
			<GoalModal
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				handleAddGoal={handleAddGoal}/>
			<OperationSection handleOpen={handleOpen}/>
			<GoalListSection goalList={goalList} handleRemoveGoal={handleRemoveGoal}/>
		</ImageBackground>
	)
}
const styles = StyleSheet.create({
	componentLayout: {
		padding: 20,
		flex: 1,
	}
});