import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "@/data/dummy-data";
import { MealCard } from "@/components/project-3-meals-gallery/MealCard";


export const MealsGallery = () => {

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				columnWrapperStyle={{justifyContent: 'space-between', gap: 24}}
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={(category) => <MealCard item={category.item}/>}
			/>
		</View>
	)
};

export default MealsGallery;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#b68181',
		padding: '5%',
		flex: 1,
	}
});