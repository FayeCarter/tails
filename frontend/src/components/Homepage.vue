<template>
  <div class="homepage">
    <h1>Tails Store Locator</h1>
    <Search />
  </div>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "Homepage",
  components: {
    Search,
  },
};
</script>

<style scoped></style>
