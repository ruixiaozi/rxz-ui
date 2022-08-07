<template>
  <rxz-textarea v-model="data" :minRow="3" :maxRow="5" :row="3"></rxz-textarea>
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
