import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Login from '../views/Login.vue'
import StudentArea from '../views/StudentArea.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Login
    },
    {
      path: '/studentArea',
      name: 'studentArea',
      component: StudentArea
    },
    {
      path: '/dashboard',
      name: 'studentArea',
      component: Dashboard
    }
  ]
})

export default router
