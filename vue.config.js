// vue.config.js
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
      config.devServer = {
        port: "9099",
        disableHostCheck: true
        // proxy: {
        //   "/mall": {
        //     target: "http://localhost:3000/",
        //     pathRewrite: { "^/mall": "" }
        //   }
        // }
      };
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set("assets", resolve("src/assets"));
    config.resolve.alias.set("components", resolve("src/components"));
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // 修改它的选项...
          let newOptions = Object.assign(options, {
              cssModules: {
                localIdentName: '[path][name]---[local]---[hash:base64:5]',
                camelCase: true
              },
              extractCSS: true,
              loaders: {
                css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
              }
            })
          return newOptions
        })
  }
};
