<script setup>
import { RouterLink } from 'vue-router'
import Button01 from './Button/Button01.vue'
import Button02 from './Button/Button02.vue'
</script>

<template>
    <header class="flex justify-center p-8 items-center max-w-screen-xl	mx-auto">
        <div class="w-2/6">
            <RouterLink to="/"><i class="fa-solid fa-building-columns"></i></RouterLink>
        </div>
        <nav class="flex justify-between w-2/6">
            <RouterLink class="mx-8" to="/">Home</RouterLink>
            <RouterLink class="mx-8" to="/couses">Courses</RouterLink>
            <RouterLink class="mx-8" to="/Student">Student Area</RouterLink>
        </nav>
        <div class="w-2/6 flex justify-end gap-6">
            <Button01 content="Login"/>
            <Button02 content="Cadastro"/>
        </div>
    </header>
</template>