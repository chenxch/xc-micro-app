/*
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-08-07 11:41:26
 */
const utils = require('./config/utils');
const packageSysName = require('./package.json').name;
const sysName = utils.getSystemName(packageSysName);
let mode = process.env.NODE_ENV; //当前启动模式
const IS_PROD = ['production', 'prod'].includes(mode); //判断是否是生产模式
const staticResource = IS_PROD ? `resources/${sysName}/static` : './';
const BASE_URL = IS_PROD ?'xc':'';
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPlugin = new HtmlWebpackPlugin({
  entry: `src/main.js`,
  template: `public/index.html`,
  filename: IS_PROD?`${sysName}/index.html`:'index.html',
  title: `${sysName}`,
  url: BASE_URL,
  // chunks: ['chunk-vendors', 'chunk-common', `${module}`],
  chunksSortMode: 'dependency'
});
module.exports = {
  pages: {index:htmlPlugin.options},
  // 基本路径
  publicPath: IS_PROD ? `/${BASE_URL}` : '/',
  // 输出文件目录
  outputDir: `dist`,
  // 静态文件地址
  assetsDir: `${staticResource}`,
}