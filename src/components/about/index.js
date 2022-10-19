import React, { useRef } from 'react';
import Lottie from 'react-lottie-player';
import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react';
import useOnScreen from '../../common/hooks/useOnScreen';
import Slide from './Slide';

import student from '../../static/lottie/student.json';
import COLOR from '../../common/constants/colors';

const mainDelay = 0.1;

function About() {
	const lottieRef = useRef(null);

	const isLottieVisible = useOnScreen(lottieRef);

	return (
		<HStack as="section" className="about" minH="100vh">
			<Box flex="1">
				<Slide delay={mainDelay + 0.1}>
					<Text as="div">
						Hi, my name is{' '}
						<Slide delay={mainDelay + 0.2}>
							<Text
								as="span"
								fontSize={{ base: '5xl', md: '6xl' }}
								display="block"
								color={COLOR.name}>
								Adarsh Shah.
							</Text>
						</Slide>
					</Text>
				</Slide>
				<Slide delay={mainDelay + 0.3}>
					<Heading mb="7" size="3xl" color={COLOR.whatIDo}>
						I build/break things on internet.
					</Heading>
				</Slide>

				<Slide delay={mainDelay + 0.4}>
					<Text mb="2" fontSize={{ sm: 'lg', md: 'lg' }}>
						I am a web developer specializing in <b>HTML</b>, <b>CSS</b>, <b>JS</b>,{' '}
						<b>React</b>.
					</Text>
				</Slide>

				<Slide delay={mainDelay + 0.5}>
					<Text mb="2" fontSize={{ sm: 'lg', md: 'lg' }}>
						I am currently working as a <b>Front-end Engineer</b> in <b>QriousTech</b>.
					</Text>
				</Slide>

				<Slide delay={mainDelay + 0.6}>
					<Link variant="outline" href="mailto:adarshshah01@gmail.com" mt="10" px="8">
						Get in touch
					</Link>
				</Slide>
			</Box>

			<Box flex="1" display={{ base: 'none', md: 'block' }} ref={lottieRef}>
				<Slide delay={mainDelay + 0.2}>
					<Lottie
						className="lottie-student"
						loop
						animationData={student}
						play={isLottieVisible}
					/>
				</Slide>
			</Box>
		</HStack>
	);
}

export default About;
