import { Image, Text, View } from "react-native";
import { getMealImage } from "@/constants/Images";

export const MealDetails = ({route}) => {
	const {category} = route.params;
	return (
		<View>
			<Image source={getMealImage(category.id)} style={{width: '100%', height: 200}}/>
			<Text>{category.title}</Text>
		</View>
	)
}