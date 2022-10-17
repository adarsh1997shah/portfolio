import { useQuery } from '@tanstack/react-query';
import { getProjects } from './services';

export const projectUrls = [
	{ url: 'https://api.github.com/repos/adarsh1997shah/box-office' },
	{ url: 'https://api.github.com/repos/adarsh1997shah/tic-tak-toe' },
	{ url: 'https://api.github.com/repos/adarsh1997shah/e-shop' },
	{ url: 'https://api.github.com/repos/adarsh1997shah/Metronome' },
];

export function useProjects() {
	return useQuery(['projects'], () => getProjects(projectUrls));
}
