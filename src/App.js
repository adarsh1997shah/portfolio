import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './common/components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<Container>
			<Navbar />
			<Box className="content">
				<About />
				<Contact />
			</Box>
		</Container>
	);
}

export default App;
