var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        use: 'babel-loader' 
      },
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}