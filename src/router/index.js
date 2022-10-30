import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Class from '../views/Class.vue'
import Edit from '../views/Edit.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/class',
    name: 'class',
    component: Class
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
