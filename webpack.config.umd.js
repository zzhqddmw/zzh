// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件 优化同步打包esm、com、umd文件所以去掉clean插件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack中的所有配置信息否应该卸载 module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件输出的目录
    output: {
        // 相当于 ./dist
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "umd.js",
        // 指定不适用 箭头函数包含,兼容ie浏览器
        environment: {
            arrowFunction: false,
        },
        library: {
            name:'abc',
            type: 'umd',
        },
    },
    // experiments: { outputModule: true },
    // 指定webpack打包是要使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件 ,匹配所有以 .ts结尾的文件
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件,
                // 指定loader解析
                use: [
                    // 相较于直接写加载器名称，这种配置更为全面
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        // 配置babel
                        options: {
                            presets: [
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ]
                        }
                    },
                ],
                // 指定要派出的文件
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/template.html'
        }),
        // new CleanWebpackPlugin()
    ],
    // 用来设置引用的模块
    resolve: {
        // 解析的后缀
        extensions: ['.js', '.tsx', '.ts']
    }
}
