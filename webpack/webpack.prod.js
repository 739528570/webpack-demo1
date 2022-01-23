const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { 
                    from: "public",
                    globOptions: {
                        ignore: ["**/index.html"], //防止重复打包html模板
                    }
                }
            ]
        }),
    ]
}