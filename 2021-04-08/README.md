2021-04-08
=====

### 伪类

伪类选择器

- :last-of-child    **最后一个**元素，必须是父元素的最后一个元素
- :last-of-type     最后一个**类型**，不必须是父元素的最后一个元素，
                    仅是最后一个此类型的元素

状态伪类：

- :hover            当鼠标放上去的时候的样式
                    hover状态要保证元素仍是hover状态
- :focus            元素获得焦点时的状态
- :focus-within     元素或者其子孙元素获得焦点时的状态

outline: 描边        所有可以获得焦点的元素默认有outline


-------------------

这两个属性是针对  `inline` / `inline-block`
- text-align       水平居中
- vertival-align   垂直居中

-------------------

### 布局
- none            不渲染此元素
- display
  - block         块级元素
  - inline        行内元素
  - inline-block  块级行内
  - flex          弹性布局    块级
    - align-items
    - justify-content
    - flex-wrap
    - flex-flow
    - flex-shrink
    - flex-grow
