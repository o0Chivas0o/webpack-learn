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

## 添加babel转义

### 配置webpack

1. 添加 `webpack.config.js` 文件

2. 填入如下配置
   ```
   module.exports = {
    rules:{
        test:/\.jsx$/,
        use:'babel-loader',
        exclude:/node_modules/
    }
   }
   ```

### 下载babel

1. 命令行输入    `yarn add babel-loader -D`
2. 安装babel依赖 `yarn add @babel/core @babel/preset-env @babel/plugin-transform-runtime -D`
3. 命令行输入 `yarn add @babel/runtime @babel/runtime-corejs3`

### webpack的mode

1. development：将 `process.env.NODE_ENV` 的值设置为 `development`，启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`

2. production：将 `process.env.NODE_ENV` 的值设置为 `production`，启用 `FlagDependencyUsagePlugin, `FlagIncludedChunksPlugin`,
   `ModuleConcatenationPlugin, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin, `SideEffectsFlagPlugin` 和 UglifyJsPlugin`

### 总结

1. 上图为webpack 4 的配置, webpack 5 下节更新
2. 语法降级需要使用 babel-loader.
3. webpack.config.js文件中的use语法,有三种,详细注释在本项目的文件内
4. mode中还有一个为`node`模式
