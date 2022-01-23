module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // useBuildIns: false, //默认，不对当前js做polyfill的填充
                // useBuiltIns: 'entry', //依据browserslistrc配置的浏览器版本做polyfill填充
                useBuiltIns: 'usage', //按需对js做polyfill填充
                corejs: '3', //当前版本，不加会报错
            }
        ],
        ['@babel/preset-typescript'],
        ['@babel/preset-react'],
    ],
    plugins: [
        ['react-refresh/babel']
    ]
}