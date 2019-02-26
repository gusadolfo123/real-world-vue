<template>
  <div>
    <h1>Create an Event {{ user.name }}</h1>
    <p>This event was created by {{ user.name }} - {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // computed: mapState({
  //   user: "user",
  //   categories: "categories"
  // })
  computed: {
    catLength() {
      return this.$store.getters.catlength;
    },
    ...mapState(["user", "categories"])
  }
};
</script>

<style scoped>
</style>
