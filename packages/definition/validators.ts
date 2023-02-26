import { Validator } from './types';
import {
  isNil as _isNil,
  isNaN as _isNaN,
} from 'lodash';
import { toRef, computed } from 'vue';

export type RxzErrorTip = { [key: string]: string | { isI18N: boolean; label: string; } };

export class RxzValidators {

  private static errorTip: RxzErrorTip = {
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

  static generateValidatorErrorTip(props: any) {
    const errorTip = toRef(props, 'errorTip');
    return computed(() => ({ ...RxzValidators.errorTip, ...errorTip.value }));
  }

  static required: Validator = (value) => {
    if (_isNil(value) || value === '' || value?.length === 0) {
      return {
        required: null,
      };
    }
    return null;
  };

  static regexp(regexp: RegExp): Validator {
    return (value) => {
      const valueStr = String(value);
      if (_isNil(value) || !regexp.test(valueStr)) {
        return {
          regexp: null,
        };
      }
      return null;
    };
  }

  static max(max: number): Validator {
    return (value) => {
      const valueNum = Number(value);
      if (_isNaN(value) || valueNum > max) {
        return {
          max: [max],
        };
      }
      return null;
    };
  }

  static min(min: number): Validator {
    return (value) => {
      const valueNum = Number(value);
      if (_isNaN(value) || valueNum < min) {
        return {
          min: [min],
        };
      }
      return null;
    };
  }

  static range(min: number, max: number): Validator {
    return (value) => {
      const valueNum = Number(value);
      if (_isNaN(value) || valueNum < min || valueNum > max) {
        return {
          range: [min, max],
        };
      }
      return null;
    };
  }

  static maxLength(max: number): Validator {
    return (value) => {
      const valueStr = String(value);
      if (_isNil(value) || valueStr.length > max) {
        return {
          maxLength: [max],
        };
      }
      return null;
    };
  }

  static minLength(min: number): Validator {
    return (value) => {
      const valueStr = String(value);
      if (_isNil(value) || valueStr.length < min) {
        return {
          minLength: [min],
        };
      }
      return null;
    };
  }

  static rangeLength(min: number, max: number): Validator {
    return (value) => {
      const valueStr = String(value);
      if (_isNil(value) || valueStr.length < min || valueStr.length > max) {
        return {
          rangeLength: [min, max],
        };
      }
      return null;
    };
  }


}
