import { useRxzSSR } from './useRxzSSR';

export function useRxzDom() {
  if (useRxzSSR().isSSR.value) {
    return {
      document: undefined,
      window: undefined,
      documentWidth: () => 0,
      documentHeight: () => 0,
    };
  }
  return {
    document,
    window,
    documentWidth: () => Math.max(document.documentElement.clientWidth, document.body.clientWidth),
    documentHeight: () => Math.max(document.documentElement.clientHeight, document.body.clientHeight),
  };
}
