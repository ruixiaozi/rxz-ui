<script lang="ts">
import { h, PropType, VNode } from 'vue';

export default {
  props: {
    vnodeMap: { type: Object as PropType<Map<string, VNode>>, default: () => new Map<string, VNode>() },
  },
  setup(props: any) {
    // 返回渲染函数
    return () => h(
      'div',
      {
        class: ['rxz-popup-container'],
      },
      [...props.vnodeMap.values()],
    );
  },
};
</script>

<style lang="scss" scoped>
@import "./RxzPopupTpl.scss";
</style>
