# sublime text 3 总结

[TOC]

## 插件

### Package Control

> ctrl + ` 打开命令行

    import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

> 手动安装

1、点击Preferences > Browse Packages菜单
2、进入打开的目录的上层目录，然后再进入Installed Packages/目录
3、下载 [Package Control.sublime-package](https://sublime.wbond.net/Package%20Control.sublime-package)并复制到Installed Packages/目录
4、重启Sublime Text。

### Emmet （快速编写 HTML/CSS 代码）

> 自动安装不成功，基本上都是PyV8库下载失败

* [Windows x32](https://pan.baidu.com/s/1Yqf2e)
* [Windows x64](https://pan.baidu.com/s/1pKuQmoj)
* [OSX 10.7+](https://pan.baidu.com/s/1bobBPuv)
* [Linux x32](https://pan.baidu.com/s/1ZCbqY)
* [Linux x64](https://pan.baidu.com/s/1nuidc3R)

下载完成后解压，文件夹重命名去除前缀 pyv8-
将文件夹拷贝到 Installed Packages/PyV8/下面
如果没有PyV8文件夹，自己手动建立一个
例如小指用的是Linux x64 Sublime Text 3,解压后得到文件夹 pyv8-linux64-p3重命名为linux64-p3

参考链接：[PyV8手动安装](http://www.qingzz.cn/sublimeText_Emmet_PyV8)

> 默认的h5模式未添加移动端自适应（viewport）和 使用 IE 最新版

  > Settings-User 添加

```json  
{
  "snippets": {
    "html": {
      "snippets":{
        "ua":"<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
        "viewport":"<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,minimal-ui\">"
      },
      "abbreviations": {
        "example": "<div class='example' title='Custom element example'>",
        "!":"html>(head>meta[charset=utf-8]+ua+viewport+title{document}+body)"
      }
    }
  }
}
```

+ snippets是指head头部的片段
+ addbreviations是body内的片段

### SideBarEnhancements (增强右键菜单)

### AutoFileName (自动查找文件路径)

### Color Highlighter (css颜色实时显示)

> Settings-User 添加

```json
{
  "ha_style": "filled",
  "icons": false,
  "file_exts": [".css", ".sass", ".scss", ".less", ".styl", ".html", ".js", ".sublime-settings", ".tmTheme", ".erb", ".haml", ".back", ".py", ".md" ,".vue"]
}
```

### ColorPicker (打开调色板)

> ctrl + shift + c 可能有冲突

### AdvancedNewFile (新建文件)

> ctrl + alt + n 在当前文件目录生成文件

  > Setting - User 添加

```json  
{
  "default_root": "current"
}
```

### BracketHighlighter (括号匹配)

> Setting - User 添加

```json
{
  "bracket_styles": {
    "default": {
      "icon": "dot",
      "color": "brackethighlighter.default",
      "style": "outline"      
    },
    "unmatched": {
        "icon": "question",
        "color": "brackethighlighter.unmatched",
        "style": "outline"
    },
    "curly": {
        "icon": "curly_bracket",
        "color": "brackethighlighter.curly",
        "style": "outline"
    },
    "round": {
        "icon": "round_bracket",
        "color": "brackethighlighter.round",
        "style": "outline"
    },
    "square": {
        "icon": "square_bracket",
        "color": "brackethighlighter.square",
        "style": "underline"
    },
    "angle": {
        "icon": "angle_bracket",
        "color": "brackethighlighter.angle",
        "style": "underline"
    },
    "tag": {
        "icon": "tag",
        // "endpoints": true,
        "color": "brackethighlighter.tag",
        "style": "outline"
    },
    "c_define": {
        "icon": "hash"
        // "color": "brackethighlighter.c_define",
        // "style": "underline"
    },
    "single_quote": {
        "icon": "single_quote",
        "color": "brackethighlighter.single_quote",
        "style": "outline"
    },
    "double_quote": {
        "icon": "double_quote",
        "color": "brackethighlighter.double_quote",
        "style": "outline"
    },
    "regex": {
        "icon": "regex",
        // "color": "brackethighlighter.quote",
        // "style": "underline"
    }
  }
}
```

### AlignTab (代码对齐)

> 快捷键（Key Bindings - User）中设置

```json
{
  "keys": ["super+alt+;"], "command": "align_tab",
  "args" : {
    "user_input" : ":/f"
  }
},
{
  "keys": ["super+alt+="], "command": "align_tab",
  "args" : {
    "user_input" : "=/f"
  }
},
{
  "keys": ["super+alt+."], "command": "align_tab",
  "args" : {
    "user_input" : "=>/f"
  }
}  
```

### Sublime Better Completion (代码提示)

> Settings-User 添加以下代码，将Settings-Default 中的false改为true，代表提示

```json
{
  "completion_active_list": {
    // build-in completions
    "css-properties": true,
    "gruntjs-plugins": true,
    "html": true,
    "lodash": true,
    "javascript": true,
    "jquery": true,
    "jquery-sq": true, // Single Quote
    "php": true,
    "phpci": true,
    "sql": true,
    "twitter-bootstrap": true,
    "twitter-bootstrap-less-variables": true,
    "twitter-bootstrap3": true,
    "underscorejs": true,
    "react": true,
    "my-angularjs": true,
    "my-glossary": true,
    "my-html": true,
    "my-javascript": true
  }
}
```

### DocBlockr (自动注释)

> 默认输入 /** Tab键即可生成函数方法的注释，可以在 Settings-User 中添加以下代码，增加作者和时间

```json
{
  "jsdocs_extra_tags":["@Author lhx","@DateTime {{date}}"]
}
```

### HTML/CSS/JS Prettify (代码格式化)

    注意：需要先安装node，并配置node安装路径(Set 'node' Path文件中)

    打开需要格式化的文件，快捷键 ctrl + shift + h

### MarkDown Preview / MarkDown Editing （编辑markdown）

> （Key Bindings - User）中设置快捷键，可在浏览器中预览MarkDown文件

```json
{ 
  "keys": ["alt+m"], "command": "markdown_preview", 
  "args": {
    "target": "browser", 
    "parser":"markdown"
  } 
},
```

## 用户设置 

> Settings - User

```json
{
  "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme", // 主题颜色
  "font_size": 12, // 字体大小
  "highlight_line": true, // 当前行高亮
  "ignored_packages":
  [
    "Markdown",
    "Vintage"
  ],
  "open_files_in_new_window": false, // 新文件在当前窗口打开
  "show_encoding": true, // 显示文件编码
  "tab_size": 2, // 缩进2字符
  "translate_tabs_to_spaces": true, // tab 替换为空格
  "word_wrap": true, // 一行显示补全，自动折行
  "save_on_focus_lost": true, // 窗口失去焦后立即保存文件
  "bold_folder_labels": true, // 侧栏文件夹加粗
}
```

## 快捷键设置

> Key Bingings - User 

```json
[
  { "keys": ["super+shift+b"], "command": "open_in_browser" }, // 在浏览器中打开文件
  { "keys": ["ctrl+k"], "command": "toggle_side_bar"}, // 切换侧边栏
  { "keys": ["alt+d"], "command": "goto_definition" }, // 快速找到函数定义位置
  { "keys": ["alt+m"], "command": "markdown_preview",  // 预览 Markdown 文件
    "args": {
      "target": "browser", 
      "parser":"markdown"
    } 
  },
  // 代码对齐
  {
    "keys": ["super+alt+;"], "command": "align_tab",
    "args" : {
      "user_input" : ":/f"
    }
  },
  {
    "keys": ["super+alt+="], "command": "align_tab",
    "args" : {
      "user_input" : "=/f"
    }
  },
  {
    "keys": ["super+alt+."], "command": "align_tab",
    "args" : {
      "user_input" : "=>/f"
    }
  }
]
```

## 常用快捷键

> 参考链接：[我常用的 16 个 Sublime Text 快捷键](http://blog.jobbole.com/82527/)
> ⌘ 表示 super/command键
> ⇧ 表示 shift

### 进入查找命令

> command/control + P

* `:` 输入行数找到对应行 （control + G）
* `@` 找到特定函数 （command/control + R）
* `#` 找到对应变量与块

