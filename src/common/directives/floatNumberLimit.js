/**
 * @desc 限制输入框只输入数字----此指令主要是为了适用可以输入负整数和负浮点数
 * @example
 * 最大两位正小数: <el-input v-number-input:true.float="2" v-model="price"/>
 * 最大两位负小数: <el-input v-number-input.float="2" v-model="price"/>
 * 只允许输入整数: <input v-number-input v-model="price"/>
 * 默认正整数 usedMinus为true时可以输入负数，false不允许输入负数
 * <el-input v-number-input:[usedMinus] v-model="price"/>
 */
export default {
  inserted(el, binding, vnode) {
    const input =
      el.tagName === "INPUT" ? el : vnode.elm.querySelectorAll("input")[0];
    input.addEventListener("compositionstart", () => {
      // eslint-disable-next-line no-param-reassign
      vnode.inputLocking = true;
    });
    input.addEventListener("compositionend", () => {
      // eslint-disable-next-line no-param-reassign
      vnode.inputLocking = false;
      input.dispatchEvent(new Event("input"));
    });
    input.addEventListener("input", () => {
      if (vnode.inputLocking) {
        return;
      }
      const usedMinus = binding.arg || false;
      const oldValue = input.value;
      let newValue = input.value;
      // modifiers为修饰符对象，传入了float，则其float属性为true
      if (binding.modifiers.float) {
        // 负数时候
        // 清除"数字"和"."以外的字符
        if (usedMinus) {
          newValue = newValue.replace(/[^\d.-]/g, "");
        } else {
          newValue = newValue.replace(/[^\d.]/g, "");
        }
        newValue = newValue.replace(/[^\d.-]/g, "");
        // 只保留第一个-, 清除多余的
        newValue = newValue.replace(/-{2,}/g, "-");
        newValue = newValue.replace(/\.{2,}/g, ".");
        // 第一个字符如果是.号，则补充前缀0
        newValue = newValue.replace(/^\./g, "0.");
        // 前两个字符如果是 -. 则补充前面的0
        newValue = newValue.replace(/^-\./g, "-0.");
        // 0开头的只保留第一个0, 清除多余的
        newValue = newValue.replace(/^0{2,}/g, "0");
        // -0开头的只保留第一个0, 清除多余的0
        newValue = newValue.replace(/^-0{2,}/g, "-0");
        // 两位数已上不能0开头
        if (/^0\d+/.test(newValue)) {
          newValue = newValue.slice(1);
        }
        // 两位数已上不能0开头
        if (/^-0\d+/.test(newValue)) {
          newValue = `-${newValue.slice(2)}`;
        }
        // 保证.只出现一次，而不能出现两次以上
        newValue = newValue
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
        // 保证-只出现一次，而不能出现两次以上
        newValue = newValue
          .replace(/^-/, "$#$")
          .replace(/-/g, "")
          .replace("$#$", "-");
        // 保留几位小数
        if (typeof binding.value !== "undefined") {
          // 期望保留的最大小数位数
          let pointKeep = 0;
          if (
            typeof binding.value === "string" ||
            typeof binding.value === "number"
          ) {
            pointKeep = parseInt(binding.value, 10);
          }
          if (!isNaN(pointKeep)) {
            if (!Number.isInteger(pointKeep) || pointKeep < 0) {
              pointKeep = 0;
            }
            const str = `^(-?)(\\d+)\\.(\\d{${pointKeep}}).*$`;
            const reg = new RegExp(str);
            if (pointKeep === 0) {
              // 不需要小数点
              newValue = newValue.replace(reg, "$1$2");
            } else {
              // 通过正则保留小数点后指定的位数
              newValue = newValue.replace(reg, "$1$2.$3");
            }
          }
        }
      } else {
        // 只保留整数
        if (usedMinus) {
          // newValue = newValue.replace(/[^\-?\d][^\d]/g, '');
          newValue = newValue.replace(/[^\d-]/g, ""); // 删除所有非数字和非负号字符
          if (newValue[0] !== "-") {
            // 如果第一个字符不是负号
            newValue = newValue.replace(/-/g, ""); // 删除所有负号
          } else {
            newValue = `-${newValue.slice(1).replace(/-/g, "")}`; // 保留第一个负号，删除其他负号
          }
        } else {
          newValue = newValue.replace(/[^\d]/g, "");
        }
        if (newValue !== "-") {
          newValue = newValue ? parseInt(newValue, 10) : "";
        }
      }
      // 判断是否需要更新，避免进入死循环
      if (newValue.toString() !== oldValue.toString()) {
        input.value = newValue;
        input.dispatchEvent(new Event("input"));
      }
    });

    // 验证是否是数值
    input.addEventListener("change", () => {
      const inpValue = input.value;
      if (isNaN(+inpValue) || /-\.$/.test(inpValue)) {
        input.value = "";
      }
      if (/^-0\.?$/.test(inpValue)) {
        input.value = 0;
      }
      if (/\.$/.test(inpValue)) {
        input.value = inpValue.slice(0, inpValue.toString().length - 1);
      }
    });
  },
};
