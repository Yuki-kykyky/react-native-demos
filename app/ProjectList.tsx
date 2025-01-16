import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { projectInfos } from "@/constants/projectInfos";
import { LinearGradient } from "expo-linear-gradient";
import { ColorGroups } from "@/constants/Colors";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useNavigation } from "@react-navigation/native";

export const ProjectList = () => {
	const {isLandscape} = useScreenSize();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={{flex: 1}}>
			<LinearGradient colors={[ColorGroups.purple["400"], ColorGroups.purple['200']]} style={styles.componentLayout}>
				<Text style={styles.headerText}>Project lists</Text>
				<FlatList
					key={isLandscape ? '2' : '1'}
					data={projectInfos}
					numColumns={isLandscape ? 2 : 1}
					columnWrapperStyle={isLandscape && {gap: 8, justifyContent: 'space-between'}}
					renderItem={({item, index}) => (
						<View style={[styles.projectListItem, {
							minWidth: isLandscape ? 200 : 335,
							maxWidth: isLandscape ? 500 : 400,
							width: isLandscape ? '49%' : '100%'
						}]}>
							<View style={{
								alignItems: 'center',
								borderRightWidth: 2,
								marginRight: 8,
								paddingRight: 8,
								borderColor: ColorGroups.white
							}}>
								<Text style={{color: ColorGroups.white}}>PROJECT {index + 1}</Text>
							</View>
							<View style={{
								alignItems: 'center',
								justifyContent: 'space-between',
								flexDirection: 'row',
								flex: 1
							}}>
								<View>
									<Text style={{color: ColorGroups.white}}>{item.date}</Text>
								</View>
								<View>
									<Pressable
										style={{
											backgroundColor: ColorGroups.purple['400'],
											padding: 8,
											borderRadius: 8,
											width: 120,
										}}
										onPress={() => navigation.navigate(item.routeName)}>
										<Text style={{color: ColorGroups.white, textAlign: 'center'}}>{item.projectName}</Text>
									</Pressable>
								</View>
							</View>
						</View>
					)}/>
			</LinearGradient>
		</SafeAreaView>
	)
}
export default ProjectList;

const styles = StyleSheet.create({
	componentLayout: {
		paddingHorizontal: 20,
		paddingVertical: 8,
		flex: 1,
	},
	headerText: {
		color: ColorGroups.white,
		fontSize: 24,
		textAlign: 'center',
		margin: 16
	},
	projectListItem: {
		backgroundColor: ColorGroups.purple['200'],
		flexDirection: 'row',
		padding: 12,
		borderRadius: 8,
		marginBottom: 8,
		borderColor: ColorGroups.purple['400'],
		borderWidth: 2,
		alignItems: 'center',
	}
});