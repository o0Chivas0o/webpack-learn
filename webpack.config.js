module.exports = {
  // mode: 'development',
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
