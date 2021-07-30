module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/assets/scss/main.scss";',
            }
        }
    },
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    }

};