<template>
  <div class="counter">
    <p>Counter: {{ count }}</p>
    <button v-on:click="add">+</button>
    <button @click="sub" v-bind:disabled="count < 1">-</button>
    <p v-if="count < 1">不能再减了</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        count: 0
      };
    },
    methods: {
      add() {
        this.count += 1;
      },
      sub() {
        this.count -= 1;
      }
    },
  });
</script>
