export enum ICON_TYPE_ENUM {
  default='default',
  success='success',
  information='information',
  warning='warning',
  error='error',
}
export class RxzIconDeclare {

  declare name: 'RxzIcon';

  declare $props: {
    name?: string;
    size?: number;
    spinner?: boolean;
    step?: number;
    rotate?: string;
    type?: string;
  };

  declare $emit: {

  }

}
