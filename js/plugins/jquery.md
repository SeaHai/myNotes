# js jquery使用心得

[TOC]

## 设置scrollTop()不兼容Safari

```js
function setScrollTop(scroll_top) {
    document.documentElement.scrollTop = scroll_top;
    window.pageYOffset = scroll_top;
    document.body.scrollTop = scroll_top;
}
```

## 锚点链接平滑滚动

```js
$('a[href^="#"]').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
    if ($target.length) {
      var targetOffset = $target.offset().top-navbarTop; // 需要减去固定导航栏高度
      $('html,body').animate({
          scrollTop: targetOffset
      },1000);
      return false;
    }
  }
});
```