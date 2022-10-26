import React, { useEffect, useRef, useState } from 'react';
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
	Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, ChatIcon } from '@chakra-ui/icons';
import { FaDesktop } from 'react-icons/fa';
import { transitionDuration, transitionWithDelay } from '../../utils/transition';
import { classList } from '../../utils';
import { socialApps } from '../constants/social';

const navLinks = [
	{ name: 'Projects', url: '#projects', icon: FaDesktop },
	{ name: 'Contact', url: '#contact', icon: ChatIcon },
];

const linkDelay = 0.3;
export const totalLinkDelay = linkDelay * navLinks.length;

function Links({ onClose = () => {}, isMobile = false }) {
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
	return socialApps.map(({ name, url, icon: LinkIcon }, index) => {
		return (
			<Link href={url} color="chakra-nav-link" onClick={onClose} isExternal>
				<Icon as={LinkIcon} verticalAlign="middle" mr="2" /> {isMobile && name}
			</Link>
		);
	});
}

function Navbar() {
	const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);

	const btnRef = React.useRef();
	const lastScroll = useRef(0);

	const { toggleColorMode, colorMode } = useColorMode();
	const { breakpoints } = useTheme();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.md})`);

	useEffect(() => {
		if (!isMobile) {
			onClose();
		}
	}, [isMobile, onClose]);

	const showNavbar = () => {
		if (window.scrollY > 100) {
			if (window.scrollY < lastScroll.current) {
				setShowNavbarOnScroll('nav-scroll-up');
			} else {
				setShowNavbarOnScroll('nav-scroll-down');
			}
		} else {
			if (window.scrollY > 0 && window.scrollY < 100) {
				setShowNavbarOnScroll('nav-height-dec');
			} else {
				setShowNavbarOnScroll('');
			}
		}

		lastScroll.current = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener('scroll', showNavbar);

		return () => {
			window.removeEventListener('scroll', showNavbar);
		};
	}, []);

	return (
		<HStack
			as="nav"
			className={classList(['nav', showNavbarOnScroll])}
			fontSize="lg"
			height="24"
			position="fixed"
			left="0"
			right="0"
			zIndex="banner"
			backgroundColor="chakra-nav-bg">
			<Container display="flex" justifyContent="space-between" alignItems="center">
				<SlideFade
					offsetY="-10px"
					transition={transitionWithDelay()}
					whileInView="enter"
					viewport={{ once: true }}>
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

						{/* Styles for mobile */}
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
			</Container>
		</HStack>
	);
}

export default Navbar;
