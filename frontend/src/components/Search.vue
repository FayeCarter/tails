<template>
<div>
    <div class="window" @click="open = false"></div>
    <input
      class="search"
      type="text"
      v-model="store"
      @input="handleInput"
      @keydown.enter="setStore(stores[currentItem])"
      @keydown.down="down"
      @keydown.up="up"
      @focus="open = true"
      autocomplete="off"
      placeholder="Search for store by name or postcode"
    />
    <div v-if="open && stores.length >= 1 && store.length >= 2">
      <ul class="stores" @scroll="handleScroll">
        <div class="suggestions">Top store suggestions</div>
        <li
          v-for="(store, index) in stores"
          :class='{"focus": index == currentItem}'
          v-bind:key="index"
          @click="setStore(store)"
          >
            {{ store }}
        </li>
        <div class="load" v-if="moreStores">scroll to load more</div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      stores: [],
      allStores: [],
      store: "",
      open: false,
      currentItem: 0,
      count: 3,
      moreStores: false
    };
  },
  methods: {
    getStores() {
      this.resetSearch();
      const path = `http://localhost:5000/stores/search?query=${this.store}`;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        axios
          .get(path)
          .then(response => {
            this.allStores = response.data;
            this.addStores();
          })
          .catch(error => {
            console.log(error);
          });
      }, 1000);
    },
    resetSearch() {
      this.count = 3;
      this.moreStores = false;
      this.stores = [];
    },
    addStores() {
      for(let i = 0; this.stores.length < this.allStores.length && i < this.count ; i ++) {
        this.stores.push(this.allStores[i]);
      }
      this.count ++;
      this.stores.length < this.allStores.length ? this.moreStores = true : this.moreStores = false;
    },
    handleInput() {
      if (this.store.length >= 2) {
        this.getStores();
        this.open = true;
      } 
      this.currentItem = 0
    },
    setStore(store) {
      this.store = store;
      this.$emit("storesFound", [this.store]);
      this.open = false;
    },
    down() {
      if (!this.store.length) return;
      if (this.currentItem < this.stores.length - 1) {
        this.currentItem ++;
      }
    },
    up() {
      if (!this.store.length) return;
      if (this.currentItem > 0) {
        this.currentItem --;
      }
    },
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        setTimeout(() => {
          this.addStores();
        }, 500)
      }
    }
  },
  watch: {
    store() {
      this.getStores();
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
  line-height: 20px;
  max-height: 116px;
  overflow: auto;
}

.focus {
  background-color: rgb(230, 229, 229);
}

.window {
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  z-index:-1;
}

.load {
  padding-bottom: 5px;
  color: rgb(183, 183, 183);
  font-style: italic;
  background-color: rgb(242, 242, 242);
}

</style>
