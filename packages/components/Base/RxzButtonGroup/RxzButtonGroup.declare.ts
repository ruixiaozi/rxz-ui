import { BUTTON_TYPE_ENUM } from '../RxzButton/RxzButton.declare';

export interface RxzButtonGroupItem {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  type?: BUTTON_TYPE_ENUM;
  width?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  onClick?: (...args: any[]) => any;
}

export class RxzButtonGroupDeclare {

  declare name: 'RxzButtonGroup';

  declare $props: {
    buttons?: RxzButtonGroupItem[];
    // 最大展示的按钮数，默认3
    max?: number;
    link?: boolean;
  };

  declare $emit: {
  }

}
