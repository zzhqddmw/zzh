# zzh
实现webpack打包typescript项目
支持esModule、commonjs、umd全打包
"build": "npm run build:umd && npm run build:cjs && npm run build:esm",
支持单个umd打包
"build:umd": "webpack --config webpack.config.umd.js",
支持单个commonjs打包
"build:cjs": "webpack --config webpack.config.cjs.js",
支持单个esModule打包
"build:esm": "webpack --config webpack.config.js"
