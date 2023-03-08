import { ComponentObjectPropsOptions, EmitsOptions } from 'vue';

export function definePropsUtil<PP extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(prop: PP) {
  return prop;
}

export function defineEmitsUtil<T extends EmitsOptions = EmitsOptions>(emits: T) {
  return emits;
}
