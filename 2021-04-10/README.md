2021-04-10
====

### display  元素的显示方式
- none
- block
- inline
- inline-block
- flex

### possition 设置元素的定位方式
- static    静态 默认
- relative  相对
    显示的位置变了，但是DOM计算位置不变
- absolute  绝对
    不在文档流之中，不影响其他元素的位置
    相对于上级的`relative` / `absolute`元素定位，如果上级没有`relative`元素，则相对于body定位
    **注意滚动条**
- fixed
    “永远”相对于`根 html`定位，无视父级定位方式
    不跟随滚动条
    比如返回顶部按钮的定位

### 超链接 `a`标签

```html
<a href="url"></a>
```

URL: http://127.0.0.1:8080/path/to/resources
     /path/to/resources
     resources

- base 标签 设置页面上**相对资源**的前缀
    - target 设置页面上a标签默认target

### 链接到锚点
 - 创建锚点： `<a name="hash"></a>`
