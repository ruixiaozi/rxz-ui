/**
 * useRxzValidate
 * @description: RxzValidate
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { isNil } from 'lodash';
import { Subject } from 'rxjs';

export type RxzValidator = (value: any) => { [key: string]: any | null } | null;

export type RxzValidatorErrorTip = string | { isI18N: boolean; label: string; };
export type RxzValidatorErrorTips = { [key: string]: RxzValidatorErrorTip };

export type RxzValidatorCheckRes = {
  tip: RxzValidatorErrorTip;
  param: any;
} | null | { [key: string]: RxzValidatorCheckRes };


const errorTips: RxzValidatorErrorTips = {
  required: {
    isI18N: true,
    label: 'validator_required',
  },
  regexp: {
    isI18N: true,
    label: 'validator_regexp',
  },
  max: {
    isI18N: true,
    label: 'validator_max',
  },
  min: {
    isI18N: true,
    label: 'validator_min',
  },
  range: {
    isI18N: true,
    label: 'validator_range',
  },
  maxLength: {
    isI18N: true,
    label: 'validator_max_length',
  },
  minLength: {
    isI18N: true,
    label: 'validator_min_length',
  },
  rangeLength: {
    isI18N: true,
    label: 'validator_range_length',
  },
};


const required: RxzValidator = ((value: any) => {
  if (isNil(value) || value === '' || value?.length === 0) {
    return {
      required: null,
    };
  }
  return null;
});

const regexp = (_regexp: RegExp): RxzValidator => (value: any) => {
  const valueStr = String(value);
  if (isNil(value) || !_regexp.test(valueStr)) {
    return {
      regexp: null,
    };
  }
  return null;
};

const max = (_max: number): RxzValidator => (value: any) => {
  const valueNum = Number(value);
  if (isNaN(value) || valueNum > _max) {
    return {
      max: [_max],
    };
  }
  return null;
};

const min = (_min: number): RxzValidator => (value) => {
  const valueNum = Number(value);
  if (isNaN(value) || valueNum < _min) {
    return {
      min: [_min],
    };
  }
  return null;
};

const range = (_min: number, _max: number): RxzValidator => (value) => {
  const valueNum = Number(value);
  if (isNaN(value) || valueNum < _min || valueNum > _max) {
    return {
      range: [_min, _max],
    };
  }
  return null;
};

const maxLength = (_max: number): RxzValidator => (value) => {
  const valueStr = String(value);
  if (isNil(value) || valueStr.length > _max) {
    return {
      maxLength: [_max],
    };
  }
  return null;
};

const minLength = (_min: number): RxzValidator => (value) => {
  const valueStr = String(value);
  if (isNil(value) || valueStr.length < _min) {
    return {
      minLength: [_min],
    };
  }
  return null;
};

const rangeLength = (_min: number, _max: number): RxzValidator => (value) => {
  const valueStr = String(value);
  if (isNil(value) || valueStr.length < _min || valueStr.length > _max) {
    return {
      rangeLength: [_min, _max],
    };
  }
  return null;
};

/**
 * 校验错误，成功返回null
 * @param data 校验数据
 * @param validators 校验器列表
 * @param _errorTips 校验错误提示映射对象
 * @param onCheck rxjs subject对象
 * @returns RxzValidatorCheckRes
 */
function checkError(
  data: any,
  validators: RxzValidator[],
  _errorTips?: RxzValidatorErrorTips,
  onCheck?: Subject<any>,
): RxzValidatorCheckRes {
  const validatorErrorTips = { ...errorTips, ..._errorTips };

  if (!Array.isArray(validators) || !validators.length) {
    onCheck?.next(null);
    return null;
  }

  for (const item of validators) {
    const validateRes = item(data);
    if (typeof validateRes === 'object') {
      for (const key in validateRes) {
        const tip = validatorErrorTips[key];
        // 如果当前key不存在errorTip中，则遍历下一个
        if (tip) {
          const param = validateRes[key];
          const checkRes = {
            tip,
            param,
          };
          onCheck?.next(checkRes);
          return checkRes;
        }
      }
    }
  }
  onCheck?.next(null);
  return null;
}


export function useRxzValidator() {
  return {
    required,
    regexp,
    max,
    min,
    range,
    maxLength,
    minLength,
    rangeLength,
    checkError,
  };
}
