import {Font, pdf, usePDF, } from "@react-pdf/renderer";

import PDFDocument from "./components/PDFDocument";

function App() {
	// This is second variant to use generating PDF by hook usePDF
	// const [{url, blob, loading, error}, update] = usePDF({ document: PDFDocument() });

	const onGenerate = async () => {
        const blob = await pdf(<PDFDocument/>).toBlob();

        window.open(URL.createObjectURL(blob), "_blank");
    }

	// console.log("📙: {url, blob, loading, error}", {url, blob, loading, error})
	// if (loading) return <div>Loading ...</div>;
	//
	// if (error) return <div>Something went wrong: {error}</div>;

	console.log('Font.getRegisteredFonts().', Font.getRegisteredFonts())
	console.log('Font.getRegisteredFontFamilies().', Font.getRegisteredFontFamilies())

	return (
		<div>
			<button onClick={onGenerate}>Generate PDF</button>
		</div>
	);
}

export default App;
