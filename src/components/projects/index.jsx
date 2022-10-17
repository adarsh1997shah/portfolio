import React from 'react';
import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useProjects } from './query';
import COLOR from '../../common/constants/colors';
import Project from './Project';
import { RepeatIcon, WarningTwoIcon } from '@chakra-ui/icons';

function Projects() {
	const { data: projects, refetch, isLoading } = useProjects();
	console.log(projects);

	return (
		<Stack as="section" className="projects" flexDirection="column" mb="16" gap="8">
			<Heading size="2xl" color={COLOR.subHeading} variant="section">
				Projects I'm proud of
			</Heading>

			{projects?.length > 0 ? (
				projects?.map((project, index) => (
					<Project key={project.id} project={project} index={index} />
				))
			) : (
				<HStack minHeight="32" justifyContent="center">
					{!isLoading && (
						<Text display="flex" alignItems="center" gap="1.5">
							<WarningTwoIcon color="red.500" /> Opps! Something went wrong. Please try
							refresing{' '}
							<Button
								variant="ghost"
								height="fit-content"
								p="0"
								minWidth="3"
								colorScheme="white"
								type="button"
								onClick={refetch}>
								<RepeatIcon color="blue.500" />
							</Button>
						</Text>
					)}
				</HStack>
			)}
		</Stack>
	);
}

export default Projects;
