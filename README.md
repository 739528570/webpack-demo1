postcss: javascript转换样式工具,对兼容性做处理

npx browserslist => 根据.browserslistrc文件配置查询占有率高的浏览器
> 1%  #返回占有率大于1%的浏览器
last 2 version #返回最新两个版本
not dead

postcss-preset-env => 插件集合(包含autoprefixer插件)，可将颜色#fff转换为兼容格式rgba 

postcss.config.js => 插件集合配置(postcss-loader会调用)

importLoaders: n => 表示遇到为处理的css返回至上n级处理

webpack.config => file-loader => options => esModule: false //不转换esModule

webpack.config => cssloader => options => esModule // 防止将css里url转换成require导入方式


[ext]: 扩展名
[name]: 文件名
[hash]: 文件内容
[contentHash]: 根据文件内容生成哈希
[hash<length>]: 自定义哈希长度
[path]: 路径


1、url-loader 将图片base64 uri加到文件中，减少请求次数
2、file-loader 将资源拷贝至指定文件夹，分开请求
3、url-loader 内部也可以调用file-loader
4、通过limit临界值，大于limit则拷贝

asset模块
asset module type
1.asset/resource -> file-loader
2.asset/inline -> url-loader
3.asset/source -> raw-loader

DefinePlugin：html插入变量<%= %>

@bable/preset-env 插件集合，能对绝大多数新语法进行兼容处理

babel-loader 相关的配置文件
babel.config.js(json cjs mjs)
babelrc.json(js)

webpack4默认启用polyfill，打包体积较大
webpack5移除了polyfill
@bable/preset-env并不会对最新语法（如Promise、async await、generator）做兼容
core-js/stable针对Promise、async await等
regenerator-runtime/runtime针对generator等

开发模式
wacth + live server
不足
1.所有源代码都会重新编译
2.每次编译成功后都需要进行文件重新读写
3.依赖vscode
4.不能实现局部刷新

webpack-dev-server
webpack4之前: webpack-dev
webpack5: webpack serve

HMR功能
target: 'web', 屏蔽browserslistrc
需要热更新的模块
if (module.hot) {
    module.hot.accept(['./title.js'], () => {
        ...
    })
}

react热更新
@pmmmwh/react-refresh-webpack-plugin
react-refresh

output
- publicPath: index.html内部的引用路径，域名 + publicPath + filename

devServer
- publicPath：指定本地服务打包的位置
- contentBase: 如打包后的资源依赖于其他资源，则需要指定路径（已移除）
- watchContentBase: true; 与contentBase配套使用，监听资源变化（已移除）
- hotOnly: true; 某个模块报错不会影响整个页面（已移除，用hot：only代替）
- post: 端口
- open：更新自动打开浏览器
- compress：压缩，提升性能
- historyApoFallback: true | { 自定义 }; 访问服务路由404错误时，被替代为index.html

resolve 导入路径及拓展名补全
- extensions: 补全拓展名
- alias：自定义绝对路径

mode
development	会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development. 为模块和 chunk 启用有效的名。
production	会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production. 为模块和 chunk 启用确定性的混淆名称，FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin 和 TerserPlugin 。

devtool
eval-source-map：每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中。初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。

inline-source-map：source map 转换为 DataUrl 后添加到 bundle 中。

cheap-source-map：没有列映射(column mapping)的 source map，忽略 loader source map。

cheap-module-source-map：没有列映射(column mapping)的 source map，将 loader source map 简化为每行一个映射(mapping)。

ts-loader：语法转换