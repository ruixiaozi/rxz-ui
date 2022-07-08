export type RxzLabelWidth = string | 'auto' | 'fit-content';

export class RxzLabelDeclare {

  declare name: 'RxzLabel';

  declare $props: {
    // 是否显示必须的星号，false通过表单的校验判断，默认为false
    required?: boolean,
  };

  declare $emit: {

  }

}

