/*
 * @Author: yangchenguang
 * @Description: 全局文件入口
 * @Date: 2023-06-30 11:27:45
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-12-27 14:15:22
 */

let path = require("path");
let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let cssWrap = require("gulp-css-wrap");
gulp.task("css-wrap", function () {
  return (
    gulp
      .src(path.resolve("./theme/index.css"))
      /* 找需要添加命名空间的css文件，支持正则表达式 */
      .pipe(
        cssWrap({
          selector: ".custom-light" /* 添加的命名空间 */,
        })
      )
      .pipe(cleanCSS())
      .pipe(gulp.dest("src/assets/theme/light"))
  ); /* 存放的目录 */
});
