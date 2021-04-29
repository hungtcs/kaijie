ESMoudle
====

- esmodule  ECMA官方模块方案
- commonjs  nodejs支持的模块化方案
- amd       适合浏览器使用
- umd       同时支持amd、commonjs、globalVariable

### ESModule
1. 解决全局冲突



1. import export 只能在module中使用。
2. import进来的都是引用（指针）

defer 延迟加载  有序
async 异步加载  无序

### 打包工具
- rollup     https://rollupjs.org/guide/en/
- webpack



### 一般一个项目的主要js
- main.js       主要业务逻辑
- common.js     公共代码
- runtime.js    框架代码
- polyfill.js   兼容性补丁代码

- 01.js
- 02.js
