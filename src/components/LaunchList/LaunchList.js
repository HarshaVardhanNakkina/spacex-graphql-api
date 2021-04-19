import React from 'react'

// STYLES
import { Flex } from '@chakra-ui/react'

// GRAPHQL STUFF
import { usePastLaunchesListQuery } from '../../gql/graphql'

// COMPONENTS
import Launch from './Launch'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

const LaunchList = ({ pageNumber, perPage: limit }) => {
	const offset = pageNumber * limit
	const { loading, data, error } = usePastLaunchesListQuery({
		variables: {
			limit,
			offset
		}
	})

	let component = null
	if (loading) component = <Loading />
	else if (error) component = <Error message={error.message + '.'} />
	else {
		component = (
			<Flex justifyContent='center' wrap='wrap' align='flex-start' gridGap='1.5rem' py={{ base: '.5rem', lg: '1rem' }}>
				{data.launchesPast.map(launch => (
					<Launch launch={launch} key={launch.id} />
				))}
			</Flex>
		)
	}
	return component
}

export default LaunchList
