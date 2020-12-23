//Node.js
const path = require('path');

//常量
const DEV_MODE = false;

//插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//配置
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = merge(webpackCommonConfig(DEV_MODE), {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        // publicPath: 'http://2201181566.gitee.io/vue-muti-page-demo/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
})