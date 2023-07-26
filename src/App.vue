<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="">
      <nav class="bg-white">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
</template>

<style scoped>
</style>
