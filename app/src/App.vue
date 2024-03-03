<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="wrapper remote-app">
      <RouterLink to="/app/about">About Page</RouterLink> |
      <RouterLink to="/app/home">Home Page</RouterLink>
      <RouterView />
    </div>
</template>

<style scoped>
.wrapper {
  padding: 5rem;
  text-align: center;
  height: 100vh;
}
</style>
