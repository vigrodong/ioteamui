<template>
  <div>
    <io-input v-model="wzd"></io-input>
    <br>
    <ioRadio v-model="wzd" :ioValue="'1'" :ioStyle="{width:'20px',height:'20px'}">ssss</ioRadio>
    <br>
    <ioRadio v-model="wzd" :ioValue="'2'">点点滴滴</ioRadio>\<br>
    <ioRadio v-model="wzd" :ioValue="'3'">纯纯粹粹</ioRadio>
  </div>

</template>
<script>
  import ioInput from './ioteamui/input.vue'
  import ioRadio from './ioteamui/radio.vue'
  import ioSelect from './ioteamui/select.vue'

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
          console.log(this.wzd);
        },
        deep: true
      }
    },
    components: {
      ioInput: ioInput,
      ioRadio: ioRadio,
      ioSelect: ioSelect
    }
  }
</script>
<style>
</style>
