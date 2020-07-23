<template>
  <div id="app">
    <Homepage />
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
#app {
  font-family: Avenir Next, Arial, sans-serif;
  text-align: center;
  color:rgb(3, 14, 45);
  margin-top: 90px;
}
</style>
