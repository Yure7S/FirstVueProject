<script setup>
import { reactive } from 'vue' 
import app from '../services/axios.config'
import InputSubmit from "./Common/InputSubmit.vue"

const loginData = reactive({
    email: "",
    password: ""
})

let login = async () => {
    let response = await app.post("/authentication", loginData)
    console.log(response)
}
</script>

<template>
    <section class="w-11/12 h-lg mx-auto mt-28 max-w-screen-2 rounded-lg overflow-hidden flex">
        <form @submit.prevent="login" class="bg-base-contrast w-1/2 h-full">
            <div class=" w-full h-full flex flex-col justify-center align-middle">
                <h2 class=" text-main font-bold text-4xl text-center mb-11">Login</h2>
                <input v-model="loginData.email" class="w-2/3 my-3 mx-auto p-2 text-colortx-dark rounded-sm bg-secondary" placeholder="E-mail" required type="text">
                <input v-model="loginData.password" class="w-2/3 my-3 mx-auto p-2 text-colortx-dark rounded-sm bg-secondary" placeholder="Password" required type="password">
                <InputSubmit content="Enviar"/>
            </div>
        </form>
        <div class="bg-secondary w-1/2 h-full flex align-middle justify-center">
            <img src="../../public/undraw_mobile_testing_re_w7yb.svg" alt="Ilustration">
        </div>
    </section>
</template>