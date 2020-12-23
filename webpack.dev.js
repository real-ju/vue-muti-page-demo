//Node.js
const path = require('path');

//常量
const DEV_MODE = true;
const CONTENT_PATH = path.resolve(__dirname, 'public');

//插件
const webpack = require('webpack');

//配置
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = merge(webpackCommonConfig(DEV_MODE), {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: CONTENT_PATH,
        hot: true,
        proxy: {
            '/': {
                target: 'https://1921668875657123.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})