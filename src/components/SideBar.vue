<script setup>
import Link from "./Common/Link.vue";
import Button from "../components/Common/Button.vue"

defineProps({
    rote: String,
})

</script>

<template>
    <aside class=" flex flex-col gap-5 border-r pr-20 border-base-contrast-02">
        <Link route="sfds" content="Testando" />
        <Link route="sfds" content="Testando" />
        <Link route="sfds" content="Testando" />
        <Link route="sfds" content="Testando" />
    </aside>
</template>
