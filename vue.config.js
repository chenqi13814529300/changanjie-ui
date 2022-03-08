module.exports = {
    //  基本路径
    publicPath: "/",
    //  构建时的输出目录
    outputDir: "dist",
    //  放置静态资源的目录
    assetsDir: "static",
    //  html 的输出路径
    indexPath: "index.html",

    //文件名哈希

    filenameHashing: false,

    //用于多页配置，默认是 undefined



    //  是否在保存的时候使用 `eslint-loader` 进行检查。

    lintOnSave: true,


    //  是否为生产环境构建生成 source map？

    productionSourceMap: true,


    // 配置 webpack-dev-server 行为。

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9555',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    // 可以使用 /api 等价于 http://115.29.209.198:9000
                    '^/api': ''
                }
            }
        }, // string | Object

    },


}
