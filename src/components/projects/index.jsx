import React from 'react';
import {
	Box,
	Heading,
	Stack,
	Image,
	Skeleton,
	UnorderedList,
	ListItem,
	Text,
} from '@chakra-ui/react';
import COLOR from '../../common/constants/colors';
import { useProjects } from './query';

function Projects() {
	const projects = useProjects();

	return (
		<Stack as="section" className="projects" flexDirection="column" mb="16" gap="5">
			<Heading size="2xl" color={COLOR.subHeading} variant="section">
				Projects I'm proud of
			</Heading>

			<Box className="projects-wrapper">
				<Box as="article" display="grid" gridTemplateColumns="repeat(10, 1fr)">
					<Image
						fallback={
							<Skeleton
								gridColumn={{ base: '1/-1', md: '1/6' }}
								gridRow="1/2"
								borderRadius="lg"
							/>
						}
						display={{ base: 'none', md: 'block' }}
						borderRadius="lg"
						gridColumn={{ base: '1/-1', md: '1/6' }}
						objectFit="cover"
						w="100%"
						src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
						gridRow="1/2"
					/>

					<Box
						className="text"
						gridColumn={{ base: '1/-1', md: '5/11' }}
						gridRow="1/2"
						zIndex="2"
						textAlign={{ base: 'left', md: 'right' }}>
						<Heading size="md">Latest Project</Heading>
						<Heading size="lg" color="green.300">
							Wall of Wonder
						</Heading>
						<Text p="4" borderRadius="base" my="4" bgColor="chakra-project-text-bg">
							Description of the project. This should be fairly concise while also
							describing the key components that you developed or worked on. It can be as
							long as you need it to be but should at least be a few sentences long. Be
							sure to include specific links anywhere in the description.
						</Text>
						<Heading size="md">Technologies used include:</Heading>
						<UnorderedList
							styleType="none"
							m="0"
							display="flex"
							gap="2"
							justifyContent={{ base: 'flex-start', md: 'flex-end' }}>
							<ListItem>HTML</ListItem>
							<ListItem>CSS</ListItem>
							<ListItem>SVG</ListItem>
						</UnorderedList>
					</Box>
				</Box>
			</Box>
		</Stack>
	);
}

export default Projects;
