const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'	
}
const reactActive = true;
const buildWebpackConfig = merge(baseWebpackConfig, {
		mode: 'production',
		optimization: {
			// We no not want to minimize our code.
			minimize: true
		},
		module: {
		rules: [
			{
				test: /\.(scss|sass)$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: {path: 'src/assets/js/postcss.config.js'} }
					},
					'sass-loader'
				]

			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
				
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: {path: 'src/assets/js/postcss.config.js'} }
					},
				]

			},
	         {
				test: /\.(png|jpg|gif|svg|webp)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}images/`,
					publicPath: "../images/"
					// publicPath: reactActive ? `${PATHS.assets}images/` : "../images/"
				}
			},
	        {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: `${PATHS.assets}fonts/`,
                        publicPath: "../fonts/"
                    }
            }
		]
	},
	plugins: [
	    new MiniCssExtractPlugin({
    		filename: 'assets/css/[name].css',
    	}),
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig)
})

