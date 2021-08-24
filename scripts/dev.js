
const webpack=require('webpack')
const path=require('path')
const devWebpackConfig=require('../webpackConfig/webpack.dev.config');
const WebpackDevServer=require('webpack-dev-server');

console.log("devWebpackConfig is ",devWebpackConfig);
try{
    const compiler=webpack(devWebpackConfig);
    console.log("hei");
    const devServerConfig={
        hot:true,
        port:8888,
        host:'localhost',
        static:{
            directory: path.resolve(__dirname, "../dist"),
        },
        open:true,
    };

    // WebpackDevServer.addDevServerEntrypoints(devWebpackConfig,devServerConfig)
    const server=new WebpackDevServer(devServerConfig,compiler);


    server.listen(8888,'localhost',()=>{
        console.log("start");
    })
}catch(ex){
    console.error(ex);
}
// const compiler=webpack(devWebpackConfig);

console.log("qiuhoainx ");