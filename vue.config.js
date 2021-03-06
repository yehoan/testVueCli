const path = require("path");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: "./",
  indexPath: "index.html",
  assetsDir: "",
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: require("os").cpus().length > 1,
  pwa: {},
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"));

    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      });
  },
  css: {
    requireModuleExtension: true, // js import 时将所有的 *.(css|scss|sass|less|styl(us)?) 文件
    // 视为 CSS Modules 模块
    extract: IS_PROD, // 将组件中的 CSS 提取至一个独立的 CSS 文件中
    sourceMap: !IS_PROD
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    host: "192.168.1.2",
    port: 8082,
    https: false,
    open: false
  }
};
