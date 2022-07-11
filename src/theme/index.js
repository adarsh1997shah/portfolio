import { extendTheme } from '@chakra-ui/react';
import fonts from './foundations/fonts';
import semanticTokens from './foundations/semanticTokens';

import Container from './components/container';
import Button from './components/button';
import Link from './components/link';
import CloseButton from './components/closeButton';
import Heading from './components/heading';

const theme = {
	fonts,
	semanticTokens,
	components: {
		Container,
		Button,
		Link,
		CloseButton,
		Heading,
	},
};

export default extendTheme(theme);
