import React from 'react';
import { Button, Heading, HStack, Link, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navbar() {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack justify="space-between">
			<Heading fontFamily="signature" fontWeight="light">{`<Adarsh Shah />`}</Heading>

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
