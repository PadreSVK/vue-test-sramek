module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': __dirname + '/src',
            }
        },
        devtool: "source-map"
    }
}