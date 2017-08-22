const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 5000,
    stats: "minimal",
    hot: true
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: { loader: 'html-loader', options: { attrs: [':data-src'] } } },
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/ },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader', 'sass-loader'],
        // })),
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      // hash: true // hash after bundle.js
      template: 'src/index.html'
    }),
    new ExtractTextWebpackPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
};
