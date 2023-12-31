const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const commonConfig = require('./webpack.common');
const devConfig = {
	mode: 'development',
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	experiments: { outputModule: false },
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				marketing: 'marketing@http://localhost:8081/remoteEntry.js',
				sales: 'sales@http://localhost:4200/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
