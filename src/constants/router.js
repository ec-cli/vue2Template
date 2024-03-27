/*
 * @Author: rk
 * @Description: 路由声明文件
 * @Date: 2022-06-08 09:53:19
 * @LastEditors: rk
 * @LastEditTime: 2024-03-27 15:58:54
 */

export const routerList = [
  {
    path: "/system-manage",
    component: "Layout",
    name: "systemManage",
    redirect: "noRedirect",
    hidden: false,
    alwaysShow: true,
    meta: {
      title: "系统管理",
      icon: "system",
      noCache: false,
      link: null,
    },
    children: [
      {
        path: "user-manage",
        hidden: false,
        component: "BaseParentView",
        name: "userManage",
        meta: {
          title: "用户管理",
          icon: "user",
          noCache: false,
          link: null,
        },
        children: [
          {
            path: "user-detail",
            hidden: false,
            component: "systemManage/userManage/userDetail/index",
            name: "userDetail",
            meta: {
              title: "用户详情",
              icon: "user",
              noCache: false,
              link: null,
            },
          },
          {
            path: "user-info",
            hidden: false,
            component: "systemManage/userManage/userInfo/index",
            name: "userInfo",
            meta: {
              title: "用户信息",
              icon: "user",
              noCache: false,
              link: null,
            },
          },
        ],
      },
      {
        path: "role-manage",
        hidden: false,
        component: "systemManage/roleManage/index",
        name: "roleManage",
        meta: {
          title: "角色管理",
          icon: "peoples",
          noCache: false,
          link: null,
        },
      },
      {
        path: "menu-manage",
        hidden: false,
        component: "systemManage/menuManage/index",
        name: "menuManage",
        meta: {
          title: "菜单管理",
          icon: "tree_table",
          noCache: false,
          link: null,
        },
      },
    ],
  },
  {
    path: "/sample",
    component: "Layout",
    name: "Sample",
    redirect: "noRedirect",
    hidden: false,
    alwaysShow: false,
    children: [
      {
        path: "",
        component: "sample/index",
        name: "Sample",
        meta: {
          noCache: true,
          title: "组件模板",
          icon: "dashboard",
          link: null,
        },
      },
    ],
  },
];
