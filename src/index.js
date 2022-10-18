import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import theme from './theme';

import './theme/styles.css';

export const { ToastContainer, toast } = createStandaloneToast({ theme });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<ToastContainer />
				<App />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
