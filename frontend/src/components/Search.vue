<template>
  <div>
    <input class="search" type="text" v-model="store" @input="handleInput" v-on:keyup.enter="sendStores">
    <div v-if="stores.length >= 1">
      <ul class="stores"> 
        <div class="suggestions">Top store suggestions</div>
        <li class="suggested-store" v-for="store in stores" v-bind:key="store" >{{ store }}</li>
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
    sendStores() {
      this.$emit('storesFound', this.stores)
    }
  }
};
</script>

<style scoped>
.search {
  height: 40px;
  border: 1px solid rgb(153, 153, 153);
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 30px;
  width: 400px;
  color: rgb(153, 153, 153);
  font-size: 14px;
  outline: none;
  margin-top: 20px;
}

.suggestions {
  color: rgb(176, 176, 176);  
  font-size: 14px;
  padding: 8px;
  border-bottom: 1px solid rgb(203, 203, 203);
  text-align: left;
}

.stores {
  width: 450px;
  color: rgb(153, 153, 153);
  border: 1px solid rgb(203, 203, 203);
  border-radius: 5px;
  font-size: 12px;
  list-style-type: none;
  padding: 0;
  margin: 20px auto;
}

.suggested-store {
  padding: 5px;
}

.suggested-store:hover {
  background-color: rgb(230, 229, 229);
}
</style>
