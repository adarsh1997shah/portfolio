export const transitionWithDelay = (delay = 0, constDelay = 0) => ({
	enter: { duration: 0.5, ease: 'linear', delay: delay + constDelay },
});
