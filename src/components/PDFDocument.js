import {Document, Page, View, Text, StyleSheet, Font, Image, Svg, Path} from "@react-pdf/renderer";
import {Html} from "react-pdf-html";

import Table from "./Table";

import image1 from "../assets/images/quijote1.jpg"
import image2 from "../assets/images/quijote2.png"
import html from "../assets/html";
import {getImageBlobFromUrl} from "../utils/images";

Font.register({
	family: 'Roboto',
	fonts: [
		{
			src: "./Roboto-Regular.ttf",
			fontWeight: 'normal'
		},
		{
			src: `./Roboto-Bold.ttf`,
			fontWeight: 'bold'
		},
		{
			src: `./Roboto-Italic.ttf`,
			fontWeight: 'normal',
			fontStyle: 'italic'
		},
		{
			src: `./Roboto-BoldItalic.ttf`,
			fontWeight: 'bold',
			fontStyle: 'italic'
		}
	]
})

Font.register({
	family: 'Oswald',
	src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

// Create styles
const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		fontFamily: 'Oswald'
	},
	author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: 'Roboto'
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman'
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey',
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
	flex: {
		display: "flex",
		flexDirection: 'row',
		justifyContent: "space-between",
		fontSize: 14,
		// backgroundColor: '#cdcdcd'
		gap: 15,
		padding: 10,
		margin: 10
	},
	section: {
		margin: 10,
		flex: 1
	},
	redText: {
		color: "red"
	},
	line: {
		borderTop: "1px solid grey",
		margin: 12
	}
});

const imageData =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";

const blobImage = getImageBlobFromUrl(image2);

