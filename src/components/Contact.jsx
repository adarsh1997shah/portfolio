import React from 'react';
import { Box, Heading, HStack, Link, SlideFade, Text } from '@chakra-ui/react';
import Lottie from 'react-lottie-player';
import { easeInOut, transitionWithDelay } from '../utils/transition';

import watchMovieWithPopcorn from '../static/lottie/watch-a-movie-with-popcorn.json';

export default function Contact() {
	return (
		<HStack flexDirection="row-reverse" mb="16">
			<Box flex="1">
				<SlideFade
					offsetY="30px"
					transition={transitionWithDelay({
						ease: easeInOut,
						delay: 0.3,
					})}
					whileInView="enter"
					viewport={{ once: true }}>
					<Heading fontSize="5xl" color="green.300" variant="section">
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

			<Box flex="1" display={{ base: 'none', md: 'block' }}>
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
						play
					/>
				</SlideFade>
			</Box>
		</HStack>
	);
}
