import 'react-native-reanimated';
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { GoalModal } from '@/components/todo/GoalModal';
import { GoalListSection } from "@/components/todo/GoalListSection";
import { OperationSection } from "@/components/todo/OperationSection";

export default function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);
  const [goalList, setGoalList] = useState<
    { id: string; value: string}[]>([]);
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
  );
}

const styles = StyleSheet.create( {
  componentLayout: {
    padding: 20,
    backgroundColor: '#081e79',
    flex: 1,
  }
} );

