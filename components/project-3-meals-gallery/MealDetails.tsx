import { Image, Text, View } from "react-native";
import Meal from "@/models/meal";
import { MEALS } from "@/data/dummy-data";
import { AffordabilityColor, ComplexityColor } from "@/constants/Colors";
import { EAffordability, EComplexity } from "@/constants/Types";

export const MealDetails = ({route}) => {
	const {category} = route.params;
	const eligibleMeals = MEALS.filter((meal: Meal) => meal.categoryIds.includes(category.id));

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#b68181',
		}}>
			{eligibleMeals.map((meal: Meal, index: number) => (
				<View
					key={meal.id}
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'flex-start',
						gap: 16,
					}}>
					<Text
						style={{
							width: '80%',
							textAlign: 'center',
							fontSize: 21,
							paddingVertical: 4,
							borderBottomColor: 'white',
							borderBottomWidth: 2,
							color: 'white',
							fontWeight: 'bold',
						}}>{index + 1}</Text>
					<Image
						source={{uri: meal.imageUrl}}
						style={{
							width: 200,
							aspectRatio: 1,
						}}/>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 24,
							fontStyle: 'italic',
						}}>{meal.title}</Text>
					<View style={{flexDirection: 'row', gap: 8}}>
						<Text
							style={{
								backgroundColor: ComplexityColor[meal.complexity as EComplexity],
								paddingHorizontal: 12,
								paddingVertical: 4,
								borderRadius: 18,
								fontWeight: 'bold',
								fontSize: 12,
							}}>{meal.complexity}</Text>
						<Text
							style={{
								backgroundColor: AffordabilityColor[meal.affordability as EAffordability],
								paddingHorizontal: 12,
								paddingVertical: 4,
								borderRadius: 18,
								fontWeight: 'bold',
								fontSize: 12,
							}}>{meal.affordability}</Text>
					</View>
				</View>
			))}
		</View>
	)
}