<script setup>
import { RouterLink } from 'vue-router'
import Button from './Button/Button.vue'
</script>

<template>
    <header class="flex justify-center p-8 items-center mx-auto">
        <div class="w-2/6">
            <h1 >
                <RouterLink to="/"><i class="fa-solid fa-building-columns"></i></RouterLink>
            </h1>
        </div>
        <nav class="flex justify-between w-2/6">
            <RouterLink class="mx-8" to="/">Home</RouterLink>
            <RouterLink class="mx-8" to="/courses">Courses</RouterLink>
            <RouterLink class="mx-8" to="/studentArea">Student Area</RouterLink>
        </nav>
        <div class="w-2/6 flex justify-end gap-6">
            <RouterLink class="mx-8" to="/login"><Button class="bg-main text-base" content="Login"/></RouterLink>
        </div>
    </header>
</template>