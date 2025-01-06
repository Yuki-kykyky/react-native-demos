import 'react-native-reanimated';
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function RootLayout() {
  return (
    <View style={styles.outer}>
      <View style={styles.operationSection}>
        <Pressable
          style={( { pressed } ) => [
            {
              backgroundColor: pressed
                ? '#fff'
                : '#6d6fe5'
            },
            styles.pressableButton
          ]}
          onPress={() => {
            console.log( 'Pressable pressed' );
          }}>
          <Text style={{ color: '#fff' }}>Add Goal</Text>
        </Pressable>
      </View>
      <View style={styles.goalList}>
        <Text  style={{ color: '#081e79' }}>
          there will be goal list
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create( {
  outer: {
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
  },
} );

