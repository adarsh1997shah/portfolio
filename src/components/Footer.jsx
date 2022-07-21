import React from 'react';
import { Box, Container, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { socialLinks } from '../common/components/Navbar';

function Footer() {
	return (
		<Box backgroundColor="chakra-footer-bg">
			<Container display="flex" justifyContent="space-between" alignItems="center" py="6">
				<HStack justifyContent="space-between" w="100%">
					<Text>&copy; 2022 Adarsh Shah. All rights reserved.</Text>
					<Box mt="0">
						{socialLinks.map(({ url, icon }) => (
							<Link href={url} color="chakra-nav-link" mr="4">
								<Icon as={icon} verticalAlign="middle" fontSize="2xl" />
							</Link>
						))}
					</Box>
				</HStack>
			</Container>
		</Box>
	);
}

export default Footer;
