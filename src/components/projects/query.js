import { useQuery } from '@tanstack/react-query';
import { getProjects } from './services';

const projectUrls = [
	'https://api.github.com/repos/adarsh1997shah/box-office',
	'https://api.github.com/repos/adarsh1997shah/Catch-Of-The-Day',
	'https://api.github.com/repos/adarsh1997shah/e-shop',
	'https://api.github.com/repos/adarsh1997shah/Image_Carousal',
];

export function useProjects() {
	return useQuery(['projects'], () => getProjects(projectUrls));
}
