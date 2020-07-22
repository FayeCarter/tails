<template>
  <div class="search">
    <input type="text" v-model="store" @input="handleInput">
    <div v-if="stores">
      <ul class="stores"> 
        <li class="suggested_store" v-for="store in stores" v-bind:key="store" >{{ store }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Search",
  data() {
    return {
      stores: []
    }
  },
  methods: {
    getStores() {
      const path = `http://localhost:5000/stores/search?query=${this.store}`
      axios.get(path)
      .then(response => {
        this.stores = response.data;
      })
      .catch(error => {
        console.log(error)
      })
    },
    handleInput() {
      if (this.store.length >= 2) {
        this.getStores()
      }
    },
  }
};
</script>

<style scoped></style>
