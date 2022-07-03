declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    RxzForm: typeof import('../packages/index')['RxzFormDeclare'],
  }
}

export {};
