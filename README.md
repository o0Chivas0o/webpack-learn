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
    rules:[
        {
        test:/\.jsx$/,
        use:'babel-loader',
        exclude:/node_modules/
        }
    ]
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

## 在浏览器中查看打包后的页面

### 下载 html-webpack-plugin

1. 命令行输入 `yarn add html-webpack-plugin -D`

### 修改 webpack.config.js 配置 添加插件

1. 修改如下配置
    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
      // ...
      plugins: [
        new HtmlWebpackPlugin({
          // 入口文件
          template: './public/index.html',
          // 打包后的文件名称
          filename: 'index.html',
          minify: {
            // 是否删除属性的双引号
            removeAttributeQuotes: false,
            // 是否折叠空白
            collapseWhitespace: false
          },
          // 是否加上hash,默认是false
          // hash:true
        })
      ]
    }
    ```

2. 此时执行`npx webpack` 就可以看到 `dist` 目录下的 `index.html` 文件了

## 添加 `webpack-dev-server` 插件

### 下载 `webpakc-dev-server` 以便在浏览器内浏览

复制如下代码 `yarn add webpack-dev-server -D`

修改 package.json 中的 script

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```

此时发现通过 `yarn dev` 无法开启预览，会报错，此时需要配置`contentBase` 去解决，而在配置了 `html-webpack-plugin`的情况下，`contentBase`
不会起作用，但是可以在`webpack.config.js`中进行 `webpack-dev-server` 的其他配置。

```js
//webpack.config.js
module.exports = {
  //...
  devServer: {
    port: '3000', //默认是8080
    quiet: false, //默认不启用
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    overlay: false, //默认不启用
    clientLogLevel: "silent", //日志等级
    compress: true //是否启用 gzip 压缩
  }
}

```
此时就能看到浏览器内通过webpack打包的页面了。

总结:
1. webpack 5 中更改了原有的命令, `cross-env NODE_ENV=development webpack-dev-server`更改为`cross-env NODE_ENV=development webpack serve
   `
2. 在配置 devServer 时, 各项配置均能通过 [官网提供的配置](https://webpack.js.org/configuration/dev-server/)
   查到.
