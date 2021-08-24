
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {VueLoaderPlugin}=require('vue-loader');
module.exports={
    entry:{
        main:path.resolve(__dirname,'../src/main.js'),
    },
    output:{
        filename:'[name].[chunkhash:8].js',
        path:path.resolve(__dirname,'../dist'),
    },
    resolve:{
        extensions:['.vue','.js','.less','.css'],
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },{
                test:/\.js$/,
                loader:'babel-loader',
            },{
                test:/\.less$/,
                use:['css-loader','style-loader','less-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/html/index.html'),
            filename:'index.html',
            inject:true,
        })
    ]
}