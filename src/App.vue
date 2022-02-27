<template>
  <div>
    <h2>count = {{ count }}</h2>
    <button @click="addCount">증가</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      count : 0
    }
  },
  methods:{
    addCount(){
      this.count++;
    }
  }
}
</script>