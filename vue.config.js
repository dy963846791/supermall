module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network'
      }
    },

  },
  devServer:{
    port:8888,
  },
  lintOnSave: false //取消eslint验证
}