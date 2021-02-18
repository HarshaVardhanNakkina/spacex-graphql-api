import React from 'react'

// STYLES
import { Box, Flex, Spinner } from '@chakra-ui/react'

const Loading = () => {
	return (
		<Flex justifyContent='center' wrap='wrap' align='center' gridGap='1.5rem' py='2rem'>
			<Box textAlign='center'>
				<Spinner size='xl' />
			</Box>
		</Flex>
	)
}

export default Loading
