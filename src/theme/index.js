import { extendTheme } from '@chakra-ui/react';
import fonts from './foundations/fonts';
import semanticTokens from './foundations/semanticTokens';

import Container from './components/container';
import Button from './components/button';
import Link from './components/link';
import CloseButton from './components/closeButton';

const theme = {
	fonts,
	semanticTokens,
	components: {
		Container,
		Button,
		Link,
		CloseButton,
	},
};

export default extendTheme(theme);
