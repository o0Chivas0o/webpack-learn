# webpack-learn

## 项目初始

### 创建一个目录

> 我是在macos系统下做的开发,所以通过命令直接创建,一个新目录.

1. `mkdir webpack`
2. `cd webpack`

### 初始化项目配置

> 采用的yarn

1. `yarn init -y`
2. `git init` 此步操作为了记录该过程,所以将项目一并上传至github

### 下载webpack

1. `yarn add webpack webpack-cli -D`

### 在src文件夹下添加文件src/index.js
> 添加完成后输入代码
> 
```js
class Animal {
  constructor(name) {
    this.name = name
  }
  
  getName() {
    return this.name
  }
}

const dog = new Animal('dog')
```
### 打包文件
1. `npx webpack -mode=development`

### 总结
1. 此时就可以看到dist目录下的 main.js 文件了, 该文件就是webpack默认配置下对 src/index.js 文件打包的结果.
2. 默认配置文件在 node_modules/webpack/lib/WebpackOptionsDefaulter.js 
3. 此时发现index.js使用的语法是es6,而一般我们都需要将高级语法转换为es5语法,来达到兼容性的问题,所以此时的webpack不足以支撑整个项目.

