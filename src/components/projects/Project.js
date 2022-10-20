import React from 'react';
import {
	Box,
	Heading,
	Image,
	Skeleton,
	UnorderedList,
	ListItem,
	Text,
	Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { capitalizeFirstLetter, isOdd, replaceHiphenWithSpace } from '../../utils';
import COLOR from '../../common/constants/colors';
import { projectVariants } from './utils/animationVariants';

function Project({ project, index }) {
	const { description, name, topics, homepage } = project;

	return (
		<Box className="projects-wrapper">
			<Box as="article" display="grid" gridTemplateColumns="repeat(10, 1fr)" mb="8">
				<Image
					fallback={
						<Skeleton
							gridColumn={{ base: '1/-1', md: isOdd(index) ? '6/11' : '1/6' }}
							gridRow="1/2"
							borderRadius="lg"
						/>
					}
					as={motion.img}
					variants={projectVariants(isOdd(index))}
					display={{ base: 'none', md: 'block' }}
					borderRadius="lg"
					gridColumn={{ base: '1/-1', md: isOdd(index) ? '6/11' : '1/6' }}
					objectFit="cover"
					w="100%"
					src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
					gridRow="1/2"
					boxShadow="md"
				/>

				<Box
					className="text"
					as={motion.div}
					gridColumn={{ base: '1/-1', md: isOdd(index) ? '1/7' : '5/11' }}
					gridRow="1/2"
					zIndex="2"
					textAlign={{ base: 'left', md: isOdd(index) ? 'left' : 'right' }}
					variants={projectVariants(!isOdd(index))}>
					<Heading size="lg" color={COLOR.projectTitle}>
						{capitalizeFirstLetter(replaceHiphenWithSpace(name))}
					</Heading>

					<Box p="4" my="4" borderRadius="base" bgColor="chakra-project-text-bg">
						<Text>{description}</Text>
						<Text>
							You can checkout live{' '}
							<Link
								color={COLOR.projectLink}
								href={homepage}
								target="_blank"
								textDecoration="underline">
								here
							</Link>
							.
						</Text>
					</Box>

					<Heading size="md" mb="1">
						Technologies used include:
					</Heading>
					<UnorderedList
						styleType="none"
						m="0"
						display="flex"
						flexWrap="wrap"
						columnGap="2"
						justifyContent={{
							base: 'flex-start',
							md: isOdd(index) ? 'flex-start' : 'flex-end',
						}}>
						{topics.map((topic) => (
							<ListItem key={topic}>{topic}</ListItem>
						))}
					</UnorderedList>
				</Box>
			</Box>
		</Box>
	);
}

export default Project;
