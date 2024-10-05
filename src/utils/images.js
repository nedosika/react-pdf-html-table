export async function getImageBlobFromUrl(url) {
	const image = await fetch(url)
		.then((response) => response.blob());
	return image;
}