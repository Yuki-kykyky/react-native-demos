import { Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { ColorGroups } from "@/constants/Colors";

export const GoalModal = ({
	isVisible,
	setIsVisible,
	handleAddGoal,
}: {
	isVisible: boolean,
	setIsVisible: (value: boolean) => void,
	handleAddGoal: (goal: string) => void,
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
			<ImageBackground
				source={require('@/assets/images/background/todo-list-modal.jpg')}
				style={styles.modalLayout}
			>
				<Image
					style={{
						width: 80,
						height: 80,
						tintColor: ColorGroups.green['400']
				}}
					source={require('@/assets/images/react-logo.png')}/>
				<TextInput placeholder={'something need to be done'}
									 value={inputValue}
									 onChangeText={(text: string) => setInputValue(text)}
									 style={styles.textInput}/>
				<View style={{flexDirection: 'row', gap: 16}}>
					<Pressable
						style={{...styles.ModalButton, backgroundColor: ColorGroups.green['400']}}
						onPress={handleClose}>
						<Text style={{color: ColorGroups.white, fontWeight:'bold'}}>Close</Text>
					</Pressable>
					<Pressable
						style={{...styles.ModalButton, backgroundColor: '#fff'}}
						onPress={() => {
							handleClose();
							handleAddGoal(inputValue);
						}}>
						<Text style={{color: ColorGroups.green['400'], fontWeight:'bold'}}>Add</Text>
					</Pressable>
				</View>
			</ImageBackground>
		</Modal>)
};

const styles = StyleSheet.create({
	modalLayout: {
		flex: 1,
		padding: 20,
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
		borderColor: ColorGroups.green['400'],
		backgroundColor: ColorGroups.green['100'],
		borderWidth: 3,
		borderRadius: 16,
		width: '100%',
		padding: 16,
		marginTop: 8,
		marginBottom: 16,
	},
});