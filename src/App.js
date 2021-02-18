import React from 'react'

import { Router, Link } from '@reach/router'

// COMPONENTS
import LaunchList from './components/LaunchList/LaunchList'
import LaunchDetails from './components/LanuchDetails/LaunchDetails'

// STYLES
import { Box, Container, Grid, GridItem, Heading, HStack, Image, Text, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import ReactIcon from '../public/react.svg'
import GraphqlIcon from '../public/graphql.svg'

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Container maxW='100%'>
			<Grid templateRows='1fr auto 1fr'>
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
					<Container as='main' maxW='100%' p={{ base: '.5rem', lg: '1rem' }}>
						<Router>
							<LaunchList path='/' />
							<LaunchDetails path='/launch/:launchID' />
						</Router>
					</Container>
				</GridItem>
				<GridItem>
					<HStack justifyContent='center' alignItems='center' h='100%' w='100%' p='.5rem'>
						<Text>Made With ❤️,</Text>
						<Image src={ReactIcon} w={6} h={6}></Image>
						<Text>, and, </Text>
						<Image src={GraphqlIcon} w={5} h={5}></Image>
					</HStack>
				</GridItem>
			</Grid>
		</Container>
	)
}
