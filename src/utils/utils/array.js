/**
 * 数组工具集
 * @file array.js
 * @author ruixiaozi
 * @version 1.0.11
 * @license MIT
 */


function swap(arr,i,j){
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}

function compare(a,b){
  if(a>b)
    return 1;
  if(a<b)
    return -1;
  return 0;
}

function compareDes(a,b){
  if(a>b)
    return -1;
  if(a<b)
    return 1;
  return 0;
}


function getCmp(cmp){
  if(typeof cmp != 'function'){
    if(typeof cmp == 'string' && cmp == 'desc'){
      return compareDes;
    }
    else{
      return compare;
    }
  }
  else
    return cmp;
}

/**
 * 冒泡排序 方法
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
function bubbleSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(compare(arr[j],arr[j+1])>0){
        swap(arr,j,j+1);
      }
    }
  }
  return arr;
}


/**
 * 选择排序 方法
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function selectionSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  for(let i=0;i<arr.length;i++){
    let inx = i;
    for(let j=i+1;j<arr.length;j++){
      if(compare(arr[inx],arr[j])>0){
        inx = j;
      }
    }
    swap(arr,i,inx);
  }
  return arr;
}


/**
 * 插入排序 方法
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function insertionSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  for(let i=0;i<arr.length;i++){
    let inx = i;
    for(let j=i+1;j<arr.length;j++){
      if(compare(arr[inx],arr[j])>0){
        inx = j;
      }
    }
    swap(arr,i,inx);
  }
  return arr;
}




export default {
  bubbleSort,
  selectionSort,
  insertionSort

}
