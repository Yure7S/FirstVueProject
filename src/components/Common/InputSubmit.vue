<script setup>
defineProps({
  content: String
})
</script>

<template>
    <input class="px-10 py-1.5 bg-main w-fit mx-auto mt-8 text-colortx-dark font-medium rounded-sm ease-in-out duration-200 hover:brightness-75 cursor-pointer" type="submit" :value="content">
</template>