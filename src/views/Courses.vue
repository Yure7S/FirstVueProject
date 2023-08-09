<script setup>
import CourseCard from '../components/CourseCard.vue';

let itens = [
  {
    nome: "Culinária",
    tempo: "Bacharelado - 5 years",
    price: "1.000"
  },
  {
    nome: "Engenharia",
    tempo: "Bacharelado - 4 years",
    price: "1.350"
  }
]

</script>

<template>
  <section class="flex max-w-screen-1 gap-10 mt-20 flex-wrap mx-auto md:max-w-screen-3 lg:max-w-screen-4">
    <CourseCard v-for="element in itens">
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
