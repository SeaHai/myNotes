# js 一些小的思考

[TOC]


## 新浪微博分享

    分享链接为 <http://service.weibo.com/share/share.php>
    参数
      * url window.location.href
      * title 可以指定，为空则使用网页title
      * pic 可以指定，为空则智能提取网页图片

## 匿名函数执行

定义匿名函数
```js
function(){}
```

匿名函数执行
```js
(function(){})()
!function(){}()
+function(){}()
-function(){}()
~function(){}()
```

参考链接：[js执行匿名函数](https://segmentfault.com/q/1010000008422637)
