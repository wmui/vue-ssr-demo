const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(base, {
  target: 'node',
  entry: {
    server: path.join(__dirname, '../entry-server.js')
  },
  output: {
    filename: '[name].js', // server.js
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.ssr.html'),
      filename: 'index.ssr.html',
      files: {
        js: 'client.js'
      }, // client.js需要在html中引入
      excludeChunks: ['server'] // server.js只在服务端执行，所以不能打包到html中
    })
  ]
});