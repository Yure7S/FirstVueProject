<script setup>
defineProps({
  content: String
})
</script>

<template>
    <button name="value" class="px-5 py-1.5 text-black font-medium rounded-sm">
        {{ content }}
    </button>
</template>