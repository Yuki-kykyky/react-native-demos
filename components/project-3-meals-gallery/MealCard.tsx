import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import Category from "@/models/category";

export const MealCard = ({item}: { item: Category }) => {
	return (
		<ImageBackground
			source={require('@/assets/images/black-white.jpg')}
			imageStyle={{opacity: 0.3, borderRadius: 18}}
			style={[styles.cardContainer, {
				backgroundColor: item.color,
				marginTop: (item.id === 'c1' || item.id === 'c2') ? 0 : 24
			}]}>
			<View style={styles.subContainer}>
				<Pressable
					style={styles.pressableContainer}
					android_ripple={{color: item.color}}
					onPress={() => {console.log('Category Pressed: ', item)}}>
					<Text style={styles.text}>{item.title}</Text>
				</Pressable>
			</View>
		</ImageBackground>
	)
};

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		aspectRatio: 1,
		borderRadius: 18,
		elevation: 8,
	},
	subContainer: {
		flex: 1,
		borderRadius: 18,
		overflow: 'hidden'
	},
	pressableContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 18,
	},
	text: {
		color: Colors.white,
		fontSize: 18,
		fontWeight: 'bold'
	}
})
