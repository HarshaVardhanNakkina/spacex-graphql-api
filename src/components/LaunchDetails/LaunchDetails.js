import React from 'react'

// STYLES
import { useLaunchDetailsQuery } from '../../gql/graphql'

// COMPONENTS
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import Details from './Details'

export default function LaunchDetails(props) {
	const { loading, data, error } = useLaunchDetailsQuery({
		variables: {
			id: props.launchID
		}
	})
	let component = null
	if (loading) component = <Loading />
	else if (error) component = <Error message={error.message + '.'} />
	else component = <Details launch={data.launch} />

	return component
}
