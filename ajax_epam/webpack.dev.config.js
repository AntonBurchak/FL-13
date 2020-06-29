const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'	
}
const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
    devServer: {
		port: 8085,
		hot: true,
		overlay: {
			warnings: true,
			errors: true
		}
    },
    	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader' ]
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
           {
				test: /\.(png|jpg|gif|svg|webp)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}images/`,
				}
			},
	        {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: `${PATHS.assets}fonts/`,
                    }
            }
		]
	},
	
	plugins: []
})

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig)
})


