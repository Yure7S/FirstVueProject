<script setup>
defineProps({
  content: String
})
</script>

<template>
    <button @click="" name="value" class="px-5 py-1.5 font-medium rounded-sm ease-in-out duration-200 hover:brightness-75">
        {{ content }}
    </button>
</template>