### 选择

#### 选择一个选中项的下一个匹配项

| Mac    | Windows  |
| ------ | -------- |
| ⌘ + D  | ctrl + d |

#### 选择一个选中项的所有匹配项

| Mac          | Windows  |
| ------       | -------- |
| CTRL + ⌘ + G | alt + f3 |

#### 选择与光标关联的开始和结束标签

| Mac       | Windows          |
| ------    | --------         |
| ⌘ + ⇧ + K | ctrl + shift + ’ |

#### 选择容器内内容

| Mac      | Windows          |
| ------   | --------         |
| CTRL + D | ctrl + shift + a |

#### 选择括号内的内容

| Mac           | Windows      |
| ------        | --------     |
| ⌘ + ⇧ + Space | ctrl+shift+m |

### 移动行和文本

#### 上移或下移行

| Mac               | Windows               |
| ----              | -------               |
| CTRL + ⌘ + ↑ 或 ↓ | ctrl + shift + ↑ 或 ↓ |

#### 复制行或选中项

| Mac       | Windows          |
| ----      | -------          |
| ⌘ + ⇧ + D | ctrl + shift + d |

#### 增加和减少缩进

| Mac        | Windows       |
| ----       | -------       |
| ⌘ + [ 或 ] | ctrl + [ 或 ] |

