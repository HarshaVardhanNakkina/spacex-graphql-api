import React from 'react'
import LazyLoad from 'react-lazyload'
import { Image } from '@chakra-ui/react'

const LazyLoadImg = ({ src, alt }) => {
	return (
		<LazyLoad
			height='100%'
			style={{
				borderRadius: '.5rem',
				height: '100%',
				width: '100%'
			}}
			once
		>
			<Image src={src} width='100%' height='100%' loading='lazy' alt={alt} borderRadius='.5rem' objectFit='cover' />
		</LazyLoad>
	)
}

export default LazyLoadImg
