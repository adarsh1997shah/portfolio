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

export const capitalizeFirstLetter = (word) => {
	return word
		.split('')
		.map((letter, index) => {
			if (index === 0) {
				return letter.toUpperCase();
			}

			return letter.toLowerCase();
		})
		.join('');
};

export const replaceHiphenWithSpace = (word) => {
	return word.replace('-', ' ');
};

export const isOdd = (number = 0) => {
	return number % 2 !== 0;
};
