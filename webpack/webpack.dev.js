const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
    mode: "development",
    devServer: {
        hot: true,
    },
    devtool: "cheap-module-source-map",
    target: "web", //屏蔽browserslistrc
    plugins: [
        new ReactRefreshPlugin(), //react热更新插件
    ]
}