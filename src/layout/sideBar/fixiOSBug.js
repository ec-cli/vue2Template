/*
 * @Author: rk
 * @Description: mixin 混入
 * @Date: 2022-06-08 09:53:19
 * @LastEditors: rk
 * @LastEditTime: 2023-06-29 15:59:42
 */

export default {
  computed: {
    // device() {
    //   return this.$store.state.app.device
    // }
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    this.fixBugIniOS();
  },
  methods: {
    fixBugIniOS() {
      // const $subMenu = this.$refs.subMenu
      // if ($subMenu) {
      //   const handleMouseleave = $subMenu.handleMouseleave
      //   $subMenu.handleMouseleave = (e) => {
      //     if (this.device === 'mobile') {
      //       return
      //     }
      //     handleMouseleave(e)
      //   }
      // }
    },
  },
};
