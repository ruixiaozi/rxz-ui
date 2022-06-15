export interface RxzFormItemConfig {
  default?: any;
  validators: any[];
}

export interface RxzFormConfig {
  [key: string]: RxzFormItemConfig | RxzFormConfig | RxzFormConfig[];
}
