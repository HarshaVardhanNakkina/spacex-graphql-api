import React from 'react'

import { Router, Link } from '@reach/router'

// COMPONENTS
import LaunchList from './components/LaunchList/LaunchList'
import LaunchDetails from './components/LanuchDetails/LaunchDetails'

// STYLES
import { Box, Container, Grid, GridItem, Heading, HStack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Container maxW='100%'>
			<Grid templateRows='1fr auto'>
				<GridItem>
					<Box as='header' p={{ base: '.5rem', lg: '1rem' }} textAlign='center'>
						<HStack justifyContent={{ base: 'space-between', md: 'center' }} alignItems='baseline'>
							<Link to='/'>
								<Heading as='h1'>SpaceX Launches</Heading>
							</Link>
							{colorMode === 'dark' ? (
								<SunIcon w={6} h={6} onClick={toggleColorMode} />
							) : (
								<MoonIcon w={6} h={6} onClick={toggleColorMode} />
							)}
						</HStack>
					</Box>
				</GridItem>
				<GridItem>
					<Container maxW='100%' p={{ base: '.5rem', lg: '1rem' }}>
						<Router>
							<LaunchList path='/' />
							<LaunchDetails path='/launch/:launchID' />
						</Router>
					</Container>
				</GridItem>
			</Grid>
		</Container>
	)
}
