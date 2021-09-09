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

/**
 * 排序（选择<冒泡=插入<希尔< 归并(稳定，nlogn) ~= 快速(利用缓存) ~= 堆（nlogn,空间小））
 * 稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面。
 * 不稳定：如果a原本在b的前面，而a=b，排序之后 a 可能会出现在 b 的后面。
 * 时间复杂度：对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。
 * 空间复杂度：是指算法在计算机
 */

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
 * 选择排序 方法
 * 时间：平均n2 最坏n2 最好n2
 * 空间：1
 * 不稳定
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
 * 冒泡排序 方法
 * 时间：平均n2 最坏n2 最好n
 * 空间：1
 * 稳定
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
 * 插入排序 方法
 * 时间：平均n2 最坏n2 最好n
 * 空间：1
 * 稳定
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function insertionSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  for(let i=1;i<arr.length;i++){
    let current = arr[i];
    let j;
    for(j=i-1;j>0 && compare(arr[j],current)>0;j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}


/**
 * 希尔排序 方法 （分组进行插入排序）
 * 时间：平均n1.5 最坏n2 最好n
 * 空间：1
 * 不稳定
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function shellSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  //分组
  for(let gap = Math.floor(arr.length/2);gap>0;gap=Math.floor(gap/2)){
    //按不同分组，同间隔来处理
    for(let i=gap;i<arr.length;i++){
      let current = arr[i];
      let j;
      for(j=i-gap;j-gap>=0 && compare(arr[j],current)>0;j-=gap){
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = current;
    }
  }


  return arr;
}



/**
 * 归并排序 方法 （分治：二分，子序列合并（中间数组实现有序））
 * 时间：平均nlogn 最坏nlogn 最好nlogn
 * 空间：n
 * 稳定
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function mergeSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  return mergeSort_split(arr,compare);
}

function mergeSort_split(arr,compare){
  if(arr.length < 2)
    return arr;

  let middle = Math.floor(arr.length / 2);
  //分
  let left = mergeSort_split(arr.slice(0,middle),compare);
  let right = mergeSort_split(arr.slice(middle),compare);
  //治
  return mergeSort_merge(left,right,compare);
}


function mergeSort_merge(left,right,compare){
  let res = [];
  while(left.length>0 && right.length>0){
    if(compare(left[0],right[0])<0)
      res.push(left.shift());
    else
      res.push(right.shift());
  }

  res.push(...left);
  res.push(...right);

  return res;

}


/**
 * 快速排序 方法(分治：选基准，以基准值为中间值，分成两部分)
 * 时间：平均nlogn 最坏n2 最好nlogn
 * 空间：nlogn
 * 不稳定
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function quickSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);


  quickSort_split(arr,0,arr.length-1,compare)
  return arr;
}


function quickSort_split(arr,left,right,compare) {
  if(left>=right)
    return;
  let tem = arr[left]; //基准
  let i = left,j = right;
  while(i<j){
    while(i<j && compare(arr[j],tem)>=0)j--;
    arr[i] = arr[j];
    while(i<j && compare(arr[i],tem)<=0)i++;
    arr[j] = arr[i];
  }
  arr[i] = tem;
  quickSort_split(arr,left,i-1,compare);
  quickSort_split(arr,i+1,right,compare);
}


/**
 * 堆排序(利用数据结构堆来实现排序)
 * 时间：平均nlogn 最坏nlogn 最好nlogn
 * 空间：1
 * 不稳定
 * @function
 * @param {Object} arr 数组
 * @returns 排序后的素组
 */
 function heapSort(arr,compare){
  if(!Array.isArray(arr))
    return arr;

  compare = getCmp(compare);

  //构建堆
  for(let i = Math.floor(arr.length/2);i>=0;i--){
    heapify(arr,arr.length,i,compare);
  }

  //取值，调整
  for(let i = arr.length-1;i>0;i--){
    swap(arr,0,i);
    heapify(arr,i,0,compare);
  }


  return arr;
}

function heapify(arr,len,i,compare) {
  let left = 2*i+1, right = 2*i+2;
  let largest = i;
  if(left<len && compare(arr[left],arr[largest])>0)
    largest = left;

  if(right<len && compare(arr[right],arr[largest])>0)
    largest = right;

  if(largest!=i){
    swap(arr,largest,i);
    heapify(arr,len,largest,compare);
  }
}




export default {
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort,
  mergeSort,
  quickSort,
  heapSort,
  sort:quickSort,  //默认使用快排



}
