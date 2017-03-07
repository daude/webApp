//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.js']
    }
}
