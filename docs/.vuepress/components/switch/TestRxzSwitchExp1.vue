<template>
  <rxz-switch v-model="data" on-text="开启" off-text="关闭"></rxz-switch>
</template>
<script>
export default {
  data () {
    return {
      data: true,
    }
  },
}
</script>
