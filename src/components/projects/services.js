import { errorConfig } from '../../common/configs/toast';
import get from '../../utils/fetch';
import { toast } from '../..';

export async function getProjects(projectUrls) {
	try {
		const promises = projectUrls.map(({ url }) => get(url)); // create array of promises.
		const data = await Promise.all(promises);

		return data;
	} catch (err) {
		toast(errorConfig(err.message));
	}
}
