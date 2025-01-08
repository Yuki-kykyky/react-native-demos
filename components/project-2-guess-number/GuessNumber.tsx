import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { GameStart } from "@/components/project-2-guess-number/GameStart";

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
				<GameStart/>
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