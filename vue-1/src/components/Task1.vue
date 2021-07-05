<template>
  <div class="test1">
    <p @click="print()">拿到这个dom元素</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    methods: {
      print() {
        console.log('TODO');
      }
    }
  });
</script>
