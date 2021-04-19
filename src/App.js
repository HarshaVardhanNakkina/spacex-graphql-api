import React, { Suspense, lazy, useState } from 'react'

import { Router } from '@reach/router'

// COMPONENTS
const LaunchList = lazy(() => import('./components/LaunchList/LaunchList'))
const LaunchDetails = lazy(() => import('./components/LaunchDetails/LaunchDetails'))
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import ReactPaginate from 'react-paginate'

// STYLES
import './App.css'
import { Container, Flex, Grid, GridItem, HStack, Image, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function App() {
	const [pageNumber, setPageNumber] = useState(0)

	const bg = useColorModeValue('white', 'gray.800')
	const { colorMode } = useColorMode()

	const perPage = 8
	const totalPages = 109
	const pageCount = Math.ceil(totalPages / perPage)
	const pageClassName = colorMode === 'light' ? 'pagination_container__li-dark' : 'pagination_container__li-light'

	const handlePageChange = currentPage => {
		setPageNumber(currentPage?.selected ?? 1)
	}
	return (
		<Container maxW='100%' px='0'>
			<Grid templateRows='1fr auto 1fr 1fr' alignItems='center'>
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
								<LaunchList path='/' pageNumber={pageNumber} perPage={perPage} />
								<LaunchDetails path='/launch/:launchID' />
							</Router>
						</Suspense>
					</Container>
				</GridItem>
				<GridItem bg={bg} position={{ base: 'sticky', sm: 'sticky', md: 'unset' }} bottom='0' zIndex='2' py='1rem'>
					<ReactPaginate
						containerClassName={'pagination_container'}
						pageLinkClassName={`pagination_container__li ${pageClassName}`}
						previousLinkClassName={`pagination_container__li ${pageClassName}`}
						nextLinkClassName={`pagination_container__li ${pageClassName}`}
						activeLinkClassName={`${pageClassName}-active`}
						previousLabel={'Prev'}
						nextLabel={'Next'}
						initialPage={pageNumber}
						pageCount={pageCount}
						onPageChange={handlePageChange}
						pageRangeDisplayed={2}
						marginPagesDisplayed={1}
					/>
				</GridItem>
				<GridItem>
					<Footer />
				</GridItem>
			</Grid>
		</Container>
	)
}
