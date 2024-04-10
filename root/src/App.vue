<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </RouterView>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style lang="css">
html, body {
  margin: 0;
}
</style>
