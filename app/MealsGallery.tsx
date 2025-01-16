import { createStackNavigator } from "@react-navigation/stack";
import AllMeals from "@/components/project-3-meals-gallery/AllMeals";

const Stack = createStackNavigator();

export const MealsGallery = () => {

	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="AllMeals" component={AllMeals}/>
		</Stack.Navigator>
	)
};

export default MealsGallery;