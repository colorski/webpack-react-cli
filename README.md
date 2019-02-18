The use of webpack@4 for react. It contains the basic config, some usefull plugins, and some points for optimization;
The use of react-router@4 - react-router-dom. 

## webpack.config.js
```
webpack.config.js

webpack.config.dev.js

webpack.config.prod.js

```
## Plugins

1.UglifyJsPlugin

2.HotModuleReplacementPlugin

3.BannerPlugin

4.html-webpack-plugin

5.clean-webpack-plugin

6.mini-css-extract-plugin

## Opatimization

1.Tree Shaking

## react-router@4.28.2

### 1.关于二级路径页面刷新404的问题

按照react-router@4的方式配置完路径后，在localhost:3030时刷新页面是正常显示的，可是当进入二级页面如localhost:3030/users时刷新页面会报错：Cannot GET /users。

有两种解决办法：

一种是使用HashRouter,即把BrowserRouter改成HashRouter。
但是这种方式的路径是这样的：http://localhost:3030/#/users

一种是修改webpack配置即可（注意现阶段只测试了开发环境）。
在devSever下增加：historyApiFallback: true,
在output下增加：publicPath: '/'
注意：记得配置完重启服务，可能还需要服务器端的配置


