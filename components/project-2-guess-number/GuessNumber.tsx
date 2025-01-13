import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { GameStart } from "@/components/project-2-guess-number/GameStart";
import { useEffect, useState } from "react";
import { InGame } from "@/components/project-2-guess-number/InGame";
import { GameEnd } from "@/components/project-2-guess-number/GameEnd";

export const GuessNumber = () => {
	const [page, setPage] = useState('');
	const [screen, setScreen] = useState(
		<GameStart setPage={setPage}/>
	);
	useEffect(() => {
		if (page === 'in-game') {
			setScreen(
				<InGame setPage={setPage}/>
			);
		} else if (page === 'game-end') {
			setScreen(<GameEnd setPage={setPage}/>);
		} else {
			setScreen(
				<GameStart setPage={setPage}/>
			);
		}
	}, [page]);

	return (
		<LinearGradient
			colors={[
				Colors.blue['400'],
				Colors.blue['200'],
				Colors.blue['100'],
			]}
			locations={[0, 0.4, 0.9]}
			style={styles.componentLayout}>
			{/*<ImageBackground*/}
			{/*	source={require('@/assets/images/background/guess-number.jpg')}*/}
			{/*	imageStyle={{opacity: 0.6}}*/}
			{/*	style={styles.componentLayout}*/}
			{/*>*/}
				<SafeAreaView>
					{screen}
				</SafeAreaView>
			{/*</ImageBackground>*/}
		</LinearGradient>
	)
};

const styles = StyleSheet.create({
	componentLayout: {
		padding: 20,
		flex: 1,
	}
});