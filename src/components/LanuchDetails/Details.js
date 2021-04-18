import React from 'react'

// COMPONENTS
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg'

// STYLES
import {
	AspectRatio,
	Box,
	Container,
	Divider,
	Grid,
	GridItem,
	Heading,
	HStack,
	Link,
	Spacer,
	Stack,
	Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Details = ({ launch }) => {
	return (
		<Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(12, 1fr)']} gap='1rem'>
			<GridItem colStart={[1, null, 1]} colSpan={[null, null, 4]}>
				<Box maxW='100%' boxShadow='md' borderRadius='0.5rem'>
					<AspectRatio ratio={{ base: 4 / 3, md: 1 }}>
						<LazyLoadImg
							src={launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : launch.links.mission_patch}
							alt={launch.mission_name}
						/>
					</AspectRatio>
				</Box>
			</GridItem>
			<GridItem colStart={[1, null, 5]} colSpan={[null, null, 8]}>
				<Container p='1rem' maxW='100%' border='1px' boxShadow='md' borderRadius='.5rem'>
					<Stack direction='column' spacing='1rem'>
						<Box>
							<Heading>{launch.mission_name}</Heading>
							<Text color='gray.600' fontSize='md'>
								🚀 {launch.rocket.rocket_name} | {new Date(launch.launch_date_utc).toLocaleString()}
							</Text>
						</Box>
						<Box maxW='xl'>
							<Text>{launch.details}</Text>
						</Box>
						<Divider />
						<HStack alignItems='center'>
							<Text color='gray.600' fontWeight='bold'>
								Launch Site
							</Text>
							<Spacer />
							<Text>{launch.launch_site.site_name_long}</Text>
						</HStack>
						<Divider />
						<HStack alignItems='center'>
							<Text color='gray.600' fontWeight='bold'>
								Article
							</Text>
							<Spacer />
							<Link href={launch.links.article_link} isExternal>
								Article Link <ExternalLinkIcon />
							</Link>
						</HStack>
						<Divider />
						<HStack>
							<Text color='gray.600' fontWeight='bold'>
								Video
							</Text>
							<Spacer />
							<Link href={launch.links.video_link} isExternal>
								Video <ExternalLinkIcon />
							</Link>
						</HStack>
						<Divider />
						<Stack>
							<Text color='gray.600' fontWeight='bold'>
								Pictures
							</Text>
							<Grid
								templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
								autoRows='200px'
								gap='1rem'
								autoFlow='dense'
							>
								{launch.links.flickr_images.map(img => (
									<AspectRatio ratio={4 / 3} key={img}>
										<LazyLoadImg src={img} alt={launch.mission_name} />
									</AspectRatio>
								))}
							</Grid>
						</Stack>
					</Stack>
				</Container>
			</GridItem>
		</Grid>
	)
}

export default Details
