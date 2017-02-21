# webpack 配置

[TOC]

## package.json

```bash
    "dev": "webpack  --profile --progress --colors --display-error-details --watch",
    "dev-server": "webpack-dev-server --profile --progress --colors --display-error-details",
    "build": "webpack  --profile --progress --colors --display-error-details"
```

>* --profile 输出性能数据，可以看到每一步的耗时
* --progress 输出打包进度
* --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤 
* --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
* --display-error-details 查看查找过程，方便出错时能查阅更详尽的信息
* --watch 实时监控，保存后就打包
* --config XXX.js 使用另一份配置文件来打包

## 不同环境不同配置

* 区分当前运行模式
```js
var currentTarget = process.env.npm_lifecycle_event;
```

* 根据不同模式，改变变量值，根据变量值修改配置
```js
var debug, // 是否是调试
    devServer, // 是否是热更新模式
    minimize; // 是否需要压缩
if (currentTarget == "build") { // 发布模式
  debug = false, devServer = false, minimize = true;
} else if (currentTarget == "dev") { // 开发模式
  debug = true, devServer = false, minimize = false;
} else if (currentTarget == "dev-server") { // 热更新模式
  debug = true, devServer = true, minimize = false;
}
```

## webpack.config.js

### 定义目录

```js
var PATHS = {
  // 输出目录
  path:path.resolve(__dirname,debug?'_build/dev':'_bulid/dist'),
  
  // 发布目录
  publicPath:this.path,
  
  // 插件目录
  pluginsPath:path.resolve(__dirname,'src/plugins/'),
  
  // 源代码目录
  srcPath:path.resolve(__dirname,'src')
}
```

### entry 入口

```js
entry:{
  index:path.resolve(PATHS.srcPath,'index.js')
}
```

##### output 输出

```js
output:{
  // 输出目录
  path: PATHS.path,

  // 发布后，资源的引用目录
  publicPath: PATHS.publicPath,

  // 推荐发布模式使用版本号，其他模式无需使用，热更新模式不支持‘chunkhash’，但是支持‘hash’

  // 文件名称
  filename: !minimize ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',
  
  // 按需加载模块时输出的文件名称
  chunkFilename: !minimize ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'
},
```

### resolve 配置别名

```js
//有些时候想省略文件后缀，可用以下方式
resolve: {
  root:path.resolve(__dirname,'./src/'), // 从哪里查找文件
  extensions: ['', '.vue', '.js', '.css'], // 哪些格式文件后缀可以省略
  alias: { // 配置别名，可用简单名称代替一长串
    'src':PATHS.srcPath,
    'plugins':PATHS.pluginsPath,
    'components':path.resolve(PATHS.srcPath,'components')
  }
}
```

### module (loaders)

> 可定义处理各种文件的loaders

    特殊loader
      * postcss-loader css3属性添加前缀
      * babel es6转es5
          "babel-core": "^6.14.0",
          "babel-loader": "^6.2.5",
          "babel-plugin-transform-runtime": "^6.15.0",
          "babel-preset-es2015": "^6.14.0",
          "babel-runtime": "^6.11.6",
      * expose-loader 将变量设为全局
      * file-loader url-loader 处理图片或文字
      * node-sass sass-loader sass预处理器
      
      * extract-text-webpack-plugin 独立出css文件
      * html-webpack-plugin 可由模板html生成html文件
      * transfer-webpack-plugin copy文件到指定目录

> .css

    + style标签形式
      {
        test: /\.css$/,
        loader: ’style!css!postcss‘ // 从后往前处理，后者的输出是前者的输入
      }
      
    + 提取到独立文件
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss'),
        exclude: /node_modules/  //不包含的文件目录 include 为包含的目录
      }
      在plugins中添加
      new ExtractTextPlugin("css/[name].css", { allChunks: true })
      有多少入口，就打包成几个css；
      如果页面按需加载，则要加上 allChunks: true ，否则路由切换后需要的css文件不会打包，也不会以style形式出现

> .scss

先安装 node-sass sass-loader

```js
{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!sass'),
  exclude: /node_modules/,
}
```

> .js 或 jsx语法

```js  
{
  test: /\.jsx?$/,
  loader: 'babel',
  query: {
    cacheDirectory: './webpack_cache/', // 缓存
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  exclude: /node_modules/, // 此文件夹下不处理
}
```

> 提到全局

```js
{
  test: /jquery\.js$/,
  loader: 'expose?jQuery!expose?$' // jQuery和$都表示jquery
}
```

> 处理图片

```js
{
  test: /\.(gif|png|ico|jpe?g)$/,
  loader: 'url',
  query:{
    /*
     *  limit=10000 ： 10kb
     *  图片大小小于10kb 采用内联的形式，否则输出图片
     * */
    limit: 10000,
    name: '/images/[name]-[hash:8].[ext]'
  }
}
```
  
> 处理字体

```js
{
  test: /\.(eot|woff|woff2|ttf|svg)\??.*$/, // 注意：\??.* 匹配字体的版本号
  loader: 'url',
  query: {
    limit: 5000,
    name: '/fonts/[name]-[hash:8].[ext]'
  }
}
```

### plugins 配置要使用的插件

>提取css到独立文件

```js   
new ExtractTextPlugin("css/[name].css", { allChunks: true }),
```

> 打包公共文件

```js 
new webpack.optimize.CommonsChunkPlugin("common", "" + (!minimize ? 'js/[name].js' : "js/[name]-[chunkhash:8].js"), Infinity),
```

> 根据模板插入css/js等生成最终HTML

```js
new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
  filename: path.resolve(__dirname,'index.html'), //生成的html存放路径，相对于 path
  'template': path.resolve(__dirname, 'src/index.orig.html'), //html模板路径
  favicon: 'src/images/favicon.ico',

  // 以下部分可在发布模式下使用
  hash: true, //为静态资源生成hash值
  minify: { //压缩HTML文件
    removeComments: true, //移除HTML中的注释
    collapseWhitespace: false //删除空白符与换行符,true表示删除
  }
})
```

> copy 文件到指定目录

```js
new TransferWebpackPlugin([
  {
    from:PATHS.pluginsPath,
    to:'plugins'
  }
])
```

> 代码丑化，去掉空格等，可在发布模式下使用

```js
new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  output: {
    ascii_only: true
  },
  comments: false
})
```

### devtool 

```js
devtool:debug?'eval-source-map':'#eval'
```

##### vue

```js
vue: {
  loaders: {
    css: ExtractTextPlugin.extract('css'),
    html: 'html-loader'
  }
},
```

## 热更新 webpack-dev-server

```js
devServer:{
  contentBase:'', // 服务器目录，默认与webpack.config.js同级
  port:9090,  // 端口号
  host:'localhost',
  hot:true // 热更新
}  
```
```js   
// 热替换模式
if(devServer){
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.entry.index.unshift('webpack-dev-server/client?http://' +
  config.devServer.host + ':' +
  config.devServer.port);
  config.entry.index.unshift('webpack/hot/only-dev-server');
}

/*
* 注意：webpack-dev-server只会在内存中更新，并不会直接打包，
* 所以使用时需同时运行开发模式和热更新模式
 */
```