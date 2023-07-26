<script setup>
defineProps({
  content: String
})
</script>

<template>
    <button name="value" class="px-4 py-2 bg-yellow-500 text-black font-medium rounded-sm">
        {{ content }}
    </button>
</template>