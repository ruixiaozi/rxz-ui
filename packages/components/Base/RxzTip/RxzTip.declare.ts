export enum TIP_TYPE_ENUM {
  success='success',
  information='information',
  warning='warning',
  error='error',
}


export class RxzTipDeclare {

  declare name: 'RxzTip';

  declare $props: {
    type?: string;
    closable?: boolean;
  };

  declare $emit: {
  }

}
