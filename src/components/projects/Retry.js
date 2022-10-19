import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { RepeatIcon, WarningTwoIcon } from '@chakra-ui/icons';

function Retry({ isLoading, refetch }) {
	return (
		<>
			{!isLoading && (
				<Text
					display="flex"
					alignItems="center"
					gap="1.5"
					flexDirection={{ base: 'column', md: 'row' }}>
					<WarningTwoIcon color="red.500" />
					<Box textAlign="center">
						Opps! Something went wrong. Please try refresing{' '}
						<Button
							variant="ghost"
							height="fit-content"
							p="0"
							minWidth="3"
							colorScheme="white"
							type="button"
							onClick={refetch}>
							<RepeatIcon color="blue.500" />.
						</Button>
					</Box>
				</Text>
			)}
		</>
	);
}

export default Retry;
