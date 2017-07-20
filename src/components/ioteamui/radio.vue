<template>
  <label>
    <input type="radio" v-model="radioValue" :value="ioValue" style="display:none" @click="click" :name="radioName">
    <span :style="outside">
      <span :style="radioStyle"></span>
    </span>
    <slot></slot>
  </label>
</template>
<script>
  export default{
    data(){
      return {
        radioValue: '',
        defaultStyle: {
          'background-color': '#fff',
          height: '12px',
          width: '12px',
          'border-radius': '100%',
          display: 'inline-block',
          position: 'absolute',
        },
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
      },
      radioName(){
        return this.name === undefined ? 'radio' : this.name;
      },
      outside(){
        return {
          'width': this.defaultStyle.width,
          'height': this.defaultStyle.height,
          'border': '1px solid #84D8FC',
          padding: '3px',
          ...{
            'border-radius': '100%',
            display: 'inline-block',
            'vertical-align': 'middle',
            'position': 'relative'
          }
        }
      },
      checkedStyle(){
        return {...this.defaultStyle, 'background-color': '#00CF00'}
      }
    },
    mounted(){
      this.radioValue = (this.value == this.ioValue && this.value != '') ? this.value : '';
      if (this.ioStyle) {
        this.defaultStyle = {...this.defaultStyle, ...this.ioStyle};
      }
    },
    props: ['ioValue', 'value', 'ioStyle', 'name'],
    methods: {
      click: function () {
        this.radioValue = this.ioValue;
        this.$emit('input', this.radioValue);
      }
    }
  }
</script>
<style>

</style>
