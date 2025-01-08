import { ImageBackground, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { GameTitle } from "@/components/project-2-guess-number/components/GameTitle";

export const GuessNumber = () => {
	return (
		<LinearGradient
			colors={[
				Colors.blue['400'],
				Colors.blue['200'],
				Colors.red['100'],
				Colors.white
			]}
			locations={[0, 0.3, 0.5, 0.8]}
			style={{flex: 1}}>
			<ImageBackground
				source={require('@/assets/images/background/guess-number.jpg')}
				imageStyle={{opacity: 0.6}}
				style={styles.componentLayout}
			>
				<GameTitle title={'Game Start'}/>
				<Text style={{color: '#fff'}}>Guess Number</Text>
			</ImageBackground>
		</LinearGradient>
	)
};

const styles = StyleSheet.create({
	componentLayout: {
		padding: 20,
		flex: 1,
	}
});