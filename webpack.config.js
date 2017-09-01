const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/App.jsx';
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/static')
  },
  module: {
    rules: {
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: 'babel-request'
    }
  },
  // PLUGINS BELOW REDUCE BUNDLE SIZE FOR PRODUCTION
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
    }), //minify
    new webpack.optimize.AggressiveMergingPlugin()//Merging chunks
  ],
  devtool: 'cheap-module-eval-source-map'
}