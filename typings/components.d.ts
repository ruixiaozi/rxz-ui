declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    RxzBreadcrumb: typeof import('../packages/index')['RxzBreadcrumbDeclare'],
    RxzSearch: typeof import('../packages/index')['RxzSearchDeclare'],
    RxzButtonGroup: typeof import('../packages/index')['RxzButtonGroupDeclare'],
    RxzSelect: typeof import('../packages/index')['RxzSelectDeclare'],
    RxzPagination: typeof import('../packages/index')['RxzPaginationDeclare'],
    RxzColumnRender: typeof import('../packages/index')['RxzColumnRenderDeclare'],
    RxzTable: typeof import('../packages/index')['RxzTableDeclare'],
    RxzTip: typeof import('../packages/index')['RxzTipDeclare'],
    RxzContainer: typeof import('../packages/index')['RxzContainerDeclare'];
    RxzTextarea: typeof import('../packages/index')['RxzTextareaDeclare'];
    RxzCheckbox: typeof import('../packages/index')['RxzCheckboxDeclare'];
    RxzSwitch: typeof import('../packages/index')['RxzSwitchDeclare'];
    RxzFlex: typeof import('../packages/index')['RxzFlexDeclare'];
    RxzFlipCard: typeof import('../packages/index')['RxzFlipCardDeclare'];
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
    $RxzPopover: typeof import('../packages/index')['RxzPopover'];
    $RxzMessageBox: typeof import('../packages/index')['RxzMessageBox'];
    $RxzTips: typeof import('../packages/index')['RxzTips'];
    $i18n: typeof import('../packages/index')['getI18n'];
    $RxzModal: typeof import('../packages/index')['RxzModal'];
    $RxzLoading: typeof import('../packages/index')['RxzLoading'];
  }

}

export {};
