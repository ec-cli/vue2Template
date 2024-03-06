/*
 * @Author: rk
 * @Description: 主题切换
 * @Date: 2022-02-26 09:18:07
 * @LastEditors: tuoyouxin@fpwis.com
 * @LastEditTime: 2023-07-12 17:32:55
 */

/**
 * 主题切换方法
 * @param {*} dark Boolean 是否为深色主题
 */
const switchTheme = (dark) => {
  let _body = document.getElementsByTagName("body")[0];
  
  // 文字颜色
  _body.style.setProperty(
    "--fontColorPrimary",
    dark ? "rgba(255,255,255,1)" : "#303133"
  );
  _body.style.setProperty(
    "--fontColorRegular",
    dark ? "rgba(255,255,255,.8)" : "#606266"
  );
  _body.style.setProperty(
    "--fontColorSecondary",
    dark ? "rgba(255,255,255,.7)" : "#909399"
  );
  _body.style.setProperty(
    "--fontColorPlaceholder",
    dark ? "rgba(255,255,255,.5)" : "#C0C4CC"
  );

  // 边框颜色
  _body.style.setProperty(
    "--borderColorBase",
    dark ? "rgba(46,58,102,1)" : "#DCDFE6"
  );
  _body.style.setProperty(
    "--borderColorLight",
    dark ? "rgba(46,58,102,.6)" : "#E4E7ED"
  );
  _body.style.setProperty(
    "--borderColorLighter",
    dark ? "rgba(46,58,102,.4)" : "#EBEEF5"
  );

  // 背景颜色
  _body.style.setProperty("--bgColorBase", dark ? "#151a30" : "#FFFFFF");
  _body.style.setProperty("--bgColorLight", dark ? "#222b45" : "#F0F2F5");
  _body.style.setProperty("--bgColorLighter", dark ? "#222b45" : "#F5F7FA");

  // headbar背景颜色
  _body.style.setProperty("--headerBgColor", dark ? "#222b45" : "#222b45");
  // sidebar背景颜色
  _body.style.setProperty("--asideBgColor", dark ? "#222b45" : "#222b45");
};
export default switchTheme;
