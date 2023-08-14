<script setup>
import { userAuthStore } from '../services/loginService';
import CourseCard from '../components/CourseCard.vue';
import app from '../config/axios.config';
import { onMounted, ref } from 'vue';

const auth = userAuthStore()
let data = ref()

onMounted(async () => {
  let response = await app.get("/courses", {
    headers: {
      'Authorization': `Bearer ${auth.token}`
    }
  })
  data = response.data
  console.log(data)
})
</script>

<template>
  <h1>Testando</h1>
  <section class="flex max-w-screen-1 gap-10 mt-20 flex-wrap mx-auto md:max-w-screen-3 lg:max-w-screen-4">
        <CourseCard v-for="item in data" :key="item.code" rote="/">
          <template #title>
            {{ item.fullName }}
          </template>
          <template #tipe-course>
            {{ item.category }} - {{ item.duration }} semesters
          </template>
          <template #price>
            {{ item.price }}
          </template>
        </CourseCard>
  </section>
</template>
