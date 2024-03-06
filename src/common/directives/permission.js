/*
 * @Author: rk
 * @Description: 权限指令
 * @Date: 2023-05-29 15:23:54
 * @LastEditors: rk
 * @LastEditTime: 2023-09-21 15:35:26
 */
import store from "@/store";
export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    const all_permission = "*:*:*";
    const permissions = store.state && store.state.common.permissions;
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some((permission) => {
        return (
          all_permission === permission || permissionFlag.includes(permission)
        );
      });
      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("请设置操作权限标签值");
    }
  },
};
