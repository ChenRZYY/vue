// 公共使用
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取路径
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  // 配置loader
  module: {
    rules: [
      {
        test: /\.css$/,
        // style-loader:将模块的导出作为样式添加到 DOM 中
        // css-loader只负责加载css文件,不负责解析
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      },
      // 图片
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 图片大于limit时，要使用file-loader:会有一个hash的过程
              limit: 8192,
              // 对图片进行规范命名
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      // babel语法转换
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // 插件
  plugins: [
    new webpack.BannerPlugin('最终版权归AAA所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
