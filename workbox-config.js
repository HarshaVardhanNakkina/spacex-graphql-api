module.exports = {
	globDirectory: 'dist',
	globPatterns: ['**/*.{png,ico,svg,js,css,html,webmanifest}'],
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
	swDest: 'dist/sw.js',
	clientsClaim: true,
	skipWaiting: true
}
