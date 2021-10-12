module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: "single",
      splitChunks: false,
    },
  },
  devServer: {
    proxy: "http://localhost:8080/api/",
  },
};
