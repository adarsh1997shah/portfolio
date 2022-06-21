import { extendTheme } from '@chakra-ui/react';
import Container from './components/container';
import Button from './components/button';
import fonts from './foundations/fonts';
import semanticTokens from './foundations/semanticTokens';

const theme = {
	fonts,
	semanticTokens,
	components: {
		Container,
		Button,
	},
};

export default extendTheme(theme);
