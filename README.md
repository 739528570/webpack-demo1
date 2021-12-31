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
