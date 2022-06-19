export type Validator = (value: any, formData?: any, key?: string) => string | undefined;

export interface RxzFormItemConfig {
  default?: any;
  validators: any[];
}

export interface RxzFormConfig {
  [key: string | number]: RxzFormItemConfig | RxzFormConfig;
}

export type RxzLabelWidth = string | 'auto' | 'fit-content';
