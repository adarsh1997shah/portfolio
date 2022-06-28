import React, { useEffect } from 'react';
import {
	Button,
	Heading,
	HStack,
	Link,
	useColorMode,
	useTheme,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Stack,
	useMediaQuery,
	Icon,
	Divider,
	SlideFade,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, ChatIcon } from '@chakra-ui/icons';
import { FaDesktop, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { transitionDuration, transitionWithDelay } from '../../utils/transition';

const navLinks = [
	{ name: 'Projects', url: '#projects', icon: FaDesktop },
	{ name: 'Contact', url: '#contact', icon: ChatIcon },
];

const socialLinks = [
	{ name: 'GitHub', icon: FaGithub },
	{ name: 'LinkedIn', icon: FaLinkedin },
	{ name: 'Twitter', icon: FaTwitter },
	{ name: 'Instagram', icon: FaInstagram },
];

const linkDelay = 0.3;
export const totalLinkDelay = linkDelay * navLinks.length;

function Links({ onClose, isMobile }) {
	const duration = isMobile ? 0 : transitionDuration;

	return navLinks.map(({ name, url, icon: LinkIcon }, index) => {
		const transitionDelay = isMobile ? 0 : index * linkDelay;
		return (
			<SlideFade
				key={url}
				offsetY="-10px"
				transition={transitionWithDelay({ delay: transitionDelay, duration })}
				whileInView="enter"
				viewport={{ once: true }}>
				<Link
					href={url}
					variant={isMobile ? '' : 'nav'}
					color="chakra-nav-link"
					onClick={onClose}>
					<Icon as={LinkIcon} verticalAlign="middle" mr={{ base: '2', md: '1' }} /> {name}
				</Link>
			</SlideFade>
		);
	});
}

function SocialLinks({ onClose, isMobile }) {
	const duration = isMobile ? 0 : transitionDuration;

	return socialLinks.map(({ name, url, icon: LinkIcon }, index) => {
		const transitionDelay = isMobile ? 0 : index * linkDelay + totalLinkDelay;

		return (
			<SlideFade
				key={name}
				offsetY="-10px"
				transition={transitionWithDelay({ delay: transitionDelay, duration })}
				whileInView="enter"
				viewport={{ once: true }}>
				<Link href={url} color="chakra-nav-link" onClick={onClose}>
					<Icon as={LinkIcon} verticalAlign="middle" mr={{ base: '2', md: '1' }} /> {name}
				</Link>
			</SlideFade>
		);
	});
}

function Navbar() {
	const btnRef = React.useRef();

	const { toggleColorMode, colorMode } = useColorMode();
	const { breakpoints } = useTheme();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.md})`);

	useEffect(() => {
		if (!isMobile) {
			onClose();
		}
	}, [isMobile, onClose]);

	return (
		<HStack as="nav" justify="space-between" pt="4" fontSize="lg" height="20">
			<SlideFade offsetY="-10px" transition={transitionWithDelay()} whileInView="enter">
				<Heading
					fontFamily="signature"
					fontWeight="light"
					fontSize={{ base: '4xl', md: '5xl' }}>
					{`<Adarsh Shah />`}
				</Heading>
			</SlideFade>

			<HStack>
				<HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
					<Links />
				</HStack>

				<SlideFade
					offsetY="-10px"
					transition={transitionWithDelay({
						delay: isMobile ? 0.2 : totalLinkDelay,
					})}
					whileInView="enter"
					viewport={{ once: true }}>
					<Button variant="link" onClick={toggleColorMode} verticalAlign="middle">
						{colorMode === 'light' ? <SunIcon boxSize="5" /> : <MoonIcon boxSize="5" />}
					</Button>
				</SlideFade>

				<HStack display={{ md: 'none' }}>
					<SlideFade
						offsetY="-10px"
						transition={transitionWithDelay({
							delay: 0.4,
						})}
						whileInView="enter"
						viewport={{ once: true }}>
						<Button ref={btnRef} variant="link" onClick={onOpen} verticalAlign="middle">
							<HamburgerIcon boxSize="5" />
						</Button>
					</SlideFade>

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
			</HStack>
		</HStack>
	);
}

export default Navbar;
