<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { TheHeader } from './components/TheHeader.vue'
</script>

<template>
  <TheHeader/>
  <RouterLink to="/">Home</RouterLink>
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
</template>

<style scoped>
</style>
