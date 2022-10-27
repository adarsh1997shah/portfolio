import React from 'react';
import { SlideFade, useMediaQuery, useTheme } from '@chakra-ui/react';
import { transitionWithDelay } from '../../utils/transition';
import { DEFAULT_DElAY } from '../../common/constants/delay';
import { navLinks } from '../../common/components/navbar/Links';

function Slide({ children, delay }) {
	const { breakpoints } = useTheme();
	const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.md})`);

	const totalLinkDelay = isMobile
		? DEFAULT_DElAY * 2 // Taking 2 as in mobile view we only have hamberger and theme changer button.
		: DEFAULT_DElAY * (navLinks.length + 1); // Adding one to navlinks as to add theme changer button.
	const totalDelay = totalLinkDelay + delay + 0.3; // Adding a const as to delay it more.

	return (
		<SlideFade
			offsetY="10px"
			transition={transitionWithDelay({ delay: totalDelay })}
			whileInView="enter"
			viewport={{ once: true }}>
			{children}
		</SlideFade>
	);
}

export default Slide;
