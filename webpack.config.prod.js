const path = require("path");
const { DefinePlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Hash } = require("crypto");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        // assetModuleFilename: "img/[name].[hash:6][ext]",
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            esModule: false, // 防止将css里url转换成require导入方式
                        }
                    }, 
                    "postcss-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: ["postcss-preset-env"]
                    //         }
                    //     }
                    // }, 
                    "less-loader"
                ],
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash:6].[ext]"
            //             /**
            //              * [ext]: 扩展名
            //              * [name]: 文件名
            //              * [hash]: 文件内容
            //              * [contentHash]: 根据文件内容生成哈希
            //              * [hash<length>]: 自定义哈希长度
            //              * [path]: 路径
            //              * */ 
            //         }
            //     }
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     use: {
            //         loader: "url-loader",
            //         options: {
            //             name: "[name].[hash:6].[ext]",
            //             limit: 2 * 1024 * 1024,
            //             /**
            //              * [ext]: 扩展名
            //              * [name]: 文件名
            //              * [hash]: 文件内容
            //              * [contentHash]: 根据文件内容生成哈希
            //              * [hash<length>]: 自定义哈希长度
            //              * [path]: 路径
            //              * */ 
            //         }
            //     }
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: "img/[name].[hash:6][ext]",
            //     }
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     type: 'asset/inline',
            // },
            // {
            //     test: /\.(ttf|woff2?)$/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: "font/[name].[hash:6][ext]",
            //     }
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset',
                generator: {
                    filename: "img/[name].[hash:6][ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024 * 1024,
                    }
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                // use: [
                //     {
                //         loader: "babel-loader",
                //         options: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
                // ]
            }
        ]
    },
    optimization: {
        minimizer: [
          // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: "测试",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            BASE_URL: "app",
        })
    ]
}