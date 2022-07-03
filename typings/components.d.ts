declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    RxzTestUp: typeof import('../packages/index')['RxzTestUpDeclare'],
    RxzForm: typeof import('../packages/index')['RxzFormDeclare'],
  }
}

export {};
