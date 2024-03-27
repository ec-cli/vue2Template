<!--
 * @Author: rk
 * @Description: 菜单项组件
 * @Date: 2022-03-21 12:25:16
 * @LastEditors: rk
 * @LastEditTime: 2023-07-03 19:13:32
-->

<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    // 图标名称
    icon: {
      type: String,
      default: "",
    },
    // 菜单名称
    title: {
      type: String,
      default: "",
    },
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      vnodes.push(<base-svg-icon icon-class={icon} />);
    }
    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>
