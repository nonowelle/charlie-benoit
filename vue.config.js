module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: "single",
      splitChunks: false,
    },
  },
};
