export class RxzDialogDeclare {

  declare name: 'RxzDialog';

  declare $props: {
    visible?: boolean;
    zIndex?: number;
    width?: string;
    titleHeight?: string;
    isShowClose?: boolean;
    titleBgColor?: string;
    titleColor?: string;
    bodyBgColor?: string;
    padding?: string;
    closeFontSize?: string;
  };

  declare $emit: {
    (e: 'update:visible', ...args: any[]): any;
  }

}
