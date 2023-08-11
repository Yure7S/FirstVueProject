import { defineStore } from "pinia"
import { ref } from "vue";

export const userAuthStore = defineStore('auth', () => {
    let token = ref(localStorage.getItem("token"))

    function setToken(authToken) {
        localStorage.setItem("token", authToken)
        token.value = authToken
    }

    return {
        setToken
    }
});