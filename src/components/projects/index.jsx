import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';

function Projects() {
	return (
		<Stack as="section" className="projects" flexDirection="column" mb="16">
			<Heading size="2xl" color="green.300" variant="section">
				Projects I'm proud of
			</Heading>
		</Stack>
	);
}

export default Projects;
