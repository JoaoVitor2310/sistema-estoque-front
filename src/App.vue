<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AgGrid from './components/AgGrid.vue';
</script>

<template>
  <NavBar/>
  <AgGrid/>
  <RouterView />
</template>

<style scoped>
</style>
