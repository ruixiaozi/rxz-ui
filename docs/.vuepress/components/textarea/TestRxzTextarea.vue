<template>
  <rxz-textarea v-model="data"></rxz-textarea>
  <p>输入：</p>
  <pre>{{ data }}</pre>
</template>
<script>
export default {
  data () {
    return {
      data: '',
    }
  },
}
</script>
