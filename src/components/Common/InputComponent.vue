<script setup>
defineProps({
  name: String,
  pholder: String,
  tp: String,
  req: Boolean
})
</script>

<template>
    <input class="p-2 text-colortx-dark rounded-sm bg-secondary" :placeholder="pholder" :required="req" :type="tp">
</template>