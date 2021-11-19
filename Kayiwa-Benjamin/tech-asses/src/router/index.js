import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StudentForm from '../views/StudentForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/regForm',
    name:'StudentForm',
    component:StudentForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
