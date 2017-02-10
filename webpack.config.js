//var path = require('path')
// const webpack = require('webpack')
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
 module: {
   /*preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ],*/
   loaders: [
     {
       test: /bootstrap\/js\//,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ],
    // plugins: [
    //     new webpack.ProvidePlugin({
    //        $: 'jquery',
    //        jQuery: 'jquery'
    //    })
    // ]
  },
  resolve: {
   extensions: ['.js']
  }
}
