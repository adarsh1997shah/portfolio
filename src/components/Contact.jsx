import React, { useRef } from 'react';
import { Box, Heading, Link, SlideFade, Stack, Text } from '@chakra-ui/react';
import Lottie from 'react-lottie-player';
import { easeInOut, transitionWithDelay } from '../utils/transition';

import watchMovieWithPopcorn from '../static/lottie/watch-a-movie-with-popcorn.json';
import useOnScreen from '../common/hooks/useOnScreen';
import COLOR from '../common/constants/colors';

export default function Contact() {
	const lottieRef = useRef(null);

	const isLottieVisible = useOnScreen(lottieRef);

	return (
		<Stack
			as="section"
			className="contact"
			gap={{ base: '3', md: '5' }}
			mb={{ base: '10', md: '24' }}>
			<Heading
				size={{ base: 'xl', md: '2xl' }}
				color={COLOR.subHeading}
				variant="section">
				Contact
			</Heading>

			<Stack flexDirection="row">
				<Box flex="1">
					<SlideFade
						offsetY="30px"
						transition={transitionWithDelay({
							ease: easeInOut,
							delay: 0.3,
						})}
						whileInView="enter"
						viewport={{ once: true }}>
						<Text mb="5">
							I'm always interested in hearing about new technology, my inbox is always
							open. Whether for a potential project or just to say hi, I'll try my best to
							answer your email.
						</Text>
						<Link variant="outline" href="mailto:adarshshah01@gmail.com">
							Say hello
						</Link>
					</SlideFade>
				</Box>

				<Box
					flex="1"
					display={{ base: 'none', md: 'block' }}
					ref={lottieRef}
					position="relative">
					<SlideFade
						offsetY="30px"
						transition={transitionWithDelay({
							ease: easeInOut,
							delay: 0.3,
						})}
						whileInView="enter"
						viewport={{ once: true }}>
						<Lottie
							className="lottie-contact"
							loop
							animationData={watchMovieWithPopcorn}
							play={isLottieVisible}
						/>
					</SlideFade>
				</Box>
			</Stack>
		</Stack>
	);
}
