module.exports = {
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  configureWebpack: {
    externals: {
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      Video: 'video.js',
      'videojs-contrib-hls':'contrib'
    }
  },
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'https://kz.sync163.com/',
        // 如果要代理 websockets
        ws: true,
        secure: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
        //   pathRewrite: {
        //     '^/admin': ''    //代理的路径
        //   }
      },
      '/gzh': {
        target: 'https://kz.sync163.com/',
        ws: true,
        secure: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    }
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  parallel: undefined,
  css: undefined
}
