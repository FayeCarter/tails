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

<style scoped>
.store {
  background-color: rgb(240, 247, 251);
  width: 70%;
  margin: 30px auto;
  padding: 15px;
}

.store:hover {
  background-color: rgb(226, 232, 236);
}

</style>