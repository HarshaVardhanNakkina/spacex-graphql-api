import React from 'react'

import { Router } from '@reach/router'

// COMPONENTS
import LaunchList from './components/LaunchList/LaunchList'
import LaunchDetails from './components/LanuchDetails/LaunchDetails'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// STYLES
import { Container, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react'

export default function App() {
	return (
		<Container maxW='100%'>
			<Grid templateRows='1fr auto 1fr'>
				<GridItem>
					<Header />
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
					<Footer />
				</GridItem>
			</Grid>
		</Container>
	)
}
