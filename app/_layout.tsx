import 'react-native-reanimated';
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { GoalModal } from '@/components/todo/GoalModal';
import { GoalListSection } from "@/components/todo/GoalListSection";
import { OperationSection } from "@/components/todo/OperationSection";

export default function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);
  const [goalList, setGoalList] = useState<string[]>([]);
  const handleGoalList = (goal: string) => {
    setGoalList([...goalList, goal]);
  };
  const handleAddGoal = () => setIsVisible(true);
  return (
    <View style={styles.componentLayout}>
      <GoalModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleGoalList={handleGoalList}/>
      <OperationSection handleAddGoal={handleAddGoal}/>
      <GoalListSection goalList={goalList}/>
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

