import React, { useEffect } from 'react';
import {
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Icon,
	Link,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { navItem, navWrapper } from './utils/animationVariants';
import { HamburgerIcon } from '@chakra-ui/icons';
import { socialApps } from '../../constants/social';
import Links from './Links';
import { DEFAULT_DElAY } from '../../constants/delay';

function SocialLinks({ onClose, isMobile }) {
	return socialApps.map(({ name, url, icon: LinkIcon }, index) => {
		return (
			<Link href={url} key={url} color="chakra-nav-link" onClick={onClose} isExternal>
				<Icon as={LinkIcon} verticalAlign="middle" mr="2" /> {isMobile && name}
			</Link>
		);
	});
}

function Slider({ isMobile }) {
	const btnRef = React.useRef();

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (!isMobile) {
			onClose();
		}
	}, [isMobile, onClose]);

	return (
		<HStack
			display={{ md: 'none' }}
			as={motion.div}
			variants={navWrapper}
			animate={isMobile}
			custom={{ delayChildren: DEFAULT_DElAY }}>
			<Button
				ref={btnRef}
				variant="link"
				onClick={onOpen}
				verticalAlign="middle"
				as={motion.button}
				variants={navItem}>
				<HamburgerIcon boxSize="5" />
			</Button>

			{isMobile && (
				<Drawer
					isOpen={isOpen}
					placement="right"
					onClose={onClose}
					finalFocusRef={btnRef}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader />

						<DrawerBody fontSize="xl">
							<Stack pt="8">
								<Links onClose={onClose} isMobile={isMobile} />
							</Stack>

							<Stack mt="22">
								<Divider borderColor="green.400" />
								<SocialLinks onClose={onClose} isMobile={isMobile} />
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			)}
		</HStack>
	);
}

export default Slider;
