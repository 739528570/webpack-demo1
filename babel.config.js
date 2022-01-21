module.exports = {
    presets: [
        '@babel/preset-env',
        {
            // useBuildIns: false, //默认，不对当前js做polyfill的填充
            // useBuildIns: 'usage', //按需对js做polyfill填充
            // useBuildIns: 'entry', //依据browserslistrc配置的浏览器版本做polyfill填充
            // corejs: 3, //当前版本，不加会报错
        }
    ],
}