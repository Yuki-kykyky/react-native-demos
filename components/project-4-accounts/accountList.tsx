import { FlatList, StyleSheet, Text, View } from "react-native";
import { BILLS } from "@/data/bills";
import { getDate, sortByDateDesc } from "@/utils/date";

export const AccountList = ({route}: { route: any }) => {

	return (
		<View style={styles.container}>
			<View style={{
				height: 60,
				width: '90%',
				backgroundColor: '#3667b0',
				marginVertical: 10,
				borderRadius: 12,
				borderWidth: 2,
				borderColor: '#ffffff',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Text style={{
					color: '#fff',
					fontSize: 18
				}}>{route.params.type}</Text>
			</View>
			<View
				style={{
					width: '90%',
					borderRadius: 12,
					alignItems: 'center',
					justifyContent: 'center',
					paddingBottom: 96,
				}}
			>
				{BILLS.length ? (<FlatList
					style={{width: '100%'}}
					data={sortByDateDesc(BILLS)} renderItem={({item}) => {
					return (
						<View style={{
							paddingHorizontal: 24,
							paddingVertical: 8,
							marginVertical: 4,
							borderRadius: 12,
							backgroundColor: '#ffffff',
						}}>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 8,
							}}>
								<Text style={{fontWeight: 'bold'}}>{item.title}</Text>
								<Text>$ {item.amount.toFixed(2)}</Text>
							</View>
							<Text>{getDate(item.date)}</Text>
						</View>
					)
				}}/>) : (
					<View>
						<Text>No bills</Text>
					</View>
				)}
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#7ba1e0',
	}
});