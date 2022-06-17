export type Validator = (value: any, formData?: any, key?: string) => string | undefined;

export interface RxzFormItemConfig {
  default?: any;
  validators: Validator[];
}

export interface RxzFormConfig {
  [key: string]: RxzFormItemConfig | RxzFormConfig | RxzFormConfig[];
}
