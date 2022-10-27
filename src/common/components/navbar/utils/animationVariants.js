import { DEFAULT_DElAY } from '../../../constants/delay';

export const navWrapper = {
	onscreen: (params = {}) => {
		return {
			transition: { staggerChildren: DEFAULT_DElAY, ...params },
		};
	},
};

export const navItem = {
	offscreen: {
		y: -15,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};
