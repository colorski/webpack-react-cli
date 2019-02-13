The use of webpack@4 for react. It contains the basic config, some usefull plugins, and some points for optimization;
The use of react-router@4 - react-router-dom. 

## webpack.config.js
```
问题：
1.图片路径问题，用url-loader在子页面刷新时，图片路径错误，尝试file-loader？
2.在此基础上加如插件和其它优化的点

```
## Plugins


## Opatimization



## react-router@4.28.2


### 1.关于二级路径页面刷新404的问题

按照react-router@4的方式配置完路径后，在localhost:3030时刷新页面是正常显示的，可是当进入二级页面如localhost:3030/users时刷新页面会报错：Cannot GET /users。

有两种解决办法：

一种是使用HashRouter,即把BrowserRouter改成HashRouter。
但是这种方式的路径是这样的：http://localhost:3030/#/users

一种是修改webpack配置即可（注意现阶段只测试了开发环境）。
在devSever下增加：historyApiFallback: true,
在output下增加：publicPath: '/'
注意：记得配置完重启服务


### 2.关于不同页面层级导航选中效果

比如一个用户详情页，上级是用户列表页，再上级是用户总览页；当进入某个用户详情页事，让列表页和总览页都选中；
只要设计好路径即可。如：
总览页：/users
列表页：/users/list
详情页：/users/list/detail/:id
注意，在配置route的时候合理使用exact，像这样：

```
<Switch>
    <Route path='/' exact component={Home} />
    <Route path='/products' component={Product} />
    <Route path='/users/list' exact component={UserList} />
    <Route path='/users/list/detail/:userId' component={UserDetail} />
    <Route path='/users/add' component={UserAdd} />
    <Redirect to='/' />
</Switch>

```

