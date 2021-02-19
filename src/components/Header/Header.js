import React from 'react'

import { Link } from '@reach/router'

// STYLES
import { Box, Heading, HStack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Box as='header' p={{ base: '.5rem', lg: '1rem' }} textAlign='center'>
			<HStack justifyContent={{ base: 'space-between', md: 'center' }} alignItems='baseline'>
				<Link to='/'>
					<Heading as='h1'>SpaceX Launches</Heading>
				</Link>
				{colorMode === 'dark' ? (
					<SunIcon w={6} h={6} onClick={toggleColorMode} cursor='pointer' aria-label='Theme Switcher' />
				) : (
					<MoonIcon w={6} h={6} onClick={toggleColorMode} cursor='pointer' aria-label='Theme Switcher' />
				)}
			</HStack>
		</Box>
	)
}

export default Header
