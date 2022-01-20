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