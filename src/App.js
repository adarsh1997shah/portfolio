import React, { useEffect } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './common/components/Navbar';
import About from './components/about';
import Contact from './components/Contact';
import Projects from './components/projects';
import Footer from './components/Footer';

function App() {
	useEffect(() => {
		// Scrolling to top top when page refreshes for animation to work properly.
		window.history.scrollRestoration = 'manual';
	}, []);

	return (
		<Box className="ad-portfolio">
			<Navbar />
			<Container mb={{ xl: '32' }}>
				<Box className="content">
					<About />
					<Projects />
					<Contact />
				</Box>
			</Container>
			<Footer />
		</Box>
	);
}

export default App;
