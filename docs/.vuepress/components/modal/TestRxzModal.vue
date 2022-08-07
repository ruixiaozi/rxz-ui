<template>
  <div>我是modal</div>
  <rxz-button @click="handleAdd()">添加modal</rxz-button>
</template>
<script>
export default {
  created() {

  },
  methods: {
    handleAdd() {
      this.$RxzModal.create();
    }
  }
}
</script>
