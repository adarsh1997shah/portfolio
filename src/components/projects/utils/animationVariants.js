export const projectVariants = (condition) => ({
	offscreen: {
		x: condition ? 100 : -100,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
});
