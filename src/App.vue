<template>
  <div class="container">
    <AddTodo/>
    <FilterTodo/>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";


export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodo
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
</style>
