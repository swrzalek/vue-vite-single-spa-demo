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
.parent {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 6;
background-color: mediumslateblue;
}
.div2 { grid-area: 2 / 1 / 6 / 2;
  background-color: darkkhaki;
}
.div3 { grid-area: 2 / 2 / 6 / 6; }

</style>
