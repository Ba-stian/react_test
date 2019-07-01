const fromRoot = require('./helpers/from-root');
const webpack = require('webpack');

const { entry, optimization } = require('./common.config');
const { babel, css, images, fonts } = require('./rules');
const {
		clean,
		html,
		css: cssPlugin,
		optimizeCss,
} = require('./plugins');

const SERVER_URL = 'http://localhost:3000/';

module.exports = {
		entry,
		output: {
				path: fromRoot('build'),
				filename: 'js/[name].js',
				chunkFilename: 'js/[name].js',
				publicPath: '/'
		},
		optimization,
		module: {
				rules: [
						babel,
						css,
						fonts,
						images
				],
		},
		devServer: {
				host: 'localhost',
				port: 9000,
				historyApiFallback: true,
				proxy: {
						'/auth': {
								target: SERVER_URL,
								secure: false
						},
						'/collection': {
								target: SERVER_URL,
								secure: false
						},
						'/ws': {
								target: 'ws://localhost:3000/',
								ws: true
						}
				}
		},
		plugins: [
				clean,
				cssPlugin,
				optimizeCss,
				html,
				new webpack.HotModuleReplacementPlugin()
		],
};
