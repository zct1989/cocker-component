/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const package = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  // 加载器
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~': resolve('src')
    }
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${package.version}'`
    }),
    new VueLoaderPlugin()
  ]
};