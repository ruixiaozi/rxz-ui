/**
 * RxzWaveProcess
 * @description: RxzWaveProcess
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';

export default {
  rxzWaveProcessProps: definePropsUtil({
    process: { type: Number, default: 0 },
    width: { type: String, default: '100px' },
    height: { type: String, default: '100px' },
    border: { type: String, default: 'solid 1px #07c2b7' },
    borderRadius: { type: String, default: '50px' },
    waterColor: { type: String, default: '#07c2b7' },
    emptyColor: { type: String, default: '#ffffff' },
    infoCss: {
      type: Object,
      default: () => ({
        'color': '#000',
        'font-size': '16px',
        'font-weight': 'bold',
      }),
    },
  }),
  rxzWaveProcessEmits: defineEmitsUtil({

  }),
};

