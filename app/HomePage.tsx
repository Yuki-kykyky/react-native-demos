import { ImageBackground } from "react-native";

export const HomePage = () => {
	return (
		<ImageBackground
			source={require('@/assets/images/background/happy-home.jpg')}
			style={{flex: 1}}
		/>
	)
}

export default HomePage;