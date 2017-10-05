//-----------------------------------
//
// Webpack config
//
//----------------------------------
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: '[name].pkgd.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
}
