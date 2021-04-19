console.log('Service Worker Registered')

// const version = 'v1'

// const assetsToCache = [
// 	'/index.3fafb3e2.js',
// 	'/LaunchList.3a597d7a.js',
// 	'/LaunchDetails.2296d362.js',
// 	'/LaunchList.5b63792f.js',
// 	'/index.542a857c.css'
// ]

// self.addEventListener('install', event => {
// 	console.log('Install Event')
// 	// self.skipWaiting()

// 	event.waitUntil(
// 		caches
// 			.open(version + 'assetsToCache')
// 			.then(cache => cache.addAll(assetsToCache))
// 			.then(() => console.log('assets cached'))
// 	)
// })

// self.addEventListener('fetch', event => {
// 	console.log('Fetch Event')
// 	if (event.request.method === 'GET') {
// 		event.respondWith(
// 			fetch(event.request).catch(() => {
// 				return caches.match(event.request)
// 			})
// 		)
// 	}
// })
