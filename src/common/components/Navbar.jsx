import React from 'react';
import { Box, Button, HStack, Link, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navbar() {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack justify="space-between">
			<Box>logo</Box>

			<HStack>
				<Link>About</Link>
				<Link>Contact</Link>
				<Link>Project</Link>
				<Button variant="link" onClick={toggleColorMode}>
					{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
				</Button>
			</HStack>
		</HStack>
	);
}

export default Navbar;
