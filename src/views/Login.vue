<script setup>
import LoginForm from '../components/LoginForm.vue'
import Button from '../components/Common/Button.vue';
import axios from 'axios';

// let usingAxios = () => {
//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(response => console.log(response))
// }

</script>

<template>
  <main>
    <LoginForm/>
    <Button ></Button>
  </main>
</template>
