<template>
  <div>
    <span class="dispaly-item" v-for="(item, inx) in icons" :key="inx">
      <rxz-icon :size="24" :name="item"></rxz-icon>
      <p>{{ item }}</p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: []
    }
  },
  created() {
    import('./rxz-icon.json').then((res) => {
      if (res?.default) {
        console.log(res.default);
        this.icons = res.default;
      }
    })
  }
}
</script>

<style scoped>
.dispaly-item {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;

}
</style>
