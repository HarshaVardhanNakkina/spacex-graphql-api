import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// COMPONENTS
import App from './App'
import Fonts from './components/Fonts/Fonts'

const httpLink = new HttpLink({
	uri: 'https://api.spacex.land/graphql/'
})
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink
})

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false
}

const theme = extendTheme({
	config,
	fonts: {
		heading: 'Open Sans',
		body: 'Open Sans'
	},
	styles: {
		global: props => ({
			body: {
				color: mode('gray.800', 'whiteAlpha.900')(props),
				bg: mode('white', 'gray.800')(props)
			},
			'*': {
				boxSizing: 'border-box',
				margin: 0,
				padding: 0
			}
		})
	}
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<ChakraProvider theme={theme}>
			<Fonts />
			<App />
		</ChakraProvider>
	</ApolloProvider>,
	document.getElementById('App')
)

// if ('serviceWorker' in navigator) {
// 	console.log('Can Install Service Worker')
// 	window.addEventListener('load', function () {
// 		console.log('Window Load Event')
// 		navigator.serviceWorker.register(new URL('../serviceworker.js', import.meta.url))
// 	})
// }
