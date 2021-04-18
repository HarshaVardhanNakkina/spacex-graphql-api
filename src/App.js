import React, { Suspense, lazy } from 'react'

import { Router } from '@reach/router'

// COMPONENTS
const LaunchList = lazy(() => import('./components/LaunchList/LaunchList'))
const LaunchDetails = lazy(() => import('./components/LanuchDetails/LaunchDetails'))
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// STYLES
import { Container, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react'
import Loading from './components/Loading/Loading'

export default function App() {
	return (
		<Container maxW='100%'>
			<Grid templateRows='1fr auto 1fr'>
				<GridItem>
					<Header />
				</GridItem>
				<GridItem>
					<Container as='main' maxW='100%' p={{ base: '.5rem', lg: '1rem' }}>
						<Suspense fallback={<Loading />}>
							<Router>
								<LaunchList path='/' />
								<LaunchDetails path='/launch/:launchID' />
							</Router>
						</Suspense>
					</Container>
				</GridItem>
				<GridItem>
					<Footer />
				</GridItem>
			</Grid>
		</Container>
	)
}
