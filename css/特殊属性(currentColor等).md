# css 特殊属性

[TOC]

## inherit 继承

> 可以用在任何 CSS 属性中,而且它总是绑定到父元素的计算值(对伪元素来说,则会取生成该伪元素的宿主元素)

    div{
      border:1px solid lightblue;
    }
    div span{
      border:inherit;
    }

## currentColor 颜色关键字

> 自动地从`文本颜色`那里得到颜色
> 因为 currentColor 本身就是很多 CSS 颜色属性的初始值,比如 border-color 和 outline-color,以及 text-shadow 和 box-shadow 的颜色值,等等。

    hr {
      height: .5em;
      background: currentColor; 
    }

## --accent-color

      ul {
        --accent-color: red;
      }
      
      ol {
        --accent-color: blue;
      }
      
      li {
        background-color: var(--accent-color);
      }

## calc()

> calc()内部的-和+运算符两侧各家一个空白符，否则会解析错误

    div.calc{
      background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat bottom right #58a;
      background-position: calc(100% - 20px) calc(100% - 10px);

      /* Styling */
      max-width: 10em;
      min-height: 5em;
      padding: 10px;
      color: white;
    } 