import React from 'react';
import { Heading, HStack, Link, Spinner, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useProjects } from './query';
import COLOR from '../../common/constants/colors';
import Project from './Project';
import Retry from './Retry';

function Projects() {
	const { data: projects, refetch, isLoading, error } = useProjects();

	return (
		<Stack
			as="section"
			className="projects"
			flexDirection="column"
			mb={{ md: '16' }}
			gap={{ md: '8' }}>
			<Heading
				size={{ base: 'xl', md: '2xl' }}
				color={COLOR.subHeading}
				variant="section">
				Projects I'm proud of
			</Heading>

			{projects?.length > 0 ? (
				projects?.map((project, index) => (
					<motion.ul
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						key={project.id}>
						<Project project={project} index={index} />
					</motion.ul>
				))
			) : (
				<HStack minHeight="32" justifyContent="center">
					{isLoading && <Spinner />}

					{projects?.length === 0 && (
						<Text>
							You currenlty don't have any projects to showcase. Start adding them now on{' '}
							<Link
								color={COLOR.projectLink}
								href="https://github.com"
								target="_blank"
								textDecoration="underline">
								GitHub
							</Link>
							.
						</Text>
					)}

					{error && <Retry isLoading={isLoading} refetch={refetch} />}
				</HStack>
			)}
		</Stack>
	);
}

export default Projects;
