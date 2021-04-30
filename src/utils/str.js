//判空
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
