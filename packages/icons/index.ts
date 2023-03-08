import { useRxzSSR } from '@/use';

// 注册在初始化时引入所有icons
useRxzSSR().registeClientInitNoSSR(() => {
  // 引入所有图标，被loader转换后，需要用到dom操作
  const request = require.context('./', false, /\.svg$/u);
  request.keys().forEach(request);
});
