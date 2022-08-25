import React from 'react';
import { Box, Container, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { socialLinks } from '../common/components/Navbar';

function Footer() {
	return (
		<Box backgroundColor="chakra-footer-bg">
			<Container py="6">
				<Flex
					display="flex"
					justifyContent={{ base: 'center', md: 'space-between' }}
					w="100%"
					flexWrap="wrap"
					gap="2">
					<Text>&copy; 2022 Adarsh Shah. All rights reserved.</Text>
					<HStack>
						{socialLinks.map(({ url, icon }, index) => (
							<Link key={index} href={url} color="chakra-nav-link" display="inline-block">
								<Icon as={icon} verticalAlign="middle" fontSize="2xl" />
							</Link>
						))}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}

export default Footer;
