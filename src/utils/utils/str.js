/**
 * 字符串处理工具集
 * @file
 * @author ruixiaozi
 * @version 1.0.0
 * @license MIT
 */

/**
 * 字符串判空
 * @function
 * @param {String} str 字符串
 * @returns 是否为空
 */
function isEmpty(str) {
  if (typeof str == "undefined" || str == null || str == "") {
    return true;
  } else {
    return false;
  }
}


//导出
const strUtils = {
  isEmpty,
}

export default strUtils;
