var webpack = require('webpack')
var license = require('./prebuild.js')
module.exports = {
  context: __dirname,
  entry: {
    next: './src/nextai.js',
    'nextai.min': './src/nextai.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.BannerPlugin(license())
  ]
}