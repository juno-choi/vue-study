<template>
  <div>
    <h2>key Code = {{ key }}</h2>
    <input type="text" @keydown="keyDownValue($event)">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      key : ''
    }
  },
  methods:{
    keyDownValue(event){
      console.log(event);
      this.key = event.keyCode;
    }
  }
}
</script>