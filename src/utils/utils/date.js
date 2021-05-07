/**
 * 日期工具集
 * @file
 * @author ruixiaozi
 * @version 1.0.0
 * @license MIT
 */

/**
 * 格式化日期 方法
 * @function
 * @param {String} fmt 格式字符串
 * @param {Date} date 日期对象
 * @returns 格式化后的日期字符串
 */
function format(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}


//导出
const date = {
  format,
};
export default date;
