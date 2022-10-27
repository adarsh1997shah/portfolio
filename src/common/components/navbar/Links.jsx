import React from 'react';
import { Icon, Link } from '@chakra-ui/react';
import { FaDesktop } from 'react-icons/fa';
import { ChatIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { navItem } from './utils/animationVariants';

export const navLinks = [
	{ name: 'Projects', url: '#projects', icon: FaDesktop },
	{ name: 'Contact', url: '#contact', icon: ChatIcon },
];

function Links({ onClose = () => {}, isMobile = false }) {
	return navLinks.map(({ name, url, icon: LinkIcon }, index) => {
		return (
			<Link
				as={motion.a}
				key={url}
				variants={navItem}
				href={url}
				variant={isMobile ? '' : 'nav'}
				color="chakra-nav-link"
				onClick={onClose}>
				<Icon as={LinkIcon} verticalAlign="middle" mr={{ base: '2', md: '1' }} /> {name}
			</Link>
		);
	});
}

export default Links;
