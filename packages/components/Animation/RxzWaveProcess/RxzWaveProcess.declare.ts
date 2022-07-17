import { StringMap } from '@/definition';

export class RxzWaveProcessDeclare {

  declare name: 'RxzWaveProcess';

  declare $props: {
    process?: number;
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    waterColor?: string;
    emptyColor?: string;
    infoCss?: StringMap;
  };

  declare $emit: {

  }

}
