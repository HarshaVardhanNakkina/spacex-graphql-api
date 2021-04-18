import React, { Suspense, lazy } from 'react'

import { Router } from '@reach/router'

// COMPONENTS
const LaunchList = lazy(() => import('./components/LaunchList/LaunchList'))
const LaunchDetails = lazy(() => import('./components/LanuchDetails/LaunchDetails'))
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// STYLES
import { Container, Grid, GridItem, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react'
import Loading from './components/Loading/Loading'

export default function App() {
	const bg = useColorModeValue('white', 'gray.800')
	return (
		<Container maxW='100%' px='0'>
			<Grid templateRows='1fr auto 1fr'>
				<GridItem
					bg={bg}
					position={{ base: 'sticky', sm: 'sticky', md: 'unset' }}
					top='0'
					zIndex='2'
					boxShadow={['md', 'md', 'unset', 'unset']}
					px='0.5 rem'
				>
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
				<GridItem bg={bg} position={{ base: 'sticky', sm: 'sticky', md: 'unset' }} bottom='0' zIndex='2'>
					<Footer />
				</GridItem>
			</Grid>
		</Container>
	)
}
