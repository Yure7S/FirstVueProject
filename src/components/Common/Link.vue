<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    route: String,
    content: String
})
</script>

<template>
    <RouterLink :to="route" class="ease-in-out duration-200 hover:brightness-75">
        {{ content }}
    </RouterLink>
</template>