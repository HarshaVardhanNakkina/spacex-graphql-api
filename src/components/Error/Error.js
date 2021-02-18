import React from 'react'

// STYLES
import { Flex, Text } from '@chakra-ui/react'

const Error = () => {
	return (
		<Flex justifyContent='center' wrap='wrap' align='center' gridGap='1.5rem' py='2rem'>
			<Text fontSize='2xl' color='red.500'>
				Something went wrong.
			</Text>
		</Flex>
	)
}

export default Error
