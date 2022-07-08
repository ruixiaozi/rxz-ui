export type StringMap = { [key: string]: string };
export type Validator = (value: any, formData?: any, key?: string) => string | undefined;
