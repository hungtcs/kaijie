<template>
  <Counter />
  <Counter />
  <List />
  <Task1></Task1>
</template>

<script lang="ts">
  import List from './components/List.vue';
  import Task1 from './components/Task1.vue';
  import Counter from './components/Counter.vue';
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      List,
      Task1,
      Counter,
    },
  });
</script>
