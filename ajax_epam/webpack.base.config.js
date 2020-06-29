const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/',
	as2: path.join(__dirname, './dist/assets')
}

module.exports = {
		externals: {
		paths: PATHS
	},
	entry: {
	 	app: PATHS.src
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist,
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
      	new CopyWebpackPlugin([
			{ from: `${PATHS.src}/assets/images`, to: `${PATHS.assets}images`}
		])
	],
	
};