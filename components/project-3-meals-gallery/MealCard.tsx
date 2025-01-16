import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { ColorGroups } from "@/constants/Colors";
import Category from "@/models/category";
import { useNavigation } from "@react-navigation/native";
import { getMealImage } from "@/constants/Images";

export const MealCard = ({item}: { item: Category }) => {
	const navigation = useNavigation();
	return (
		<ImageBackground
			source={getMealImage(item.id)}
			imageStyle={{opacity: 0.6, borderRadius: 18}}
			style={[styles.cardContainer, {
				marginTop: (item.id === 'c1' || item.id === 'c2') ? 0 : 24
			}]}>
			<View style={styles.subContainer}>
				<Pressable
					style={styles.pressableContainer}
					android_ripple={{color: item.color}}
					onPress={() => {
						navigation.navigate('MealDetails', {category:item});
					}}>
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
		backgroundColor: '#000',
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
		color: ColorGroups.white,
		fontSize: 18,
		fontWeight: 'bold'
	}
})
