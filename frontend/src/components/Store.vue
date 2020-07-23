<template>
  <div class="store">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Store",
  props: {
    name: null
  },
};
</script>

<style scoped></style>