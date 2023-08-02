<script setup>
import { RouterLink } from 'vue-router'
import Button from './Common/Button.vue'
import Link from './Common/Link.vue'
</script>

<template>
    <header class="w-full flex justify-between py-8 items-center mx-auto">
        <div class="w-1/5">
            <h1 >
                <RouterLink to="/"><i class="fa-solid fa-building-columns"></i></RouterLink>
            </h1>
        </div>
        <nav class="w-3/5 flex justify-center gap-16">
            <Link content="Home" route="/"></Link>
            <Link content="Courses" route="/courses"></Link>
            <Link content="Student Area" route="/studentArea"></Link>
        </nav>
        <div class="w-1/5 flex justify-end gap-6">
            <RouterLink class="mx-8" to="/authentication">
                <Button class="bg-main text-base" content="Login"/>
            </RouterLink>
        </div>
    </header>
</template>