<template>
  <div class="list">
    <form @submit="submit($event)">
      <input type="text" required v-model="value" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(item, index) of list" v-bind:key="item">
        <span>{{ item }}</span>
        <button @click="deleteItem(index);">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        list: [],
        value: '',
      };
    },
    methods: {
      submit(event) {
        event.preventDefault();
        this.list.push(this.value);
        this.value = '';
      },
      deleteItem(index) {
        // 1
        // this.list = this.list.filter((_, i) => i !== index);
        // 2
        this.list.splice(index, 1);
      }
    }
  });
</script>
