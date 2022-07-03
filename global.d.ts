declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    Test: typeof import('rxz-ui')['TestDeclare'],
    RxzForm: typeof import('rxz-ui')['RxzFormDeclare'],
  }
}

export {};
