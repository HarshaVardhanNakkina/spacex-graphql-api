import React from 'react'

// STYLES
import ReactIcon from '../../../public/react.svg'
import GraphqlIcon from '../../../public/graphql.svg'
import { HStack, Image, Text } from '@chakra-ui/react'

const Footer = () => {
	return (
		<HStack justifyContent='center' alignItems='center' h='100%' w='100%' p='.5rem'>
			<Text>Made With ❤️,</Text>
			<Image src={ReactIcon} w={6} h={6} alt='React.js Icon' />
			<Text>, and, </Text>
			<Image src={GraphqlIcon} w={5} h={5} alt='Graphql Icon' />
		</HStack>
	)
}

export default Footer
