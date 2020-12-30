module.exports = {
    // configureWebpack: (config) => {
    //     config.externals = {
    //         vue: 'Vue',
    //         'vant': 'vant'
    //     }
    // }
    
    devServer:{
        proxy: 'http://www.api.qsyj.com',
        host: '0.0.0.0',
        port: 8080,
    },
    lintOnSave:false,
    publicPath: process.env.NODE_ENV == 'production' ? '/moblie-eyes/' : './',
}