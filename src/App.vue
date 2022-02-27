<template>
  <div>헤더</div>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/template/header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>