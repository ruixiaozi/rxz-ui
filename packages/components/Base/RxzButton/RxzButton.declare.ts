import { StringMap } from '@/definition';

export class RxzButtonDeclare {

  declare name: 'RxzButton';

  declare $props: {
    disabled?: boolean;
    loading?: boolean;
    type?: string;
    nativeType?: string;
    cls?: Array<string>;
    css?: StringMap;
    width?: string;
    height?: string;
    padding?: string;
    borderRadius?: string;
    bgColor?: string;
    hoverBgColor?: string;
    textColor?: string;
    hoverTextColor?: string;
  };

  declare $emit: {
    (e: 'click', event: Event): any;
  }

}
