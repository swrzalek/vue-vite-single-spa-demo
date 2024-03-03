<template>
  <div class="login root-app">
    <h1>This is Login Page</h1>
    <div>
      <button>
        <router-link to="/app-directory">Login</router-link>
      </button>
    </div>
  </div>
</template>

<style>
  .login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
<script setup lang="ts">
</script>
