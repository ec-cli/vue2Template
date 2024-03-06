/*
 * @Author: rk
 * @Description: vue 配置
 * @Date: 2022-03-22 15:06:55
 * @LastEditors: rk
 * @LastEditTime: 2024-01-02 16:58:22
 */

"use strict";
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
// 清除打印和注释
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { HashedModuleIdsPlugin } = require("webpack");
// gzip压缩
const CompressionPlugin = require("compression-webpack-plugin");
// 清除未使用到的js代码
const TerserPlugin = require("terser-webpack-plugin");
// 清除未使用到的css代码
let OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 多线程打包
const HappyPack = require("happypack");
const os = require("os");
// 开辟一个线程池，拿到系统CPU的核数，happypack 将编译工作利用所有线程
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
// 中间缓存
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  // 基本路径
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  lintOnSave: false,
  configureWebpack: (config) => {
    const plugins = [];
    if (process.env.NODE_ENV === "production") {
      plugins.push(
        new HappyPack({
          id: "happybabel",
          loaders: ["babel-loader"],
          threadPool: happyThreadPool,
        }),
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false, // 去掉注释
            },
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"], // 移除console
            },
          },
        })
      );
      // 开启分离js
      config.optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 1000 * 60,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // 排除node_modules 然后吧 @ 替换为空 ,考虑到服务器的兼容
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              },
            },
          },
        },
      };
      // 清除未使用的js代码
      config.optimization = {
        minimize: true,
        minimizer: [new TerserPlugin()],
      };
      // 清除未使用的css代码
      plugins.push(
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require("cssnano"),
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        })
      );
      // 服务器也要相应开启gzip
      plugins.push(
        new CompressionPlugin({
          filename: "[path][name].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8, // 压缩比
        })
      );
      // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
      plugins.push(new HashedModuleIdsPlugin());
      // 取消webpack警告的性能提示
      config.performance = {
        hints: "warning",
        // 入口起点的最大体积
        maxEntrypointSize: 1000 * 500,
        // 生成文件的最大体积
        maxAssetSize: 1000 * 1000,
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith(".js");
        },
      };
    }
    plugins.push(
      // 缓存 加速二次构建速度
      new HardSourceWebpackPlugin({
        // cacheDirectory是在高速缓存写入 ，设置缓存在磁盘中存放的路径
        cacheDirectory: "./../disk/.cache/hard-source/[confighash]",
        recordsPath: "./../disk/.cache/hard-source/[confighash]/records.json",
        // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配置构建不同的缓存
        configHash: function (webpackConfig) {
          return require("node-object-hash")({ sort: false }).hash(
            webpackConfig
          );
        },
        environmentHash: {
          root: process.cwd(),
          directories: [],
          files: ["./../package-lock.json", "./../yarn.lock"],
        },
        info: {
          mode: "none",
          level: "debug",
        },
        cachePrune: {
          // Caches younger than `maxAge` are not considered for deletion. They must
          // be at least this (default: 2 days) old in milliseconds.
          maxAge: 2 * 24 * 60 * 60 * 1000,
          sizeThreshold: 100 * 1024 * 1024,
        },
      })
    );
    return { plugins };
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/assets/css/skin.scss';",
      },
    },
  },
  chainWebpack: (config) => {
    // alias别名设置
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@utils", resolve("src/common/utils"))
      .set("@chart", resolve("src/common/chart"))
      .set("@mixins", resolve("src/common/mixins"))
      .set("@api", resolve("src/api/apiList"))
      .set("@assets", resolve("src/assets"))
      .set("@const", resolve("src/constants"))
      .set("@router", resolve("src/router"));
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
    // webpack 会默认给commonChunk打进chunk-vendors，所以需要对webpack的配置进行delete
    config.optimization.delete("splitChunks");
  },
};
