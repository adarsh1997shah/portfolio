export const classList = (classes = []) => {
	return classes
		.reduce((acc, curr) => {
			if (curr) {
				acc += `${curr} `;
			}

			return acc;
		}, '')
		.trim();
};
