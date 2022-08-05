<template>
  <p>禁止粘贴：</p>
  <rxz-input v-model="data" :paste="false"></rxz-input>
  <p>禁止复制：</p>
  <rxz-input v-model="data" :copy="false"></rxz-input>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
