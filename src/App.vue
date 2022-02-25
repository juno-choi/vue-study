<template>
  <div>{{test}}</div>
  <input v-model="test" />
  <img v-bind:src="imageSource" />
  <a v-bind:href='naverUrl'>naver1</a>
  <a :href='naverUrl'>naver2</a>
  
  <hr/>
  <input v-model="food" />
  <h2 v-bind:class="{orange: food==='apple', 'not-good' : food==='rice'}">나는 오렌지색 {{food}}</h2>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      test : 'test입니다.2',
      food : 'apple',
      imageSource : 'https://placeimg.com/100/100/any',
      naverUrl : 'https://naver.com'
    }
  }
}
</script>

<style>
.orange{
  color:orange;
}
.salmon{
  color: salmon;
}
.red{
  color:red;
}
.not-good{
  text-decoration: line-through;
}
</style>