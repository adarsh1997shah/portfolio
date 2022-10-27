import { useQuery } from '@tanstack/react-query';
import { getProjects } from './services';

import boxOfficeThumb from '../../static/img/box-office.png';
import ticTakToeThumb from '../../static/img/tic-tak-toe.png';
import eShopThumb from '../../static/img/e-shop.jpeg';
import metronomeThumb from '../../static/img/metronome.jpeg';

const thumbnails = [boxOfficeThumb, ticTakToeThumb, eShopThumb, metronomeThumb];

export const projectUrls = [
	{ url: 'https://api.github.com/repos/adarsh1997shah/box-office' },
	{ url: 'https://api.github.com/repos/adarsh1997shah/tic-tak-toe' },
	{ url: 'https://api.github.com/repos/adarsh1997shah/e-shop' },
	{ url: 'https://api.github.com/repos/adarsh1997shah/Metronome' },
];

export function useProjects() {
	return useQuery(['projects'], () => getProjects(projectUrls), {
		select: (data) => {
			return data.map((item, index) => ({ ...item, thumbnail: thumbnails[index] }));
		},
	});
}
