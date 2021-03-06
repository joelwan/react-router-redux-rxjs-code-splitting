const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '../src'),

  entry: {
    app: './entry.jsx'
  },

  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '../src'),
      'node_modules'
    ],
  },
  
  plugins: [
    new LodashModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.template.html'
    })
  ]
}
