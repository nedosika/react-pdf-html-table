import {View, StyleSheet} from "@react-pdf/renderer";
import Column from "./Column";

export const styles = StyleSheet.create({
	body: {
		fontSize: 6,
		paddingTop: 35,
		paddingBottom: 35,
		paddingHorizontal: 20,
	},
	Row: {
		display: "flex",
		flexDirection: "row"
	},
});

const renderBodyTableInvoice = (anexos = Array.from({length: 30})) =>
	anexos.map((_, id) =>
		<View key={id} style={styles.Row} wrap={false}>
			<Column b s size={10}>{id + 1}</Column>
			<Column b s size={20}>Name - {id + 1}</Column>
			<Column b s size={30}>Family - {id + 1}</Column>
			<Column b s size={10}>{id + 1}</Column>
			<Column b s e size={30}>Description - {id + 1}</Column>
		</View>
	)

const Table = () => {
	return (
		<View>
			<View style={[styles.Row, {borderTop: "2pt solid #0047AB", fontFamily: "Helvetica-Bold"}]} fixed>
				<Column b s size={10}>N°</Column>
				<Column b s size={20}>Name</Column>
				<Column b s size={30}>Descripcion</Column>
				<Column b s size={10}>Age</Column>
				<Column b s e size={30}>Description</Column>
			</View>

			{renderBodyTableInvoice()}

			<View style={styles.Row}>
				<Column s b size={30}>Total</Column>
				<Column s b size={30}></Column>
				<Column s b size={10}></Column>
				<Column s b e size={30}></Column>
			</View>
		</View>
	);
};

export default Table;