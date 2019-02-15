'use strict';
const webpack = require('webpack');
const path = require('path');
//const devMode = process.env.NODE_ENV !== 'production'  //这种判断不准确

const _port = 8888;

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //配置为开发环境（webpack@4必须）
  mode: "development",
  
  //配置入口文件信息
  entry: path.join(__dirname, '/src/index'),
  
  //配置输出文件信息
  output: {
    //输出文件的目标目录
    path: path.resolve(__dirname,'dist/'),
    //输出文件名
    filename: 'main_[hash].js',
    //引用输出文件时所用的基础URL
    publicPath: '/'
    //打包上线时用这个路径，因个人项目的线上不是放在根目录而是放在'/build/'下
    //publicPath: '/build/'
  },

  devServer: {
    contentBase: path.join(__dirname, "public/"),//开发服务运行时的文件根目录，index.html在哪路径就到哪，如："/public/"
    historyApiFallback: true,//spa不跳转,history模式的路由需要true
    host: 'localhost',
    compress: true,//是否启用gzip压缩
    open: true,//构建完成自动打开默认浏览器
    port: _port,

    hot: true
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
      //支持es2015和jsx
      {
        test:/(\.jsx|\.js)$/,
        exclude:/node_modules/,
        loader:"babel-loader",
        //下边这个query作为单独的属性写成一个对象，放到.babelrc文件里
        query: {
          presets: ['es2015','react']
        }
      },
      //支持css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      //支持图片(?limit=1024指：如果图片小于1k就会以dataUrl（base64编码）的形式写在脚本里，否则会在输出目录中拷贝一份图片，并以md5值命名，
      //引用图片的url也会自动改成相应的文件名)
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: 'url-loader?limit=1024&name=[name].[hash:7].[ext]&outputPath=img/'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('dist/*.*', {
        root: __dirname,
        verbose: true,
        dry: false
    }),
    new HtmlWebpackPlugin({
        filename: __dirname + "/dist/index.html",
        template: __dirname + "/public/index.html"
    }),
    new webpack.BannerPlugin('author: colorski, qq: 290518066, hash: [hash], file: [file]'),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    })
  ]
}
