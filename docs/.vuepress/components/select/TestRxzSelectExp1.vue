<template>
  <rxz-select v-model="data" :options="options" disabled></rxz-select>
</template>
<script>
export default {
  data() {
    return {
      data: null,
      options: [
        {
          label: "Option1",
          value: 1,
          key: "1",
        },
        {
          label: "Option2",
          value: 2,
          key: "2",
        },
      ],
    };
  },
  created() {
    this.data = this.options[0];
  }
};
</script>
