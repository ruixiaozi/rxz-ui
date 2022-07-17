export class RxzCountdownButtonDeclare {

  declare name: 'RxzCountdownButton';

  declare $props: {
    modelValue: boolean;
    seconds?: number;
    type?: string;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
    (e: 'click', event: Event): any;
  }

}
