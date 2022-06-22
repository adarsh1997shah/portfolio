import React from 'react';
import { Button, Heading, HStack, Link, useColorMode, useTheme } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const navLinks = [
	{ name: 'Projects', url: '#projects' },
	{ name: 'Contact', url: '#contact' },
];

function Navbar() {
	const { toggleColorMode, colorMode } = useColorMode();
	const { colors } = useTheme();

	return (
		<HStack as="nav" justify="space-between" pt="4">
			<Heading fontFamily="signature" fontWeight="light">{`<Adarsh Shah />`}</Heading>

			<HStack>
				<HStack spacing="5">
					{navLinks.map(({ name, url }) => (
						<Link
							key={url}
							href={url}
							position="relative"
							_after={{
								content: `""`,
								position: 'absolute',
								width: '100%',
								transform: 'scaleX(0)',
								height: '2px',
								bottom: '0',
								left: '0',
								backgroundColor: colors.green['300'],
								transformOrigin: 'bottom right',
								transition: `transform 0.25s ease-out`,
							}}
							_hover={{
								_after: { transform: `scaleX(1)`, transformOrigin: `bottom left` },
							}}
							color="chakra-nav-link">
							{name}
						</Link>
					))}
				</HStack>

				<Button variant="link" onClick={toggleColorMode}>
					{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
				</Button>
			</HStack>
		</HStack>
	);
}

export default Navbar;
