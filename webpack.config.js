// 引入 html-webpack-plugin
// 解决无法自动在浏览器查看页面的问题
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // 未开启 mode 选项 需使用 npx webpack -mode=development
  // 开启 mode 选项 则直接使用 npx webpack 即可
  mode: 'development',
  module: {
    rules: [
      {
        // 匹配规则
        test: /\.jsx?$/,
        // 可以是字符串 use:'babel-loader'
        // 可以是一个数组 use:['style-loader','css-loader']
        // 可以是一个对象 如下
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  'corejs': 3
                }
              ]
            ]
          }
        },
        // 排除node_modules 目录
        exclude: /node_modules/
      }
    ],
  },
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
  ],
  devServer: {
    // 端口号
    port: '3000',
    // 默认不启用
    quiet: false,
    // 默认开启 inline 模式,如果设置为 false,开启iframe模式
    inline: true,
    //终端仅打印 error
    stats: 'errors-only',
    //默认不启用
    overlay: false,
    //日志等级
    clientLogLevel: 'silent',
    //是否启用 gzip 压缩
    compress: true
  }
}
