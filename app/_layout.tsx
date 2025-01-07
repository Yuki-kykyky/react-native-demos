import 'react-native-reanimated';
import { StyleSheet, View } from "react-native";
import { ProjectList } from "@/components/ProjectList";
import { useState } from "react";

export default function RootLayout() {
  const [page, setPage] = useState();
  let screen = <ProjectList setPage={setPage}/>;
  if (page) {
    screen = page;
  }
  return (
    <View style={styles.componentLayout}>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  componentLayout: {
    padding: 20,
    backgroundColor: '#081e79',
    flex: 1,
  },
});


