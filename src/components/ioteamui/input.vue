<template>
    <input type="text" v-model="inputValue" :style="inputStyle" @focus="focus" @blur="blur"></input>
</template>
<script>
  export default{
    data: function () {
      return {
        isfocus: false,
        focusStyle: {
          'box-shadow': '2px 2px 2px 2px #888888'
        },
        defaultStyle: {
          outline: 'none',
          '-webkit-appearance': 'none',
          '-ms-appearance': 'none',
          '-moz-appearance': 'none',
          '-o-appearance': 'none',
          'border-radius': 0,
          'border': '1px solid black',
          'display': 'inline-block',
          height: '30px',
          width: '130px',
          'border-radius': '2px'
        },
        inputValue: ''
      }
    },
    watch: {
      inputValue: {
        handler: function () {
          this.$emit('input', this.inputValue);
        },
        deep: true
      }
    },
    computed: {
      inputStyle(){
        return this.isfocus ?
          lodash.extend(JSON.parse(JSON.stringify(this.defaultStyle)), JSON.parse(JSON.stringify(this.focusStyle)))
          : JSON.parse(JSON.stringify(this.defaultStyle))
      }
    },
    mounted(){
      this.inputValue = this.value ? this.value : '';
      this.defaultStyle = lodash.extend({},
        JSON.parse(JSON.stringify(this.defaultStyle)),
        JSON.parse(JSON.stringify(this.iostyle || {})));
      this.focusStyle = lodash.extend({},
        JSON.parse(JSON.stringify(this.focusStyle)),
        JSON.parse(JSON.stringify(this.ioFocusStyle || {})));
    },
    props: ['value', 'iostyle', 'ioFocusStyle'],
    methods: {
      focus: function () {
        this.isfocus = true;
      },
      blur: function () {
        this.isfocus = false
      }
    }
  }
</script>
<style>

</style>
