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
    ]
  }
}
