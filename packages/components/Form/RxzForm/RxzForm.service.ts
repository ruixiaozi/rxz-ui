import { Injectable } from '@tanbo/vue-di-plugin';
import { provide, toRef, watchEffect, inject, Ref } from 'vue';
import { RxzFormConfig } from './RxzFormInterFace';
import { defaultsDeep as _defaultsDeep } from 'lodash';

/**
 * Service: RxzFormService
 * @description: RxzForm
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzFormService {

  generateForm(props: any, emit: any) {
    const name = toRef(props, 'name');
    if (name.value) {
      // 子表单
      const formConfig = inject<Ref<any>>('formConfig')?.value?.[name.value];
      const formData = inject<Ref<any>>('formData')?.value?.[name.value];
      provide('formConfig', formConfig);
      provide('formData', formData);

      return {};
    }
    const formConfig = toRef(props, 'formConfig');
    const modelValue = toRef(props, 'modelValue');
    watchEffect(() => {
      const reData = this.createFormData(formConfig.value);
      emit('update:modelValue', _defaultsDeep(modelValue.value, reData));
    });

    provide('formConfig', formConfig);
    provide('formData', modelValue);
    return {};
  }

  // 根据config递归创建初始值
  private createFormData(rxzFormConfig: RxzFormConfig): any {
    if (!rxzFormConfig) {
      return {};
    }
    const re = Object.entries(rxzFormConfig).reduce(
      (data, [key, value]) => {
        if (value?.validators) {
          data[key] = value.default ?? null;
          return data;
        }
        data[key] = this.createFormData(value as RxzFormConfig);
        return data;
      },
      {} as any,
    );
    return re;
  }

}
