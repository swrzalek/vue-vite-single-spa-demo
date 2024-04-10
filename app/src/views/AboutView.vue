<template>
  <div class="about">
    <h1>About Page</h1>
    <p>{{ token }}</p>
    <button @click="setToken">Get Token</button>
  </div>
</template>
<script setup lang="ts">
import {inject, ref} from "vue";

const getToken = inject('getToken')
const token = ref('')
const setToken = () => {
  token.value = getToken();
}

</script>

