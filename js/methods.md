# js 一些小方法

[TOC]

## 格式化时间数据

```js
Date.prototype.format = function(partten) {
  //如果未传入参数，则格式化为 y-m-d
  if (partten == null || partten == '') {
    partten = 'y-m-d';
  }
  var y = this.getFullYear();
  var m = this.getMonth() + 1;
  var d = this.getDate();
  var r = partten.replace(/y+/gi, y);
  r = r.replace(/m+/gi, (m < 10 ? "0" : "") + m);
  r = r.replace(/d+/gi, (d < 10 ? "0" : "") + d);
  return r;
}
new Date().format("y.m.d");//调用
```

## 判断是否在微信中

```js
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
}
```

## 深拷贝

```js
var deepCopy = function(o) {
  if (o instanceof Array) {
    var n = [];
    for (var i = 0; i < o.length; ++i) {
        n[i] = deepCopy(o[i]);
    }
    return n;

  } else if (o instanceof Object) {
    var n = {}
    for (var i in o) {
        n[i] = deepCopy(o[i]);
    }
    return n;
  } else {
    return o;
  }
}
```

## 字符串得到重复字符个数

```js
function duplicateCount(text) {
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
```

```js
// 每个字母重复出现的次数
var arr = 'abcdaabc';

var info = arr.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});

console.log(info); //{ a: 3, b: 2, c: 2, d: 1 }
```

```js
var temp = {};
'abcdaabc'.replace(/(\w{1})/g,function($1){
    temp[$1] ? temp[$1]+=1 : temp[$1] = 1;
    })
    console.log(temp) // {a: 3, b: 2, c: 2, d: 1}
```