import { StringMap } from '@/definition';

export class RxzIconDeclare {

  declare name: 'RxzIcon';

  declare $props: {
    name?: string;
    size?: number;
    isFixedWidth?: boolean;
    spinner?: boolean;
    rotate?: string;
    cls?: Array<string>;
    css?: StringMap;
  };

  declare $emit: {

  }

}
