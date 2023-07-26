<script setup>
defineProps({
  content: String
})
</script>

<template>
    <button name="value" class="px-4 py-2 bg-gray-300 text-black font-medium rounded-sm">
        {{ content }}
    </button>
</template>