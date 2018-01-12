<template>
  <div class="file-button" :style="buttonStyle">
    <div class="font-style" :style="fontStyle">
      <slot></slot>
    </div>
    <input type="file" class="file"
           @change="go()"
    >
  </div>
</template>
<script>
  function ajax(options) {
    return new Promise(function(resolve, reject) {
      var defaultOptions = {
        method: 'GET',
        url: '',
        anysc: true,
        data: ''
      }
      if (Object.prototype.toString.call(options) === '[object Object]') {
        defaultOptions = extend(defaultOptions, options);
      }
      var xhr = new XMLHttpRequest()
      try {
        xhr.open(defaultOptions.method, defaultOptions.url, defaultOptions.anysc);
      } catch (err) {
        throw err
      }
      xhr.send(defaultOptions.data)
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText)
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
          reject(xhr.responseText)
        }
      }
    })
  }
  function extend(sup, sub) {
    var newobj = {};
    for (var prop in sup) {
      newobj[prop] = sup[prop];
    }
    for (var prop in sub) {
      newobj[prop] = sub[prop];
    }
    return newobj;
  }
  export default{
    data () {
      return {
        file: null,
        style: {
          width: '80px',
          height: '30px',
          color: 'white',
          "background-color": '#409EFF',
          "line-height": '28px',
          "border-radius":"10px",
          "font-size":"16px"
        }
      }
    },
    props: {
      pathTo: {
        type: String,
        default: '/'
      },
      fileList: {
        type: Array,
        default(){
          return []
        }
      },
      beforeUpload: {
        type: Function,
        default: function(file, upload) {
          upload(new FormData().append('image', file[0]));
        }
      },
      success: {
        type: Function,
        default: function(response, file, fileList) {
          fileList.push(file)
        }
      },
      error: {
        type: Function,
        default: function(response, file, fileList) {
          return true;
        }
      },
      fStyle: {
        type: Object,
        default(){
          return {
            width: "80px",
            height: "30px",
            color: "white",
            "background-color": '#409EFF',
            "line-height": '28px',
            "border-radius":"10px",
            "font-size":"16px"
          }
        }
      }
    },
    computed: {
      buttonStyle(){
        console.log(this.uniStyle);
        return {
          width: this.uniStyle.width,
          height: this.uniStyle.height,
          "background-color": this.uniStyle['background-color'],
          "color":this.uniStyle.color,
          "border-radius":this.uniStyle['border-radius'],

        }
      },
      fontStyle(){
        return {
          "line-height": this.uniStyle['line-height'],
          "font-size":this.uniStyle['font-size']
        }
      },
      uniStyle(){
        return extend(this.style, this.fStyle);
      }
    },
    methods: {
      go: function() {
        this.files = this.$el.getElementsByClassName('file')[0].files;
        this.beforeUpload(this.files, this.upload);
      },
      upload: function(data) {
        ajax({ url: this.pathTo, method: "POST", data: data }).then(function(value) {
          this.success(value, this.files, this.fileList)
        }).catch(function(value) {
          this.error(value, this.file, this.fileList)
        })
      }
    }
  }
</script>
<style>
  .file-button {
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .file {
    display: inline-block;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .font-style {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
</style>
