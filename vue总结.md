[TOC]
#### vue 基础知识
> 以 2.0 为例
##### 修饰符

> 修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。例如，.prevent 装饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
 
    <form v-on:submit.prevent="onSubmit"></form>

##### 计算属性 computed

> 计算属性默认只是 getter ，不过在需要时你也可以提供一个 setter 

```js
computed: {
  fullName: {
    // getter
    get: function () {},
    // setter
    set: function (newValue) {}
  }
}

//在调用 vm.fullName = 'John Doe' 时， setter 会被调用
```

##### class绑定

> v-bind:class 指令可以与普通的 class 特性共存

```html
<div class="static" :class="media"></div>
```

##### 条件渲染 v-if or v-show

> 切换多个元素，用 < template > 元素当做包装元素

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

`注意：`

  ```
  * v-show 始终渲染并保存在DOM
  * v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。
  因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好
  ```

##### 列表渲染 v-for

* 语法：v-for="item in items"
* 添加索引：`1.0中是 (index,item)`
    * （item,index）in items  --数组
    * （item,key,index）in items --对象 （key -键 ，index -索引）
* 渲染多个元素块 < template > 标签
  ```html
  <ul>
    <template v-for="item in items">
      <li>{{ item.msg }}</li>
      <li class="divider"></li>
    </template>
  </ul>
  ```
* 组件 v-for
  ```html
  <!-- 自定义组件里不能自动传递数据，使用props -->
  <my-component
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index">
  </my-component>
  ```
 * 显示顺序
    * 用 v-for 正在更新已渲染过的元素列表时，它默认用 “就地复用” 策略，默认为索引$index `1.0中 track-by="$index"`
    * 给 Vue 一个提示以便它能跟踪每个节点身份，并且因此重新使用和重新排序现有元素，你需要为每项提供一个唯一 key 属性
    * 特殊的属性相当于 Vue 1.x 的 track-by ，但它像一个变量，所以你需要用 v-bind 来绑定动态值
    ```html
    <div v-for="item in items" :key="item.id"></div>
    ```
 * 排序/过滤
 
    创建计算的属性返回过滤或排序的数组 `1.0中 使用 orderBy 'id'`
     
    ```html
     <div v-for="n in evenNumbers">{{ n }}></div>
    ```

    ```js
    data: {
      numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
    ```
    
##### 表单控件绑定

> 对于单选按钮，勾选框及选择列表选项， v-model 绑定的 value 通常是静态字符串（对于勾选框是逻辑值）

```
修饰符

* .lazy 

    v-model 在 input 事件中同步输入框的值与数据，修饰符 lazy 转变为在 change 事件中同步 
  
* .number

      自动将用户输入值转为Number类型（如果原值的转换结果为 NaN 则返回原值）
      
* .trim

      自动过滤用户输入的首尾空格
```

##### 数据传递

> `1.0 中 prop传递的数据默认为单向传递，但可以添加 .sync 变为双向传递`

* 父组件可以使用 props 给子组件传递数据
* 子组件向父组件传递数据 自定义事件
    * 使用 $on(eventName) 监听事件
    * 使用 $emit(eventName) 触发事件
* 非父子组件通信
  ```js
  // 使用一个空的 Vue 实例作为中央事件总线 
  var bus = new Vue()

  // 触发组件 A 中的事件
  bus.$emit('id-selected', 1)

  // 在组件 B 创建的钩子中监听事件
  bus.$on('id-selected', function (id) {
      // ...
  })
  ```

##### 自定义指令

* 全局注册
  ```js
  // 注册一个全局自定义指令 v-focus
  Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })
  ```

* 局部注册
  ```js
  directives: {
    focus: {
      // 指令的定义---
    }
  }
  ```

#### vue 2.0 

##### 变化检测

> Vue 不允许动态地将新的顶级响应属性添加到已经创建的实例上。

*  Vue.set(object, key, value) 
*  this.$set(this.someObject,'b',2)
*  向已有对象添加属性 
  ```js
  this.someObject = Object.assign({},this.someObject, { a: 1, b: 2 })
  ```

#### 注册复用组件

```js
import component from './component/' //加载公共组件
Object.keys(component).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, component[key])
})

// 使用时
<v-Footer><\/v-Footer>
```

#### 注册过滤器

```js
import * as filters from './filters/'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
```

