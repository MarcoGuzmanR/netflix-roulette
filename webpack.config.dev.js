const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 3000
  }
});