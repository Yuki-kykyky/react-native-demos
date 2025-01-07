import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { projects } from "@/constants/projectList";

export const ProjectList = ({setPage}: { setPage: any }) => {
	return (
		<View>
			<Text style={styles.headerText}>Project lists</Text>
			<FlatList data={projects} renderItem={({item, index}) => (
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
		</View>
	)
}
const styles = StyleSheet.create({
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