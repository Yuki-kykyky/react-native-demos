import 'react-native-reanimated';
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";


export default function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [goalList, setGoalList] = useState<string[]>([]);
  return (
    <View style={styles.componentLayout}>
      <Modal
        visible={isVisible}
        animationType="slide"
      >
        <View style={styles.modalLayout}>
          <Image
            style={{width: 80, height: 80, tintColor: '#ffffff'}}
            source={require('@/assets/images/react-logo.png')}/>
          <TextInput placeholder={'something need to be done'}
                     value={inputValue}
                     onChangeText={(text: string) => setInputValue(text)}
                     style={styles.textInput}/>
          <View style={{flexDirection: 'row', gap: 16}}>
            <Pressable
              style={{...styles.ModalButton, backgroundColor: '#6d6fe5'}}
              onPress={() => {
                setIsVisible(false);
                setInputValue('');
              }}>
              <Text style={{color: '#fff'}}>Close</Text>
            </Pressable>
            <Pressable
              style={{...styles.ModalButton, backgroundColor: '#fff'}}
              onPress={() => {
                setIsVisible(false);
                setGoalList([...goalList, inputValue]);
                setInputValue('');
              }}>
              <Text style={{color: '#6d6fe5'}}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.operationSection}>
        <Pressable
          style={styles.pressableButton}
          onPress={() => {
            setIsVisible(true);
            setInputValue('');
          }}>
          <Text style={{ color: '#fff' }}>Add Goal</Text>
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
  modalLayout: {
    flex: 1,
    padding: 20,
    backgroundColor: '#081e79',
    justifyContent: 'center',
    alignItems: 'center',
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
  ModalButton: {
    borderRadius: 8,
    width: 80,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#6d6fe5',
    backgroundColor: '#a7aaec',
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  goalListItem: {
    padding: 12,
    backgroundColor: '#a7aaec',
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'flex-start'
  },
} );

