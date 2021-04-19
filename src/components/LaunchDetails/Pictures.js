import React from 'react'
import { AspectRatio, Grid } from '@chakra-ui/layout'

// COMPONENTS
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg'

const Pictures = ({ pictures, missionName }) => {
	return (
		<Grid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' autoRows='200px' gap='1rem' autoFlow='dense'>
			{pictures?.map(img => (
				<AspectRatio ratio={4 / 3} key={img}>
					<LazyLoadImg src={img} alt={missionName} />
				</AspectRatio>
			))}
		</Grid>
	)
}

export default Pictures
