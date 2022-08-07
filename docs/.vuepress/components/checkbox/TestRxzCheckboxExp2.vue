<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items" v-model="data" disabled></rxz-checkbox>
</template>
<script>
export default {
  data () {
    return {
      data: null,
      items: [
        {
          label: '选项A',
          value: 1,
        },
        {
          label: '选项B',
          value: 2,
        }
      ]
    }
  },
  created() {
    this.data = [this.items[0]];
  }
}
</script>
