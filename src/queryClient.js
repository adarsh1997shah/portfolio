import { QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from '.';
import { errorConfig } from './common/configs/toast';

// Create a client for react-query
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 20,
			refetchOnWindowFocus: false,
		},
	},
	queryCache: new QueryCache({
		onError: (error) => toast(errorConfig(error.message)),
	}),
});

export default queryClient;
