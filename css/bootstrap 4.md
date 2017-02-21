# css bootstrap 4的一些小问题

[TOC]

## 折叠版bug

> `原因`：

    当前项展开，前一项折叠，则会导致页面并不会从当前项的起始位置显示

> `方法`：

    遍历每项的panel-heading，
    在展开事件中（shown.bs.collapse）计算当前项上方有多少个panel-heading，
    使scrollTop()滚动到当前项顶部

## tooltip提示框

    html上写代码通常没有效果，因为一定手动打开tooltip
    $('[data-toggle="tooltip"]').tooltip()；