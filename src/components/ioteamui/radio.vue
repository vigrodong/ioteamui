<template>
  <label >
    <input type="radio" v-model="radioValue" :value="ioValue" style="display:none" @click="doing">
    <span :style="outside">
      <span :style="radioStyle"></span>
    </span>
  </label>

</template>
<script>
  export default{
    data(){
      return {
        radioValue: '',
        defaultStyle: {
          'background-color': '#fff',
          'border-radius': '100%',
          display: 'inline-block',
          height: '16px',
          'margin-right': '10px',
          'margin-top': '-1px',
          'vertical-align': 'middle',
          'width': '16px',
          'line-height': '1'
        },
        outside:{
          'line-height': '1',
          'background-color': '#fff',
          height: '18px',
          padding: '2px',
          width: '18px',
          'border-radius': '100%',
          display: 'inline-block',
          border: '1px solid rgba(0,0,0,0.15)',
          'vertical-align': 'middle',
        },
        checkedStyle: {
          'margin-top': '-1px',
          'line-height': '1',
          'background-color': '#000',
          content: ' ',
          height: '12px',
          padding: '2px',
          width: '12px',
          'border-radius': '100%',
          display: 'inline-block',
          border: '1px solid rgba(0,0,0,0.15)',
          'vertical-align': 'middle',
          'margin-right': '10px'
        }
      }
    },
    watch: {
      value: {
        handler: function () {
          this.value != this.ioValue ? this.radioValue = '' : this.radioValue = this.value
        },
        deep: true
      }
    },
    computed: {
      radioStyle(){
        if (this.radioValue != '') {
          return this.checkedStyle
        }
        else {
          return this.defaultStyle
        }
      }
    },
    mounted(){
      this.radioValue = this.value == this.ioValue ? this.value : '';
      if (!this.ioStyle) {
        this.defaultStyle = {...this.defaultStyle, ...this.ioStyle}
      }
    },
    props: ['ioValue', 'value', 'ioStyle'],
    methods: {
      doing: function () {
        this.radioValue = this.ioValue;
        this.$emit('input', this.radioValue);
      }
    }
  }
</script>
<style>

</style>
