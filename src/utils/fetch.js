export default async function get(url) {
	const res = await fetch(url);

	// If status is not 200 then show the error message from the api
	if (res.status !== 200) {
		const { message } = await res.json();
		throw new Error(message || 'Something went wrong');
	}

	return res.json();
}
