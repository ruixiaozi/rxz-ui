export type StringMap = { [key: string]: string };
export type Validator = (value: any) => { [key: string]: any | null } | null;
