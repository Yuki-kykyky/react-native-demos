import 'react-native-reanimated';
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const projects = ['todolist'];
  return (
    <View style={styles.componentLayout}>
      {projects.map((project) => (
        <View key={project}>
          <Text>{project}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  componentLayout: {
    padding: 20,
    backgroundColor: '#081e79',
    flex: 1,
  }
});


