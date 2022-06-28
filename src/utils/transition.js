export const transitionDuration = 0.4;

export const transitionWithDelay = (options) => {
	const { delay = 0, constDelay = 0, duration = 0.4 } = options || {};

	return {
		enter: {
			duration,
			ease: [0.645, 0.045, 0.355, 1],
			delay: delay + constDelay,
		},
	};
};
