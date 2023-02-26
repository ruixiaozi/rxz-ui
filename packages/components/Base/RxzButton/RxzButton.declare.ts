export enum BUTTON_TYPE_ENUM {
  default='default',
  primary='primary',
  success='success',
  information='information',
}

export enum NATIVE_BUTTON_TYPE_ENUM {
  button='button',
  reset='reset',
  submit='submit',
}

export class RxzButtonDeclare {

  declare name: 'RxzButton';

  declare $props: {
    disabled?: boolean;
    loading?: boolean;
    type?: string;
    nativeType?: string;
    width?: string;
    height?: string;
    padding?: string;
    borderRadius?: string;
    bgColor?: string;
    hoverBgColor?: string;
    textColor?: string;
    hoverTextColor?: string;
    link?: boolean;
    underline?: boolean;
  };

  declare $emit: {
  };

}
