<script setup>
import CourseCard from '../components/CourseCard.vue';
import { userAuthStore } from '../services/loginService';
import app from '../config/axios.config';

const auth = userAuthStore()

let courses = await app.get("/courses", {
  headers: {
    'Authorization': `Bearer ${auth.token}`
  }
})
let data = courses.data
console.log(data)
</script>

<template>
  <section class="flex max-w-screen-1 gap-10 mt-20 flex-wrap mx-auto md:max-w-screen-3 lg:max-w-screen-4">
    <CourseCard>
      <template #title>
        sdfsd
      </template>
      <template #tipe-course>
        sdfdsf
      </template>
      <template #price>
        sdfsdf
      </template>
    </CourseCard>
  </section>
</template>
