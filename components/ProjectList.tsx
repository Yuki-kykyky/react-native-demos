import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { projectInfos } from "@/constants/projectInfos";
import { LinearGradient } from "expo-linear-gradient";

export const ProjectList = ({setPage}: { setPage: any }) => {
	return (
		<LinearGradient colors={['#06218f', '#b5b5e3']} style={{flex: 1}}>
			<ImageBackground
				resizeMethod="resize"
				imageStyle={{opacity: 0.3}}
				source={require('@/assets/images/colorful.jpg')}
				style={styles.componentLayout}
			>
				<Text style={styles.headerText}>Project lists</Text>
				<FlatList data={projectInfos} renderItem={({item, index}) => (
					<View style={styles.projectListItem}>
						<View style={{
							alignItems: 'center', borderRightWidth: 2, marginRight: 8, borderColor: '#fff'
						}}>
							<Text style={{color: '#fff', marginRight: 8}}>PROJECT {index + 1}</Text>
						</View>
						<View style={{
							alignItems: 'center',
							justifyContent: 'space-between', flexDirection: 'row', flex: 1
						}}>
							<View>
								<Text style={{color: '#fff'}}>{item.date}</Text>
							</View>
							<View>
								<Pressable onPress={() => setPage(item.page)} style={{
									backgroundColor: '#081e79',
									padding: 8,
									borderRadius: 8,
									width: 100,
									justifyContent: 'center',
									alignItems: 'center',
								}}>
									<Text style={{color: '#fff'}}>{item.projectName}</Text>
								</Pressable>
							</View>
						</View>
					</View>
				)}/>
			</ImageBackground>
		</LinearGradient>
	)
}
const styles = StyleSheet.create({
	componentLayout: {
		padding: 20,
		flex: 1,
	},
	headerText: {
		color: '#fff',
		fontSize: 24,
		textAlign: 'center',
		margin: 16
	},
	projectListItem: {
		backgroundColor: '#8a8ce7',
		flexDirection: 'row',
		padding: 12,
		borderRadius: 8,
		marginBottom: 8,
		borderColor: '#081e79',
		borderWidth: 2,
		alignItems: 'center',
	}
});