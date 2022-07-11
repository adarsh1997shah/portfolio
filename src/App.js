import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from './common/components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<Container>
			<Navbar />
			<About />
			<Contact />
		</Container>
	);
}

export default App;
