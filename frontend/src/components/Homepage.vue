<template>
  <div class="homepage">
    <h1>Tails Store Locator</h1>
    <Search @storesFound="onStoresFound" />
    <div v-if="stores">
      <Store v-for="store in stores" v-bind:key="store" :name="store" />
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
      stores: []
    }
  },
  methods: {
    onStoresFound(value) {
      this.stores = value
    }
  }
};
</script>

<style scoped></style>
