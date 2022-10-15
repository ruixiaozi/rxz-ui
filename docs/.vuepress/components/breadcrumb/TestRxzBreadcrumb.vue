<template>
  <rxz-breadcrumb :breadcrumbs="breadcrumbs"></rxz-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbs: [
        {
          text: '首页',
          path: '/'
        },
        {
          text: '组件',
          path: '/components'
        },
        {
          text: '面包屑',
        },
      ]
    }
  },
}
</script>
