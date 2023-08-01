<script setup>
import { ref, reactive } from 'vue' 
// ref - usado para tipos primitivos
// reactive - usado somente para objetos
import InputComponent from "./Common/InputComponent.vue"
import InputSubmit from "./Common/InputSubmit.vue"

// let email = ref("")
// let password = ref("")

let loginData = reactive({
    email,
    password
})

let login = () => {
    console.log(loginData)
}

</script>

<template>
    <section class="w-11/12 h-lg mx-auto mt-28 max-w-screen-2 rounded-lg overflow-hidden flex">
        <form @submit.prevent="login" class="bg-base-contrast w-1/2 h-full">
            <div class=" w-full h-full flex flex-col justify-center align-middle">
                <h2 class=" text-main font-bold text-4xl text-center mb-11">Login</h2>
                <InputComponent v-model="loginData.email" class=" w-2/3 my-3 mx-auto" pholder="E-mail" required="true" tp="text"/>
                <InputComponent v-model="loginData.password" class=" w-2/3 my-3 mx-auto" pholder="Password" required="true" tp="password"/>
                <InputSubmit content="Enviar"/>
            </div>
        </form>
        <div class="bg-secondary w-1/2 h-full flex align-middle justify-center">
            <img src="../../public/undraw_mobile_testing_re_w7yb.svg" alt="Ilustration">
        </div>
    </section>
</template>