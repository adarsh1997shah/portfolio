import { extendTheme } from '@chakra-ui/react';
import fonts from './foundations/fonts';
import semanticTokens from './foundations/semanticTokens';

import Container from './components/container';
import Button from './components/button';
import Link from './components/link';

const theme = {
	fonts,
	semanticTokens,
	components: {
		Container,
		Button,
		Link,
	},
};

export default extendTheme(theme);
