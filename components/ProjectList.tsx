import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { projectInfos } from "@/constants/projectInfos";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export const ProjectList = ({setPage}: { setPage: any }) => {
	return (
		<LinearGradient colors={[Colors.purple["400"], Colors.purple['100']]} style={{flex: 1}}>
			<ImageBackground
				imageStyle={{opacity: 0.3}}
				source={require('@/assets/images/background/project-list.jpg')}
				style={styles.componentLayout}
			>
				<Text style={styles.headerText}>Project lists</Text>
				<FlatList data={projectInfos} renderItem={({item, index}) => (
					<View style={styles.projectListItem}>
						<View style={{
							alignItems: 'center',
							borderRightWidth: 2,
							marginRight: 8,
							paddingRight: 8,
							borderColor: Colors.white
						}}>
							<Text style={{color: Colors.white}}>PROJECT {index + 1}</Text>
						</View>
						<View style={{
							alignItems: 'center',
							justifyContent: 'space-between',
							flexDirection: 'row',
							flex: 1
						}}>
							<View>
								<Text style={{color: Colors.white}}>{item.date}</Text>
							</View>
							<View>
								<Pressable onPress={() => setPage(item.page)} style={{
									backgroundColor: Colors.purple['400'],
									padding: 8,
									borderRadius: 8,
									width: 135,
								}}>
									<Text style={{color: Colors.white, textAlign: 'center'}}>{item.projectName}</Text>
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
		color: Colors.white,
		fontSize: 24,
		textAlign: 'center',
		margin: 16
	},
	projectListItem: {
		backgroundColor: Colors.purple['200'],
		flexDirection: 'row',
		padding: 12,
		borderRadius: 8,
		marginBottom: 8,
		borderColor: Colors.purple['400'],
		borderWidth: 2,
		alignItems: 'center',
	}
});