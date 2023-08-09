<script setup>
import { RouterLink } from "vue-router";
import Link from "./common/link.vue";
import Button from "../components/Common/Button.vue"
</script>

<template>
    <div class="border-base-contrast-02 border border-t-8 rounded p-5 w-full max-w-screen-1 bg-base-contrast overflow-hidden">
        <h3 name="title">Engenharia civil</h3>
        <h4 class=" text-colortx-soft" name="sub-title">Bacherelado - 5 anos</h4>
        <div class=" bg-base-contrast-02 px-3 py-4 p-b my-4 rounded-sm">
            <p>a partir de</p>
            <p><span class="font-bold text-xl">R$ 1530,00</span> por mês</p>
        </div>
        <Link class="text-colortx-soft text-sm" to="/" content="SAIBA MAIS"></Link>
        <hr class=" mt-8 text-base-contrast-02">
        <Button class=" text-sm text-main border mt-5 float-right" content="INSCREVA-SE"></Button>
    </div>
</template>
