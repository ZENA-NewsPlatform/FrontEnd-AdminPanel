module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => { args[0].title = 'Zena Admin panel'; return args; });
    },
    Server: {
        port: 5000
    }
}
