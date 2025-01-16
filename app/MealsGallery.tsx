import { createStackNavigator } from "@react-navigation/stack";
import AllMeals from "@/components/project-3-meals-gallery/AllMeals";
import { MealDetails } from "@/components/project-3-meals-gallery/MealDetails";

const Stack = createStackNavigator();

export const MealsGallery = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="AllMeals" component={AllMeals}/>
			<Stack.Screen
				name="MealDetails"
				component={MealDetails}
				options={({route}) => ({
					headerShown: true,
					title: route.params.category.title
				})}/>
		</Stack.Navigator>
	)
};

export default MealsGallery;