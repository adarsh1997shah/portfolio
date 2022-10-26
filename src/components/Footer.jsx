import React from 'react';
import { Box, Container, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { socialApps } from '../common/constants/social';

function Footer() {
	return (
		<Box className="footer" backgroundColor="chakra-footer-bg">
			<Container py="6">
				<Flex
					display="flex"
					justifyContent={{ base: 'center', md: 'space-between' }}
					w="100%"
					flexWrap="wrap"
					gap="2">
					<Text>&copy; 2022 Adarsh Shah. All rights reserved.</Text>
					<HStack>
						{socialApps.map(({ url, icon, color }, index) => (
							<Link
								key={index}
								href={url}
								color="chakra-nav-link"
								display="inline-block"
								isExternal>
								<Icon
									as={icon}
									verticalAlign="middle"
									fontSize="2xl"
									_hover={{ color }}
								/>
							</Link>
						))}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}

export default Footer;
