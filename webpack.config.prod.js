'use strict';
const base = require('./webpack.config.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
  mode: "production",
  devtool: 'source-map',
  cache: false,
  
  output: {
    //打包上线时用这个路径，因个人项目的线上测试不是放在根目录而是放在'/build/'下
    publicPath: '/build/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      //支持css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css',
    }),
    new webpack.BannerPlugin('author: colorski, qq: 290518066, hash: [hash], file: [file]'),
  ]
})
