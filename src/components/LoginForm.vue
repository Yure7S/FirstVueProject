<script setup>
import { reactive } from 'vue' 
import { userAuthStore } from '../services/loginService.js';
import app from '../config/axios.config'
import InputSubmit from "./Common/InputSubmit.vue"

const auth = userAuthStore()

const loginData = reactive({
    email: "adminusername@gmail.com",
    password: "87654321"
})

let login = async () => {
    let response = await app.post("/authentication", loginData)
    auth.setToken(response.data.token)
}
</script>

<template>
    <section class="w-11/12 h-md mx-auto mt-28 max-w-screen-3 rounded-lg overflow-hidden flex">
        <form @submit.prevent="login" class="bg-base-contrast mx-auto rounded-lg max-w-sm w-full h-full md:w-1/2 md:max-w-none">
            <div class="w-full h-full flex flex-col justify-center align-middle">
                <h2 class=" text-main font-bold text-4xl text-center mb-11">Login</h2>
                <input v-model="loginData.email" class="w-2/3 my-3 mx-auto p-2 text-colortx-dark rounded-sm bg-secondary" placeholder="E-mail" required type="text">
                <input v-model="loginData.password" class="w-2/3 my-3 mx-auto p-2 text-colortx-dark rounded-sm bg-secondary" placeholder="Password" required type="password">
                <InputSubmit content="Enviar"/>
            </div>
        </form>
        <div id="art" class="bg-secondary w-1/2 h-full align-middle justify-center hidden md:inline-flex">
            <img src="../../public/undraw_mobile_testing_re_w7yb.svg" alt="Ilustration">
        </div>
    </section>
</template>