// Create Document Component
const PDFDocument = () => {
	return (
		<Document title="Test document name" onRender={(props) => console.log("📙: props", props)}>
			<Page style={styles.body}>
				{/* Render text on each pages by fixed prop */}
				<Text style={[styles.header]} fixed>
					~ Created with react-pdf ~
				</Text>
				<Image
					style={{width: 49, height: 49}}
					src={imageData}
				/>
				<Text style={styles.title}>Don Quijote de la Mancha</Text>
				<Text style={styles.author}>Miguel de Cervantes</Text>
				<Image
					style={styles.image}
					source={image1}
				/>
				<Text style={styles.subtitle}>
					Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
					Quijote de la Mancha
				</Text>
				<Text style={styles.text}>
					En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
					mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
					antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
					carnero, salpicón las más noches, duelos y quebrantos los sábados,
					lentejas los viernes, algún palomino de añadidura los domingos,
					consumían las tres partes de su hacienda. El resto della concluían sayo
					de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
					mismo, los días de entre semana se honraba con su vellori de lo más
					fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
					que no llegaba a los veinte, y un mozo de campo y plaza, que así
					ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
					hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
					enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
					tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
					diferencia en los autores que deste caso escriben), aunque por
					conjeturas verosímiles se deja entender que se llama Quijana; pero esto
					importa poco a nuestro cuento; basta que en la narración dél no se salga
					un punto de la verdad
				</Text>
				<View style={styles.line}/>
				<Text style={styles.text}>
					Con estas y semejantes razones perdía el pobre caballero el juicio, y
					desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
					sacara, ni las entendiera el mismo Aristóteles, si resucitara para sólo
					ello. No estaba muy bien con las heridas que don Belianis daba y
					recibía, porque se imaginaba que por grandes maestros que le hubiesen
					curado, no dejaría de tener el rostro y todo el cuerpo lleno de
					cicatrices y señales; pero con todo alababa en su autor aquel acabar su
					libro con la promesa de aquella inacabable aventura, y muchas veces le
					vino deseo de tomar la pluma, y darle fin al pie de la letra como allí
					se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
					otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas
					veces competencia con el cura de su lugar (que era hombre docto graduado
					en Sigüenza), sobre cuál había sido mejor caballero, Palmerín de
					Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
					pueblo, decía que ninguno llegaba al caballero del Febo, y que si alguno
					se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque
					tenía muy acomodada condición para todo; que no era caballero
					melindroso, ni tan llorón como su hermano, y que en lo de la valentía no
					le iba en zaga.
				</Text>
				<Text style={styles.subtitle} break>
					Capítulo II: Que trata de la primera salida que de su tierra hizo el
					ingenioso Don Quijote
				</Text>
				<Image
					style={styles.image}
					src={blobImage}
				/>
				<Text style={styles.text}>
					Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
					en efeto su pensamiento, apretándole a ello la falta que él pensaba que
					hacía en el mundo su tardanza, según eran los agravios que pensaba
					deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
					mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna
					de su intención y sin que nadie le viese, una mañana, antes del día, que
					era uno de los calurosos del mes de Julio, se armó de todas sus armas,
					subió sobre Rocinante, puesta su mal compuesta celada, embrazó su
					adarga, tomó su lanza y por la puerta falsa de un corral salió al campo
					con grandísimo contento y alborozo de ver con cuánta facilidad había
					dado principio a su buen deseo. Mas apenas se vio en el campo cuando le
					asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la
					comenzada empresa; y fue que le vino a la memoria que no era armado
					caballero, y que, conforme a ley de caballería, ni podía ni debía tomar
					armas con ningún caballero; y puesto que lo fuera, había de llevar armas
					blancas, como novel caballero, sin empresa en el escudo, hasta que por
					su esfuerzo la ganase. Estos pensamientos le hicieron titubear en su
					propósito; mas pudiendo más su locura que otra razón alguna, propuso de
					hacerse armar caballero del primero que topase, a imitación de otros
					muchos que así lo hicieron, según él había leído en los libros que tal
					le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en
					teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
					y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
					creyendo que en aquello consistía la fuerza de las aventuras
				</Text>
				<Text break style={styles.title}>Two columns with debug mode</Text>
				<View style={styles.flex} debug>
					<View style={styles.section}>
						<Text style={styles.redText}>
							Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
							en efeto su pensamiento, apretándole a ello la falta que él pensaba que
							hacía en el mundo su tardanza, según eran los agravios que pensaba
							deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
							mejorar y deudas que satisfacer.
						</Text>
					</View>
					<View style={styles.section}>
						<Text>
							En lo de las armas blancas, pensaba limpiarlas de manera, en
							teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
							y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
							creyendo que en aquello consistía la fuerza de las aventuras
						</Text>
					</View>
				</View>
				<Text break style={styles.title}>HTML</Text>
				<Html>{html}</Html>
				<Text break style={styles.title}>Table</Text>
				<Table/>
				<Text style={styles.text}>
					Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
					en efeto su pensamiento, apretándole a ello la falta que él pensaba que
					hacía en el mundo su tardanza, según eran los agravios que pensaba
					deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
					mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna
					de su intención y sin que nadie le viese, una mañana, antes del día, que
					era uno de los calurosos del mes de Julio, se armó de todas sus armas,
					subió sobre Rocinante, puesta su mal compuesta celada, embrazó su
					adarga, tomó su lanza y por la puerta falsa de un corral salió al campo
					con grandísimo contento y alborozo de ver con cuánta facilidad había
					dado principio a su buen deseo. Mas apenas se vio en el campo cuando le
					asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la
					comenzada empresa; y fue que le vino a la memoria que no era armado
					caballero, y que, conforme a ley de caballería, ni podía ni debía tomar
					armas con ningún caballero; y puesto que lo fuera, había de llevar armas
					blancas, como novel caballero, sin empresa en el escudo, hasta que por
					su esfuerzo la ganase. Estos pensamientos le hicieron titubear en su
					propósito; mas pudiendo más su locura que otra razón alguna, propuso de
					hacerse armar caballero del primero que topase, a imitación de otros
					muchos que así lo hicieron, según él había leído en los libros que tal
					le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en
					teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
					y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
					creyendo que en aquello consistía la fuerza de las aventuras
				</Text>
				<View style={styles.line}/>
				<Text style={styles.text}>
					Con estas y semejantes razones perdía el pobre caballero el juicio, y
					desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
					sacara, ni las entendiera el mismo Aristóteles, si resucitara para sólo
					ello. No estaba muy bien con las heridas que don Belianis daba y
					recibía, porque se imaginaba que por grandes maestros que le hubiesen
					curado, no dejaría de tener el rostro y todo el cuerpo lleno de
					cicatrices y señales; pero con todo alababa en su autor aquel acabar su
					libro con la promesa de aquella inacabable aventura, y muchas veces le
					vino deseo de tomar la pluma, y darle fin al pie de la letra como allí
					se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
					otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas
					veces competencia con el cura de su lugar (que era hombre docto graduado
					en Sigüenza), sobre cuál había sido mejor caballero, Palmerín de
					Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
					pueblo, decía que ninguno llegaba al caballero del Febo, y que si alguno
					se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque
					tenía muy acomodada condición para todo; que no era caballero
					melindroso, ni tan llorón como su hermano, y que en lo de la valentía no
					le iba en zaga.
				</Text>
				<Text break style={styles.title}>SVG</Text>
				<Svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
					<Path
						fill="#000"
						d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
					/>
				</Svg>
				{/* Render page numbers on each pages by fixed and render props*/}
				<Text style={styles.pageNumber} render={({pageNumber, totalPages}) => (
					`${pageNumber} / ${totalPages}`
				)} fixed/>
			</Page>
		</Document>
	);
};

export default PDFDocument;