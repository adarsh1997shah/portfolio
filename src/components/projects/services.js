import get from '../../utils/fetch';

export async function getProjects(projectUrls) {
	const promises = projectUrls.map(({ url }) => get(url)); // create array of promises.
	const data = await Promise.all(promises);

	return data;
}
