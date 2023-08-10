<script setup>
import CourseCard from '../components/CourseCard.vue';
import app from '../config/axios.config';

let courses = await app.get("/courses", {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

console.log(courses.data)

</script>

<template>
  <section class="flex max-w-screen-1 gap-10 mt-20 flex-wrap mx-auto md:max-w-screen-3 lg:max-w-screen-4">
    <CourseCard v-for="element in itens" :key="element">
      <template #title>
        {{ element.nome }}
      </template>
      <template #tipe-course>
        {{ element.tempo }}
      </template>
      <template #price>
        {{ element.price }}
      </template>
    </CourseCard>
  </section>
</template>
