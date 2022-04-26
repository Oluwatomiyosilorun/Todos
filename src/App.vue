<template>
  <div class="container">
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
</style>