### 剪切和删除

#### 剪切行或选中项

| Mac   | Windows  |
| ----  | -------  |
| ⌘ + X | ctrl + x |

#### 粘贴并保持缩进

| Mac       | Windows          |
| ----      | -------          |
| ⇧ + ⌘ + V | ctrl + shift + v |

#### 用标签包裹行或选中项

| Mac          | Windows         |
| ----         | -------         |
| CTRL + ⇧ + W | alt + shift + w |

#### 移除未闭合的容器元素

| Mac | Windows |
| ---- | ------- |
| ⌘ + ‘ | ctrl + shift + ; |

### 文本和数字操作

#### 计算数学表达式

| Mac       | Windows          |
| ----      | -------          |
| ⌘ + ⇧ + Y | ctrl + shift + y |

![计算表达式](http://ww4.sinaimg.cn/mw690/6941baebgw1eniigyz60zg20fk089js1.gif)

#### 递增和递减

`按住 ⇧ 将以10的步长改变数字, 不按住以1为步长`

| Mac                            | Windows                             |
| ----                           | -------                             |
| ⇧ + Alt + ↑ or ↓, Alt + ↑ or ↓ | alt + shift + ↑ 或 ↓，ctrl + ↑ 或 ↓ |

![递增和递减](http://ww4.sinaimg.cn/mw690/6941baebgw1eniigwnj1wg20fk089dha.gif)

#### 大写和小写

| Mac                  | Windows                     |
| ----                 | -------                     |
| ⌘ + K + U, ⌘ + K + L | ctrl + k + u ，ctrl + k + l |

## windows 快捷键精华版
```
Ctrl+Shift+P     ： 打开命令面板

Ctrl+P           ： 搜索项目中的文件

Ctrl+G           ： 跳转到第几行

Ctrl+W           ： 关闭当前打开文件

Ctrl+Shift+W     ： 关闭所有打开文件

Ctrl+Shift+V     ： 粘贴并格式化

Ctrl+D           ： 选择单词，重复可增加选择下一个相同的单词

Ctrl+L           ： 选择行，重复可依次增加选择下一行

Ctrl+Shift+L     ： 选择多行

Ctrl+Shift+Enter ： 在当前行前插入新行

Ctrl+X           ： 删除当前行

Ctrl+M           ： 跳转到对应括号

Ctrl+U           ： 软撤销，撤销光标位置

Ctrl+J           ： 选择标签内容

Ctrl+F           ： 查找内容

Ctrl+Shift+F     ： 查找并替换

Ctrl+H           ： 替换

Ctrl+R           ： 前往 method

Ctrl+N           ： 新建窗口

Ctrl+K+B         ： 开关侧栏

Ctrl+Shift+M     ： 选中当前括号内容，重复可选着括号本身

Ctrl+F2          ： 设置/删除标记

Ctrl+/           ： 注释当前行

Ctrl+Shift+/     ： 当前位置插入注释

Ctrl+Alt+/       ： 块注释，并Focus到首行，写注释说明用的

Ctrl+Shift+A     ： 选择当前标签前后，修改标签用的

F11              ： 全屏

Shift+F11        ： 全屏免打扰模式，只编辑当前文件

Alt+F3           ： 选择所有相同的词

Alt+.            ： 闭合标签

Alt+Shift+数字   ： 分屏显示

Alt+数字         ： 切换打开第N个文件

Shift+右键拖动   ： 光标多不，用来更改或插入列内容

鼠标的前进后退键可切换Tab文件

按Ctrl，依次点击或选取，可需要编辑的多个位置

按Ctrl+Shift+上下键，可替换行
```

### 选择类
```
Ctrl+D 选中光标所占的文本，继续操作则会选中下一个相同的文本。

Alt+F3 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑。举个栗子：快速选中并更改所有相同的变量名、函数名等。

Ctrl+L 选中整行，继续操作则继续选择下一行，效果和 Shift+↓ 效果一样。

Ctrl+Shift+L 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行。

Ctrl+Shift+M 选择括号内的内容（继续选择父括号）。举个栗子：快速选中删除函数中的代码，重写函数体代码或重写括号内里的内容。

Ctrl+M 光标移动至括号内结束或开始的位置。

Ctrl+Enter 在下一行插入新行。举个栗子：即使光标不在行尾，也能快速向下插入一行。

Ctrl+Shift+Enter 在上一行插入新行。举个栗子：即使光标不在行首，也能快速向上插入一行。

Ctrl+Shift+[ 选中代码，按下快捷键，折叠代码。

Ctrl+Shift+] 选中代码，按下快捷键，展开代码。

Ctrl+K+0 展开所有折叠代码。

Ctrl+← 向左单位性地移动光标，快速移动光标。

Ctrl+→ 向右单位性地移动光标，快速移动光标。

shift+↑ 向上选中多行。

shift+↓ 向下选中多行。

Shift+← 向左选中文本。

Shift+→ 向右选中文本。

Ctrl+Shift+← 向左单位性地选中文本。

Ctrl+Shift+→ 向右单位性地选中文本。

Ctrl+Shift+↑ 将光标所在行和上一行代码互换（将光标所在行插入到上一行之前）。

Ctrl+Shift+↓ 将光标所在行和下一行代码互换（将光标所在行插入到下一行之后）。

Ctrl+Alt+↑ 向上添加多行光标，可同时编辑多行。

Ctrl+Alt+↓ 向下添加多行光标，可同时编辑多行。
```

### 编辑类
```
Ctrl+J 合并选中的多行代码为一行。举个栗子：将多行格式的CSS属性合并为一行。

Ctrl+Shift+D 复制光标所在整行，插入到下一行。

Tab 向右缩进。

Shift+Tab 向左缩进。

Ctrl+K+K 从光标处开始删除代码至行尾。

Ctrl+Shift+K 删除整行。

Ctrl+/ 注释单行。

Ctrl+Shift+/ 注释多行。

Ctrl+K+U 转换大写。

Ctrl+K+L 转换小写。

Ctrl+Z 撤销。

Ctrl+Y 恢复撤销。

Ctrl+U 软撤销，感觉和 Gtrl+Z 一样。

Ctrl+F2 设置书签

Ctrl+T 左右字母互换。

F6 单词检测拼写
```

### 搜索类
```
Ctrl+F 打开底部搜索框，查找关键字。

Ctrl+shift+F 在文件夹内查找，与普通编辑器不同的地方是sublime允许添加多个文件夹进行查找，略高端，未研究。

Ctrl+P 打开搜索框。举个栗子：1、输入当前项目中的文件名，快速搜索文件，2、输入@和关键字，查找文件中函数名，3、输入：和数字，跳转到文件中该行代码，4、输入#和关键字，查找变量名。

Ctrl+G 打开搜索框，自动带：，输入数字跳转到该行代码。举个栗子：在页面代码比较长的文件中快速定位。

Ctrl+R 打开搜索框，自动带@，输入关键字，查找文件中的函数名。举个栗子：在函数较多的页面快速查找某个函数。

Ctrl+： 打开搜索框，自动带#，输入关键字，查找文件中的变量名、属性名等。

Ctrl+Shift+P 打开命令框。场景栗子：打开命名框，输入关键字，调用sublime text或插件的功能，例如使用package安装插件。

Esc 退出光标多行选择，退出搜索框，命令框等。
```

### 显示类
```
Ctrl+Tab 按文件浏览过的顺序，切换当前窗口的标签页。

Ctrl+PageDown 向左切换当前窗口的标签页。

Ctrl+PageUp 向右切换当前窗口的标签页。

Alt+Shift+1 窗口分屏，恢复默认1屏（非小键盘的数字）

Alt+Shift+2 左右分屏-2列

Alt+Shift+3 左右分屏-3列

Alt+Shift+4 左右分屏-4列

Alt+Shift+5 等分4屏

Alt+Shift+8 垂直分屏-2屏

Alt+Shift+9 垂直分屏-3屏

Ctrl+K+B 开启/关闭侧边栏。

F11 全屏模式

Shift+F11 免打扰模式
```