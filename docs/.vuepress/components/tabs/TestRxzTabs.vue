<template>
  <rxz-tabs :tabs="items" v-model="active">
    <div v-if="active?.key === items[0].key">我是tab1</div>
    <div v-if="active?.key === items[1].key">我是tab2</div>
    <div v-if="active?.key === items[2].key">我是tab3</div>
  </rxz-tabs>
</template>
<script lang="ts">
export default {
  data () {
    return {
      active: null as any,
      items: [
        {
          name: '标签1',
          key: '1',
        },
        {
          name: '标签2',
          key: '2',
        },
        {
          name: '标签3',
          key: '3',
        },
      ]
    }
  },
  created() {
    this.active = this.items[0] as any;
  }
};
</script>
