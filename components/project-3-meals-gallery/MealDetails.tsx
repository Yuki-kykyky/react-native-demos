import { FlatList, Image, Text, View } from "react-native";
import Meal from "@/models/meal";
import { MEALS } from "@/data/dummy-data";
import { AffordabilityColor, ComplexityColor } from "@/constants/Colors";
import { EAffordability, EComplexity } from "@/constants/Types";
import { Ionicons } from "@expo/vector-icons";

export const MealDetails = ({route}) => {
	const {category} = route.params;
	const eligibleMeals = MEALS.filter((meal: Meal) => meal.categoryIds.includes(category.id));

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#673636',
		}}>
			<FlatList
				data={eligibleMeals}
				style={{marginVertical: 24}}
				renderItem={({item, index}) => (
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'flex-start',
							gap: 8,
							marginVertical: 12,
						}}>
						<Text
							style={{
								width: '80%',
								textAlign: 'center',
								fontSize: 21,
								paddingVertical: 4,
								borderBottomColor: 'white',
								borderBottomWidth: 2,
								borderTopColor: 'white',
								borderTopWidth: 2,
								color: 'white',
								fontWeight: 'bold',
							}}>{index + 1}</Text>
						<Image
							source={{uri: item.imageUrl}}
							style={{
								width: 200,
								aspectRatio: 1,
								marginVertical: 8,
							}}/>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 24,
								fontStyle: 'italic',
								textAlign: 'center',
								color: 'white',
							}}>{item.title}</Text>
						<View style={{flexDirection: 'row', gap: 8}}>
							<Text
								style={{
									backgroundColor: ComplexityColor[item.complexity as EComplexity],
									paddingHorizontal: 12,
									paddingVertical: 4,
									borderRadius: 18,
									fontWeight: 'bold',
									fontSize: 12,
								}}>{item.complexity}</Text>
							<Text
								style={{
									backgroundColor: AffordabilityColor[item.affordability as EAffordability],
									paddingHorizontal: 12,
									paddingVertical: 4,
									borderRadius: 18,
									fontWeight: 'bold',
									fontSize: 12,
								}}>{item.affordability}</Text>
						</View>
						<View style={{
							width: '80%',
							backgroundColor: '#310808',
							padding: 12,
							paddingBottom: 0,
							borderRadius: 8,
						}}>
							<Text style={{
								fontWeight: 'bold',
								textAlign: 'center',
								color: 'white',
								borderBottomWidth: 2,
								borderBottomColor: 'white',
								marginBottom: 12,
							}}>All we need are</Text>
							<FlatList
								numColumns={2}
								columnWrapperStyle={{gap: 12}}
								data={item.ingredients}
								renderItem={({item}) => (
									<View style={{
										flexDirection: 'row',
										gap: 8,
										width: '45%',
										marginBottom: 12,
										alignItems: 'baseline',
									}}>
										<Ionicons name='checkmark' size={12} color='white'/>
										<Text style={{color: 'white', fontSize: 12, width: '90%'}}>{item}</Text>
									</View>
								)}/>
						</View>
						<View style={{width: '80%', paddingRight:32}}>
							<Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, textAlign:'center', marginBottom:12}}>Steps</Text>
							<FlatList
								style={{alignSelf: 'flex-start', borderRadius: 8}}
								data={item.steps} renderItem={({item, index}) => (
								<View style={{flexDirection: 'row', alignItems: 'baseline'}}>
									<Text style={{color: 'white', fontWeight: 'bold'}}>{index + 1}. </Text>
									<Text style={{color: 'white', textAlign:'justify', width:'98%'}}>{item}</Text>
								</View>
							)}/>
						</View>

					</View>)}/>
		</View>
	)
}