import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export const GoalModal = ({
	isVisible,
	setIsVisible,
	handleGoalList,
}: {
	isVisible: boolean,
	handleGoalList: (goal: string) => void,
	setIsVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}
) => {
	const [inputValue, setInputValue] = useState('');
	const handleClose = () => {
		setIsVisible(false);
		setInputValue('');
	};
	return (
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
						onPress={handleClose}>
						<Text style={{color: '#fff'}}>Close</Text>
					</Pressable>
					<Pressable
						style={{...styles.ModalButton, backgroundColor: '#fff'}}
						onPress={() => {
							handleClose();
							handleGoalList(inputValue);
						}}>
						<Text style={{color: '#6d6fe5'}}>Add</Text>
					</Pressable>
				</View>
			</View>
		</Modal>)
};

const styles = StyleSheet.create({
	modalLayout: {
		flex: 1,
		padding: 20,
		backgroundColor: '#081e79',
		justifyContent: 'center',
		alignItems: 'center',
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
});