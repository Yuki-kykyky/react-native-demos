import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "@/data/dummy-data";
import { Colors } from "@/constants/Colors";

export const MealsGallery = () => {

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				columnWrapperStyle={{justifyContent: 'space-between', gap: 24}}
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={(category) => (
					<ImageBackground
						source={require('@/assets/images/black-white.jpg')}
						imageStyle={{opacity: 0.3, borderRadius: 18}}
						style={{
							backgroundColor: category.item.color,
							flex: 1,
							marginTop: 24,
							aspectRatio: 1,
							borderRadius: 18,
							elevation: 8
						}}>
						<View style={{
							flex: 1,
							borderRadius: 18,
							overflow: 'hidden'
						}}>
							<Pressable
								style={{
									flex: 1,
									width: '100%',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 18,
								}}
								android_ripple={{color: category.item.color}}
								onPress={() => {
									console.log('Category Pressed: ', category.item)
								}}>
								<Text style={{color: Colors.white, fontSize: 18, fontWeight: 'bold'}}>{category.item.title}</Text>
							</Pressable>
						</View>
					</ImageBackground>
				)}
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