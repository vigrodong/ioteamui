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
          height: this.ioSize + 'px',
          width: this.ioSize + 'px',
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
        return this.name
      },
      outside(){
        return {
          ...this.defaultStyle,
          ...{
            'position': 'relative',
            'vertical-align': 'middle',
            'border': '1px solid' + this.ioBorderColor,
            padding: this.ioBorder + 'px',
          }
        }
      },
      checkedStyle(){
        return {...this.defaultStyle, 'background-color': this.ioCheckColor}
      }
    },
    mounted(){
      this.radioValue = (this.value == this.ioValue && this.value != '') ? this.value : '';
    },
    props: {
      ioSize: {
        type: Number,
        default: 10
      },
      ioValue: null,
      ioStyle: null,
      value: null,
      name: {
        type: String,
        default: 'ioRadio'
      },
      ioBorder: {
        type: Number,
        default: 3,
      },
      ioBorderColor: {
        type: String,
        default: "#49B8E1"
      },
      ioCheckColor: {
        tyle: String,
        default: "#00CF00"
      }
    },
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
