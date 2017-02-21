# npm 切换来源

[TOC]

## 使用 nrm

### 安装
> npm install nrm -g

### 列出可使用的源
> nrm ls

```
* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - http://registry.npm.taobao.org/
  eu ----- http://registry.npmjs.eu/
  au ----- http://registry.npmjs.org.au/
  sl ----- http://npm.strongloop.com/
  nj ----- https://registry.nodejitsu.com/
```

`*` 表示当前使用源

### 切换源
> nrm use cnpm

### 增加源
> nrm add  registry url [home] 

### 删除源
> nrm del registry


参考文档：
[nrm 快速切换 NPM 源 （附带测速功能）](http://www.tuicool.com/articles/nYjqeu)