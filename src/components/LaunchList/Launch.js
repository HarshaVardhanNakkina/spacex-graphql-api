import React from 'react'

import { Link } from '@reach/router'

// STYLES
import { AspectRatio, Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import LazyLoad from 'react-lazyload'
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg'

const Launch = ({ launch }) => {
	const imgSrc = launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : launch.links.mission_patch
	return (
		<Box width='300px' borderRadius='.5rem' border='1px' boxShadow='md'>
			{/* <AspectRatio ratio={1}>
				<LazyLoadImg src={imgSrc} alt={launch.mission_name} />
			</AspectRatio> */}
			<Box p='1rem'>
				<Heading as='h2' fontSize='lg' py='.5rem'>
					{launch.mission_name}
				</Heading>
				<Text color='gray.600' fontSize='md'>
					🚀 {launch.rocket.rocket_name}
				</Text>
				<Text color='gray.600' fontSize='md'>
					{new Date(launch.launch_date_utc).toLocaleString()}
				</Text>
				<Link to={`launch/${launch.id}`}>
					<Button as='div' w='100%' mt='.5rem'>
						View Details &rarr;
					</Button>
				</Link>
			</Box>
		</Box>
	)
}

export default Launch
