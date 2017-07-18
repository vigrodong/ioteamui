<template>
  <io-input v-model="wzd"></io-input>
</template>
<script>
  import ioInput from './ioteamui/input.vue'

  export default {
    name: 'show',
    data: function () {
      return {
        wzd: '2'
      }
    },
    watch: {
      wzd: {
        handler: function () {
          console.log(2);
        },
        deep: true
      }
    },
    components: {
      ioInput: ioInput
    }
  }
</script>
<style>
</style>
