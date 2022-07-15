declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    RxzRadio: typeof import('../packages/index')['RxzRadioDeclare'],
    RxzInput: typeof import('../packages/index')['RxzInputDeclare'],
    RxzFormItem: typeof import('../packages/index')['RxzFormItemDeclare'],
    RxzForm: typeof import('../packages/index')['RxzFormDeclare'],
    RxzLabel: typeof import('../packages/index')['RxzLabelDeclare'],
  }
}

export {};
