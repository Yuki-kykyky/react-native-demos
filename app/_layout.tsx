import 'react-native-reanimated';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { GoalModal } from '@/components/todo/GoalModal';


export default function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);
  const [goalList, setGoalList] = useState<string[]>([]);
  const handleGoalList = (goal: string) => {
    setGoalList([...goalList, goal]);
  };
  return (
    <View style={styles.componentLayout}>
      <GoalModal isVisible={isVisible} setIsVisible={setIsVisible} handleGoalList={handleGoalList}/>
      <View style={styles.operationSection}>
        <Pressable
          style={styles.pressableButton}
          onPress={() => setIsVisible(true)}>
          <Text style={{color: '#fff'}}>Add Goal</Text>
        </Pressable>
      </View>
      <View style={styles.goalList}>
        {goalList.map((goal, index) => {
          return (
            <View key={index} style={styles.goalListItem}>
              <Text style={{color: '#081e79'}}>{goal}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create( {
  componentLayout: {
    padding: 20,
    backgroundColor: '#081e79',
    flex: 1,
  },

  operationSection: {
    flex: 1,
    justifyContent: 'center',
  },
  goalList: {
    flex: 9,
  },
  pressableButton: {
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d6fe5',
  },

  goalListItem: {
    padding: 12,
    backgroundColor: '#a7aaec',
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'flex-start'
  },
} );

