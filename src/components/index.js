/*
 * @Author: rk
 * @Description: 全局组件注册
 * @Date: 2022-02-28 16:40:36
 * @LastEditors: rk
 * @LastEditTime: 2024-02-04 14:26:35
 */

// 基础组件，以 Base+名称 命名，不处理业务逻辑
import BasePagination from "./BasePagination/index.vue"; // 分页组件
import BaseCopy from "./BaseCopy/index.vue"; // 复制组件
import BaseEmpty from "./BaseEmpty/index.vue"; // 无数据组件
import BaseSvgIcon from "@/components/BaseSvgIcon"; // icon组件

// 业务组件，以 Custom+名称 命名，主要处理业务逻辑
import CustomerInfoCard from "@/components/CustomerInfoCard"; // card动画组件1
import CustomerInfoCard1 from "@/components/CustomerInfoCard1"; // card动画组件2
import CustomerInfoCard2 from "@/components/CustomerInfoCard2"; // card动画组件3
import CustomerInfoCard3 from "@/components/CustomerInfoCard3"; // card动画组件4
import CustomerInfoCard4 from "@/components/CustomerInfoCard4"; // card动画组件5
import CustomerCalender from "@/components/CustomCalendar"; // 日历组件

// register globally
export default {
  install: (Vue) => {
    // 基础组件
    Vue.component("base-pagination", BasePagination);
    Vue.component("base-copy", BaseCopy);
    Vue.component("base-empty", BaseEmpty);
    Vue.component("base-svg-icon", BaseSvgIcon);

    // 业务组件
    Vue.component("customer-info-card", CustomerInfoCard);
    Vue.component("customer-info-card1", CustomerInfoCard1);
    Vue.component("customer-info-card2", CustomerInfoCard2);
    Vue.component("customer-info-card3", CustomerInfoCard3);
    Vue.component("customer-info-card4", CustomerInfoCard4);
    Vue.component("customer-calender", CustomerCalender);
  },
};
