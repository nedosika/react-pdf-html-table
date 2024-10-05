import {Text} from "@react-pdf/renderer";

const Column = (props) =>
	(
		<Text style={{
			width: props.size + "%",
			textAlign: "center",
			justifyContent: "center",
			alignItems: "center",
			paddingTop: 4,
			paddingBottom: 4,
			paddingRight: 2,
			paddingLeft: 2,
			...(props.b) && {borderBottom: "1pt solid #0047AB"},
			...(props.s) && {borderLeft: "1pt solid #0047AB"},
			...(props.t) && {borderTop: "1pt solid #0047AB"},
			...(props.e) && {borderRight: "1pt solid #0047AB"},
		}}>
			{props.name || props.children || null}
		</Text>
	)

export default Column;