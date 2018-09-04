const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(base, {
  entry: {
    client: path.join(__dirname, '../entry-client.js')
  }
});