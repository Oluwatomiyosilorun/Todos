<template>
  <div class="todo_container">
    <div v-for="todo in allTodos" :key="todo.id" class="todos">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: { ...mapGetters(['allTodos']) },
};
</script>

<style lang="scss" scoped>
.todo_container {
  background-color: grey;
}
</style>
