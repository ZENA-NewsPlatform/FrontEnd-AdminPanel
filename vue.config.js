module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => { args[0].title = 'Zena Admin panel'; return args; });
    },
    server: {
        origin: 'http://localhost:5000',
    },
}