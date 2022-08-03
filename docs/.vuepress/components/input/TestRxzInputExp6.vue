<template>
  <rxz-input v-model="data" password></rxz-input>
  <p>输入：{{ data }}</p>
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
