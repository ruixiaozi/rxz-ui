import { TIP_TYPE_ENUM } from '@/components/Base/RxzTip';

export interface RxzTipsOptions {
  type?: TIP_TYPE_ENUM;
  content?: string;
  timeout?: number;
}
