module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: "single",
      splitChunks: false,
    },
  },
  // devServer: {
  //   proxy: {
  //     "^/api": {
  //       target: "http://localhost:8080/api/",
  //       changeOrigin: true,
  //       secure: false,
  //       pathRewrite: { "^/api": "/api" },
  //       logLevel: "debug",
  //     },
  //   },
  // },
};
