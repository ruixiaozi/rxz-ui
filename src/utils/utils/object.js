/**
 * 对象工具集
 * @file object.js
 * @author ruixiaozi
 * @version 1.0.11
 * @license MIT
 */

/**
 * 深度拷贝 方法
 * @function
 * @param {Object} obj 对象
 * @returns 新对象
 */
function deepClone(obj){
  let type = typeof obj;
  if(type == 'object' && obj){
    let newObj = obj.constructor();
    for(let key in obj){
      newObj[key] = deepClone(obj[key]);
    }
    return newObj;
  }
  else
    return obj;
}

export default {
  deepClone
}
