
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
        proxy: {
            '/api': {
                target: 'http://www.cbeed.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
    module: {
      rules: [{
          test: /\.(pdf)(\?.*)?$/,
          use: [{
              loader: 'url-loader',
              options: {
                name: '[path]/[name].[hash:8].[ext]'
              }
            }]
        }]
      }
    }
})
