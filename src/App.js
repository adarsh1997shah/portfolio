import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './common/components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/projects';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Container mb={{ xl: '32' }}>
				<Box className="content">
					<About />
					<Projects />
					<Contact />
				</Box>
			</Container>
			<Footer />
		</>
	);
}

export default App;
