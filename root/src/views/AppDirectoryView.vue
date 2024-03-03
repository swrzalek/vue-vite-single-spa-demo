<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const openApp = () => {
  router.push('/app')
}
</script>

<template>
<div class="root-app app-directory-view">
    <div class="application-tile" @click="openApp">
      Open App
    </div>
  </div>
</template>

<style scoped>
.app-directory-view {
  height: 100vh;
  padding: 50px;
}

.application-tile {
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  background-color: cornflowerblue;
  padding: 10px;
  cursor: pointer;
}
</style>
