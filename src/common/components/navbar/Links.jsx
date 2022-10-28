import React from 'react';
import { Box, Icon, Link } from '@chakra-ui/react';
import { FaDesktop } from 'react-icons/fa';
import { ChatIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import { navItem } from './utils/animationVariants';

import { DURATION, OFFSET } from '../../constants/linkScroll';

export const navLinks = [
	{ name: 'Projects', to: 'projects', icon: FaDesktop },
	{ name: 'Contact', to: 'contact', icon: ChatIcon },
];

function Links({ onClose = () => {}, isMobile = false }) {
	return navLinks.map(({ name, to, icon: LinkIcon }, index) => {
		return (
			<Box as={motion.div} key={to} variants={navItem} color="chakra-nav-link">
				<Link
					to={to}
					as={ScrollLink}
					className="nav-links"
					spy={true}
					smooth={true}
					offset={OFFSET}
					duration={DURATION}
					variant={isMobile ? '' : 'nav'}
					onClick={onClose}>
					<Icon as={LinkIcon} verticalAlign="middle" mr={{ base: '2', md: '1' }} /> {name}
				</Link>
			</Box>
		);
	});
}

export default Links;
