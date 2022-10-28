import React, { useEffect, useRef, useState } from 'react';
import {
	Button,
	Heading,
	HStack,
	useColorMode,
	useTheme,
	useMediaQuery,
	Container,
	Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

import Links, { navLinks } from './Links';
import Slider from './Slider';

import { classList } from '../../../utils';
import { navItem, navWrapper } from './utils/animationVariants';
import { DEFAULT_DElAY } from '../../constants/delay';
import { DURATION, OFFSET } from '../../constants/linkScroll';

function Navbar() {
	const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);

	const lastScroll = useRef(0);

	const { toggleColorMode, colorMode } = useColorMode();
	const { breakpoints } = useTheme();
	const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.md})`);

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
			<Container
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				as={motion.div}
				initial="offscreen"
				whileInView="onscreen"
				variants={navWrapper}
				viewport={{ once: true }}>
				<Heading
					as={motion.h2}
					variants={navItem}
					fontFamily="signature"
					fontWeight="light"
					fontSize={{ base: '4xl', md: '5xl' }}>
					<Link
						to="about"
						as={ScrollLink}
						className="nav-links"
						spy={true}
						smooth={true}
						offset={OFFSET}
						duration={DURATION}>{`<Adarsh Shah />`}</Link>
				</Heading>

				<HStack as={motion.div} variants={navItem}>
					<HStack
						spacing="5"
						display={{ base: 'none', md: 'flex' }}
						as={motion.div}
						animate={!isMobile}
						variants={navWrapper}>
						<Links />
					</HStack>

					<HStack
						spacing="5"
						as={motion.div}
						variants={navWrapper}
						custom={{ delayChildren: isMobile ? 0 : navLinks.length * DEFAULT_DElAY }}>
						<Button
							variant="link"
							onClick={toggleColorMode}
							verticalAlign="middle"
							as={motion.button}
							variants={navItem}>
							{colorMode === 'light' ? <SunIcon boxSize="5" /> : <MoonIcon boxSize="5" />}
						</Button>
					</HStack>

					{/* Mobile responsive styles */}
					<Slider isMobile={isMobile} />
				</HStack>
			</Container>
		</HStack>
	);
}

export default Navbar;
