'use strict';
const webpack = require('webpack');
const base = require('./webpack.config.js');
const merge = require('webpack-merge');
const path = require('path');

const _port = 8888;

module.exports = merge(base, {
  mode: "development",
  devtool: 'eval-source-map',
  cache: true,
  
  output: {
    publicPath: '/'
  },

  devServer: {
    contentBase: path.join(__dirname, "public/"),//开发服务运行时的文件根目录，index.html在哪路径就到哪，如："/public/"
    historyApiFallback: true,//spa不跳转,history模式的路由需要true
    host: 'localhost',
    compress: true,//是否启用gzip压缩
    open: true,//构建完成自动打开默认浏览器
    port: _port,

    hot: true,
    // noInfo: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://120.26.206.170',
    //     secure: false, changeOrigin: true, debug: true
    //   }
    // }
  },

  optimization: {
    usedExports: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]

})
