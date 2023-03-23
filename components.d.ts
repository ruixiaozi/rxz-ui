declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    RxzTableForm: typeof import('./packages/index')['RxzTableForm'],
    RxzList: typeof import('./packages/index')['RxzList'],
    RxzTree: typeof import('./packages/index')['RxzTree'],
    RxzTable: typeof import('./packages/index')['RxzTable'],
    RxzFormItem: typeof import('./packages/index')['RxzFormItem'],
    RxzForm: typeof import('./packages/index')['RxzForm'],
    RxzLabel: typeof import('./packages/index')['RxzLabel'],
    RxzTabs: typeof import('./packages/index')['RxzTabs'],
    RxzMenu: typeof import('./packages/index')['RxzMenu'],
    RxzBreadcrumb: typeof import('./packages/index')['RxzBreadcrumb'],
    RxzPagination: typeof import('./packages/index')['RxzPagination'],
    RxzSearch: typeof import('./packages/index')['RxzSearch'],
    RxzCheckbox: typeof import('./packages/index')['RxzCheckbox'],
    RxzTextarea: typeof import('./packages/index')['RxzTextarea'],
    RxzRadio: typeof import('./packages/index')['RxzRadio'],
    RxzSwitch: typeof import('./packages/index')['RxzSwitch'],
    RxzSelect: typeof import('./packages/index')['RxzSelect'],
    RxzInput: typeof import('./packages/index')['RxzInput'],
    RxzFlex: typeof import('./packages/index')['RxzFlex'],
    RxzContainer: typeof import('./packages/index')['RxzContainer'],
    RxzFlipCard: typeof import('./packages/index')['RxzFlipCard'],
    RxzWaveProcess: typeof import('./packages/index')['RxzWaveProcess'],
    RxzCountdownButton: typeof import('./packages/index')['RxzCountdownButton'],
    RxzTip: typeof import('./packages/index')['RxzTip'],
    RxzIcon: typeof import('./packages/index')['RxzIcon'],
    RxzButtonGroup: typeof import('./packages/index')['RxzButtonGroup'],
    RxzButton: typeof import('./packages/index')['RxzButton'];
  }

  interface ComponentCustomProperties {
    $dataMap: typeof import('./packages/index')['$dataMap'];
    $i18n: typeof import('./packages/index')['$i18n'];
  }

}

export {};
