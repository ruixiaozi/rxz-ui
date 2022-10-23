export interface RxzDataMapItem {
  lable: string;
  value: string | number;
  [key: string]: any;
}

export interface RxzDataMap {
  [key: string]: {
    // 此value与item中的value一一对应
    [value: string | number]: RxzDataMapItem;
  };
}
