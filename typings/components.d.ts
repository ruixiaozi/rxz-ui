declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    RxzContainer: typeof import('../packages/index')['RxzContainerDeclare'];
    RxzTextarea: typeof import('../packages/index')['RxzTextareaDeclare'];
    RxzCheckbox: typeof import('../packages/index')['RxzCheckboxDeclare'];
    RxzSwitch: typeof import('../packages/index')['RxzSwitchDeclare'];
    RxzFlex: typeof import('../packages/index')['RxzFlexDeclare'];
    RxzFlipCard: typeof import('../packages/index')['RxzFlipCardDeclare'];
    RxzTheme: typeof import('../packages/index')['RxzThemeDeclare'];
    RxzIcon: typeof import('../packages/index')['RxzIconDeclare'];
    RxzCountdownButton: typeof import('../packages/index')['RxzCountdownButtonDeclare'];
    RxzButton: typeof import('../packages/index')['RxzButtonDeclare'];
    RxzWaveProcess: typeof import('../packages/index')['RxzWaveProcessDeclare'];
    RxzRadio: typeof import('../packages/index')['RxzRadioDeclare'];
    RxzInput: typeof import('../packages/index')['RxzInputDeclare'];
    RxzFormItem: typeof import('../packages/index')['RxzFormItemDeclare'];
    RxzForm: typeof import('../packages/index')['RxzFormDeclare'];
    RxzLabel: typeof import('../packages/index')['RxzLabelDeclare'];
  }

  interface ComponentCustomProperties {
    $i18n: typeof import('../packages/index')['getI18n'];
    $RxzModal: typeof import('../packages/index')['RxzModal'];
    $RxzLoading: typeof import('../packages/index')['RxzLoading'];
  }

}

export {};
