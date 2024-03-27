/*
 * @Author: rk
 * @Description: vuex getters配置
 * @Date: 2022-03-21 15:15:23
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 18:25:28
 */

const getters = {
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
};
export default getters;
