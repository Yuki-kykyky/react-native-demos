import { ImageBackground, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { GoalModal } from "./GoalModal";
import { OperationSection } from "./OperationSection";
import { GoalListSection } from "./GoalListSection";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
	const navigation = useNavigation();
	return (
		<ImageBackground
			imageStyle={{opacity: 0.8}}
			source={require('@/assets/images/background/todo-list.jpg')}
			style={styles.componentLayout}
		>
			<Pressable onPress={() => navigation.goBack()} style={{position: 'absolute', top: 20, left: 20}}>
				<Ionicons name={'arrow-back'} size={24} color={'#fff'}/>
			</Pressable>
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