<template>
  <rxz-button-group :buttons="buttons"></rxz-button-group>
</template>
<script>
export default {
  data () {
    return {
      buttons: [
        {
          text: '新建',
          type: 'primary',
        },
        {
          text: '编辑',
          onClick: () => {
            console.log('编辑');
          }
        },
        {
          text: '批量删除'
        },
        {
          text: '关闭',
          onClick: () => {
            console.log('关闭');
          }
        },
      ]
    }
  },
}
</script>
