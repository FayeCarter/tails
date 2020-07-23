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
  },
  methods: {
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          console.log("SCROLL")
        }
      };
    },
  },
  mounted() {
    this.scroll();
  }
}
</script>

<style>
#app {
  font-family: Avenir Next, Arial, sans-serif;
  text-align: center;
  color:rgb(3, 14, 45);
  margin-top: 250px;
}
</style>
