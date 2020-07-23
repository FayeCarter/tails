<template>
  <div class="homepage">
    <h1>Tails Store Locator</h1>
    <Search @storesFound="onStoresFound" />
    <div v-if="stores">
      <Store v-for="store in filteredStores" v-bind:key="store" :name="store" />
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import Store from "./Store.vue";
export default {
  name: "Homepage",
  components: {
    Search,
    Store
  },
  data() {
    return {
      stores: [],
      filteredStores: [],
    }
  },
  methods: {
    onStoresFound(value) {
      this.stores = value
      for (let i = 0; i < 3 && this.filteredStores.length < this.stores.length; i ++) {
        this.filteredStores.push(this.stores[i])
      }
    },
  }
};
</script>

<style scoped></style>
