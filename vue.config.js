const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
  },
  publicPath: '/',
  outputDir: 'dist'
})
