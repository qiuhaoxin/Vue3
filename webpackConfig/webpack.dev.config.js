const path=require('path');
const {merge}=require('webpack-merge');
const webpack=require('webpack');
const baseConfig=require('./webpack.base.config');

module.exports=merge(baseConfig,{
    mode:'development',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})