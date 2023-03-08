import { RxzBaseComponents } from './base';
import { RxzProcessComponents } from './process';
import { RxzAdvanceComponents } from './advance';
import { RxzCardComponents } from './card';
import { RxzLayoutComponents } from './layout';
import { RxzNavigationComponents } from './navigation';
import { RxzFormComponents } from './form';
import { RxzTableComponents } from './table';

export * from './base';
export * from './process';
export * from './advance';
export * from './card';
export * from './layout';
export * from './navigation';
export * from './form';
export * from './table';

// 组件列表
export const RxzComponents = [
  ...RxzTableComponents,
  ...RxzFormComponents,
  ...RxzNavigationComponents,
  ...RxzLayoutComponents,
  ...RxzCardComponents,
  ...RxzAdvanceComponents,
  ...RxzProcessComponents,
  ...RxzBaseComponents,
];
