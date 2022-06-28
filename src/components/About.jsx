import React from 'react';
import Lottie from 'react-lottie-player';
import { Box, Heading, HStack, SlideFade, Text } from '@chakra-ui/react';
import { totalLinkDelay } from '../common/components/Navbar';
import { transitionWithDelay } from '../utils/transition';

import student from '../static/lottie/76212-student-transparent.json';

const transition = (delay) => {
	return transitionWithDelay({ delay, constDelay: totalLinkDelay });
};

function About() {
	return (
		<HStack as="section" className="about" minH="calc(100vh - 80px)">
			<Box flex="1">
				<SlideFade offsetY="10px" transition={transition(0.1)} whileInView="enter">
					<Text as="div">
						Hi, my name is{' '}
						<SlideFade offsetY="10px" transition={transition(0.2)} whileInView="enter">
							<Text
								as="span"
								fontSize={{ base: '4xl', md: '6xl' }}
								display="block"
								color="green.500">
								Adarsh Shah.
							</Text>
						</SlideFade>
					</Text>
				</SlideFade>
				<SlideFade offsetY="10px" transition={transition(0.3)} whileInView="enter">
					<Heading my="4" fontSize={{ base: '4xl', md: '6xl' }} color="green.300">
						I build/break things on internet.
					</Heading>
				</SlideFade>

				<SlideFade offsetY="10px" transition={transition(0.4)} whileInView="enter">
					<Text mb="2">
						I am a web developer specializing <b>HTML</b>, <b>CSS</b>, <b>JS</b>,{' '}
						<b>React</b>.
					</Text>
				</SlideFade>
				<SlideFade offsetY="10px" transition={transition(0.5)} whileInView="enter">
					<Text mb="2"></Text>
					<Text>
						I am currently working as a <b>Front-end Engineer</b> in <b>QriousTech</b>.
					</Text>
				</SlideFade>
			</Box>

			<SlideFade offsetY="10px" transition={transition(0.2)} whileInView="enter">
				<Box flex="1" display={{ base: 'none', md: 'block' }}>
					<Lottie className="lottie-student" loop animationData={student} play />
				</Box>
			</SlideFade>
		</HStack>
	);
}

export default About;
