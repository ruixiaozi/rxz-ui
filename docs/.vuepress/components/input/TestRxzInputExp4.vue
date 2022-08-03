<template>
  <rxz-input v-model="data">
    <template v-slot:infront>
      <rxz-icon name="user-circle-o"></rxz-icon>
    </template>
    <template v-slot:inrear>
      <rxz-icon name="edit"></rxz-icon>
    </template>
  </rxz-input>
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
