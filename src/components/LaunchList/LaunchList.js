import React from 'react'

// STYLES
import { Flex } from '@chakra-ui/react'

// GRAPHQL STUFF
import { usePastLaunchesListQuery } from '../../gql/graphql'

// COMPONENTS
import Launch from './Launch'
import Loading from '../Loading/Loading'

export default function LaunchList(params) {
	const { loading, data, error } = usePastLaunchesListQuery({
		variables: {
			limit: 10,
			offset: 10
		}
	})

	let component = null
	if (loading) component = <Loading />
	else if (error) component = <Error />
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
