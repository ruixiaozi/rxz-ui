<template>
  <rxz-input v-model="data" disabled>
    <template v-slot:infront>
      <rxz-icon name="user"></rxz-icon>
    </template>
  </rxz-input>
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
