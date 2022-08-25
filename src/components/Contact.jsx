import React, { useRef } from 'react';
import { Box, Heading, HStack, Link, SlideFade, Text } from '@chakra-ui/react';
import Lottie from 'react-lottie-player';
import { easeInOut, transitionWithDelay } from '../utils/transition';

import watchMovieWithPopcorn from '../static/lottie/watch-a-movie-with-popcorn.json';
import useOnScreen from '../common/hooks/useOnScreen';
import COLOR from '../common/constants/colors';

export default function Contact() {
	const lottieRef = useRef(null);

	const isLottieVisible = useOnScreen(lottieRef);

	return (
		<HStack as="section" className="contact" flexDirection="row-reverse">
			<Box flex="1">
				<SlideFade
					offsetY="30px"
					transition={transitionWithDelay({
						ease: easeInOut,
						delay: 0.3,
					})}
					whileInView="enter"
					viewport={{ once: true }}>
					<Heading size="2xl" color={COLOR.subHeading} variant="section">
						Contact
					</Heading>
					<Text my="5">
						I'm always interested in hearing about new technology, my inbox is always
						open. Whether for a potential project or just to say hi, I'll try my best to
						answer your email.
					</Text>
					<Link variant="outline">Get in touch</Link>
				</SlideFade>
			</Box>

			<Box flex="1" display={{ base: 'none', md: 'block' }} ref={lottieRef}>
				<SlideFade
					offsetY="30px"
					transition={transitionWithDelay({
						ease: easeInOut,
						delay: 0.3,
					})}
					whileInView="enter"
					viewport={{ once: true }}>
					<Lottie
						className="lottie-student"
						loop
						animationData={watchMovieWithPopcorn}
						play={isLottieVisible}
					/>
				</SlideFade>
			</Box>
		</HStack>
	);
}
