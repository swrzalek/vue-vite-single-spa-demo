<script setup lang="ts">
import { RouterView } from 'vue-router'
import {getCurrentInstance, provide, ref, useAttrs} from "vue";

const attrs = useAttrs()
const getToken = () => {
  if(attrs?.props?.getToken) {
    return attrs?.props?.getToken()
  }
  return null
}

provide('getToken', getToken)
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
