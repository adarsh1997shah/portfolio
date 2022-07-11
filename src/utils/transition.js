export const transitionDuration = 0.4;
export const easeInOut = [0.42, 0, 0.58, 1];
export const customBezier1 = [0.645, 0.045, 0.355, 1];

export const transitionWithDelay = (options) => {
	const { delay = 0, constDelay = 0, duration = 0.4, ease = 'linear' } = options || {};

	return {
		enter: {
			duration,
			ease,
			delay: delay + constDelay,
		},
	};
};
