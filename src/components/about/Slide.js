import React from 'react';
import { SlideFade } from '@chakra-ui/react';
import { totalLinkDelay } from '../../common/components/Navbar';
import { transitionWithDelay } from '../../utils/transition';

const transition = (delay) => {
	return transitionWithDelay({ delay, constDelay: totalLinkDelay });
};

function Slide({ children, delay }) {
	return (
		<SlideFade
			offsetY="10px"
			transition={transition(delay)}
			whileInView="enter"
			viewport={{ once: true }}>
			{children}
		</SlideFade>
	);
}

export default Slide;
