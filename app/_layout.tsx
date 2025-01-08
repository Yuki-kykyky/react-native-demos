import 'react-native-reanimated';
import { Pressable, StyleSheet, View } from "react-native";
import { ProjectList } from "@/components/ProjectList";
import { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  const [page, setPage] = useState();
  const [screen, setScreen] = useState(<ProjectList setPage={setPage}/>);

  useEffect(() => {
    if (page) {
      setScreen(page);
    } else {
      setScreen(<ProjectList setPage={setPage}/>);
    }
  }, [page]);

  return (
    <View style={{flex: 1}}>
      {page && (
        <Pressable onPress={() => setPage(undefined)} style={styles.backButton}>
          <Ionicons name="arrow-back-circle" size={36} color="white"/>
        </Pressable>
      )}
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    left: 20,
    padding: 8,
    borderRadius: 8,
  },
});


