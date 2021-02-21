const path = require('path')
const webpack = require('webpack')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // configureWebpack: {
  //   plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  //   resolve: {
  //     alias: {
  //       '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
  //     }
  //   }
  // },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    //清除已有loader
    svgRule.uses.clear()

    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  devServer: {
    port: 8989,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        bypass: function(req, res) {
          res.write(
            JSON.stringify({
              data: 'success',
              code: 200,
              msg: 'success'
            })
          )
          res.end()
          return false
        }
      }
    }
  }
}
