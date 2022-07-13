import { Injectable } from '@tanbo/vue-di-plugin';
import { provide, toRef, watchEffect, inject, Ref, ref } from 'vue';
import {
  defaultsDeep as _defaultsDeep,
  toPairs as _toPairs,
  fromPairs as _fromPairs,
} from 'lodash';
import { RxzCheck, RxzChecks, RxzFormConfig } from './RxzForm.declare';
import { RxzValidators } from '@/definition';
import { Subject } from 'rxjs';

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
      provide('formConfig', ref(formConfig));
      provide('formData', ref(formData));

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

  generateCheck(props: any, onCheck?: Subject<any>) {
    const name = toRef(props, 'name');
    // formItem,且关联name
    if (name.value && onCheck) {
      const parentChecks = inject<Ref<RxzChecks>>('checks');
      const check = this.checkError(props, onCheck);
      if (parentChecks?.value) {
        parentChecks.value[name.value] = check;
      }
      provide('check', check);
      return check;
    }

    const checks = ref<RxzChecks>({});
    const currentCheck: RxzCheck = () => {
      const subRes = _toPairs(checks.value)
        .map(([key, value]) => [key, value()])
        .filter(([, value]) => value);
      const res = subRes?.length ? _fromPairs(subRes) : null;
      return res;
    };
    if (name.value) {
      const parentChecks = inject<Ref<RxzChecks>>('checks');
      if (parentChecks?.value) {
        parentChecks.value[name.value] = currentCheck;
      }
    }
    provide('checks', checks);
    return currentCheck;
  }

  private checkError(props: any, onCheck: Subject<any>): RxzCheck {
    const name = toRef(props, 'name');
    const formConfig = inject<Ref<any>>('formConfig');
    const formData = inject<Ref<any>>('formData');
    const validatorErrorTip = RxzValidators.generateValidatorErrorTip(props);

    return () => {
      const currentConfig = formConfig?.value?.[name.value];
      const currentformData = formData?.value?.[name.value];
      if (!Array.isArray(currentConfig?.validators) || !currentConfig?.validators.length) {
        onCheck.next(null);
        return null;
      }

      for (const item of currentConfig.validators) {
        const validateRes = item(currentformData);
        if (typeof validateRes === 'object') {
          for (const key in validateRes) {
            const tip = validatorErrorTip?.value?.[key];
            // 如果当前key不存在errorTip中，则遍历下一个
            if (tip) {
              const param = validateRes[key];
              const checkRes = {
                tip,
                param,
              };
              onCheck.next(checkRes);
              return checkRes;
            }
          }
        }
      }
      onCheck.next(null);
      return null;
    };
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
