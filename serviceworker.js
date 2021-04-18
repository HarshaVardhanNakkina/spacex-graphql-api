console.log('Service Worker Registered')

const version = 'v1'

const assetsToCache = [
	'/',
	'/index.3fafb3e2.js',
	'/android-launchericon-512-512.c524f82a.png',
	'/firefox-marketplace-512-512.f123c09e.png',
	'/favicon.c8283def.ico',
	'/maskable_icon.62dd1194.png',
	'/LaunchList.3a597d7a.js',
	'/firefox-general-256-256.680b3d0b.png',
	'/LaunchDetails.2296d362.js',
	'/android-launchericon-192-192.d2524a2c.png',
	'android-launchericon-144-144.5aba44d7.png',
	'LaunchList.5b63792f.js',
	'/index.html',
	'/chrome-installprocess-128-128.354022b8.png',
	'/firefox-marketplace-128-128.aa49eb52.png',
	'/firefox-general-128-128.338394b3.png',
	'/android-launchericon-96-96.ef472fe1.png',
	'/firefox-general-90-90.09a3e344.png',
	'/manifest.webmanifest',
	'/android-launchericon-72-72.8e3d8067.png',
	'/firefox-general-64-64.9d17a1bc.png',
	'/*.svg',
	'index.542a857c.css',
	'/android-launchericon-48-48.f1845019.png',
	'/chrome-extensionmanagementpage-48-48.77d66824.png',
	'/firefox-general-48-48.ce0f8154.png',
	'/index.542a857c.css',
	'/firefox-general-32-32.34662ad7.png',
	'/chrome-favicon-16-16.4351bdf4.png',
	'/firefox-general-16-16.47efe923.png'
]

self.addEventListener('install', event => {
	console.log('Install Event')
	self.skipWaiting()

	event.waitUntil(
		caches
			.open(version + 'assetsToCache')
			.then(cache => cache.addAll(assetsToCache))
			.then(() => console.log('assets cached'))
	)
})

self.addEventListener('fetch', event => {
	console.log('Fetch Event')
	if (event.request.method === 'GET') {
		event.respondWith(
			fetch(event.request).catch(() => {
				return caches.match(event.request)
			})
		)
	}
})
