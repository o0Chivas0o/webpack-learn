module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        // 排除node_modules 目录
        exclude: /node_modules/
      }
    ]
  }
}
