process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  entry: './index.ts',
  target: 'node',
  mode: "production",
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    whitelist: /\.css$/
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ]
});