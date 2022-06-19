/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		providerImportSource: '@mdx-js/react',
	},
	reactStrictMode: true,
	experimental: {esmExternals: true},
	pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
	webpack(config, options) {
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: '@mdx-js/loader',
					/** @type {import('@mdx-js/loader').Options} */
					options: {/* jsxImportSource: …, otherOptions… */}
				}
			]
		})

		return config
	}
})

module.exports = withMDX()
