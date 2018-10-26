const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: `${__dirname}/src`,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        include: `${__dirname}/src`,
        loader: 'prerender-loader?string',
      },
    ],
  },
}
