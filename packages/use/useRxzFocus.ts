/**
 * useRxzFocus
 * @description: RxzFocus
 * @author: ruixiaozi
 * @since: 2.0.0
 */

let tabIndex = 1;

/**
 * 获取下一个tabindex
 * @returns number
 */
function tabIndexNext() {
  return tabIndex++;
}

export function useRxzFocus() {
  return {
    tabIndexNext,
  };
}
