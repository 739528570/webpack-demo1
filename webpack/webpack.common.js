const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge")

const prodConfig = require("./webpack.prod")
const devConfig = require("./webpack.dev")

const commonConfig = {
    entry: "./src/index.js",
    context: path.resolve(__dirname, '../'), // 主路径
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.less'],
        alias: {
            "@src": path.resolve(__dirname, "../src")
        }
    },
    target: "web", //屏蔽browserslistrc
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "../dist"),
        // clean: true,
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
            //     type: "asset/resource",
            //     generator: {
            //         filename: "img/[name].[hash:6][ext]",
            //     }
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     type: "asset/inline",
            // },
            // {
            //     test: /\.(ttf|woff2?)$/,
            //     type: "asset/resource",
            //     generator: {
            //         filename: "font/[name].[hash:6][ext]",
            //     }
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset",
                generator: {
                    filename: "img/[name].[hash:6][ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024 * 1024, //规定文件超出上限时不采用base64
                    }
                }
            },
            {
                test: /\.(jsx|tsx|ts|js)?$/,
                exclude: /node_modules/, //防止第三方库与自己代码的polyfill填充冲突
                use: ["babel-loader"],
                // use: [
                //     {
                //         loader: "babel-loader",
                //         options: {
                //             presets: ["@babel/preset-env"]
                //         }
                //     }
                // ]
            },
            // {
            //     test: /\.ts$/,
            //     use: ["ts-loader"]
            // }
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
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin(),
    ]
}

module.exports = (env) => {
    console.log(env, "---------------------------------")
    const isProduction = env.production

    const config = isProduction ? prodConfig : devConfig

    const mergeConfig = merge(commonConfig, config)

    return mergeConfig
}