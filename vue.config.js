// vue.config.js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
                'common': '@/common'
            }
        },

    },
    // eslint 空格报错
    // eslint-disable-next-line
    // eslint-disable
    lintOnSave: false,
}